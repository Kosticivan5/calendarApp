import dayjs from "dayjs";
import { getWeeksBetweenDates } from "./CalculateMultiWeek";
import { nanoid } from "nanoid";

// global locale 'ru'
import "dayjs/locale/ru";
import * as localizedFormat from "dayjs/plugin/localizedFormat";
import * as duration from "dayjs/plugin/duration";
dayjs.extend(localizedFormat);
dayjs.locale("ru");
// ---

dayjs.extend(duration);
dayjs.duration();

import * as weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

// get month
export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 1 - firstDayOfMonth;
  let count = 0;

  const daysMatrix = new Array(5).fill([]).map(() => {
    count++;

    if (count > 1) {
      currentMonthCount += 2;
    }
    return new Array(5).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
};

// reduced data
export const getNewData = (data) => {
  let newData = [];
  data.map((info) => {
    const { name, id, start_date, finish_date } = info;

    getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));

    if (dayjs(start_date).week() !== dayjs(finish_date).week()) {
      let newStartDate;
      let spanTransfer;
      let newDay;
      let isFirst;
      let isLast;
      let isMiddle;
      let newFinishDate;
      for (
        let i = 0;
        i <= getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));
        i++
      ) {
        if (i === 0) {
          newStartDate = start_date;
          isFirst = 1;
        } else {
          isFirst = 0;
        }
        if (
          i === getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date) - 1)
        ) {
          isLast = 1;
        }

        if (
          i > 0 &&
          i < getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date) - 1)
        ) {
          isMiddle = 1;
        } else {
          isMiddle = 0;
        }

        let eventStart = dayjs(newStartDate).day();

        const allowedToSpan = 6 - eventStart;

        let addDays = allowedToSpan;

        if (dayjs(finish_date).diff(newStartDate, "day") < allowedToSpan) {
          addDays = dayjs(finish_date).diff(newStartDate, "day");
        }

        newFinishDate = dayjs(newStartDate).add(addDays, "day").format();
        // newFinishDate = dayjs(newFinishDate).format();

        // if (dayjs(newStartDate).month() !== dayjs(newFinishDate).month()) {
        //   let lastDayOfMonth = dayjs(newStartDate).endOf("month").format();
        //   addDays = dayjs(lastDayOfMonth).diff(newStartDate, "day");
        //   isLast = 0;
        //   newFinishDate = dayjs(newStartDate).add(addDays, "day").format();
        // }
        let eventSpanEnd = dayjs(finish_date).diff(dayjs(newStartDate), "day");

        if (eventSpanEnd < 1) {
          eventSpanEnd = 1;
        }

        const newEvent = {
          id: nanoid(),
          name: name,
          start_date: dayjs(newStartDate).format(),
          finish_date: dayjs(newFinishDate).format(),
          is_multiWeek: true,
          is_first: isFirst,
          is_last: isLast,
          is_Middle: isMiddle,
        };

        //   setNewData((newData) => [newEvent, ...newData]);
        newData = [newEvent, ...newData];

        if (eventSpanEnd > allowedToSpan) {
          spanTransfer = eventSpanEnd - allowedToSpan;
        }
        newDay = dayjs(finish_date).subtract(spanTransfer, "day");
        if (dayjs(newDay).get("day") === 6) {
          newDay = dayjs(newDay).add(2, "day");
        }
        if (dayjs(newDay).get("day") === 0) {
          newDay = dayjs(newDay).add(1, "day");
        }

        newStartDate = newDay;

        const titleLimit = name.substring(0, 18);
      }

      return;
    }
    //   setNewData((newData) => [...newData, info]);
    newData = [...newData, info];
  });

  return newData;
};
