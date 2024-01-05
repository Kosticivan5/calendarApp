import dayjs from "dayjs";

// global locale 'ru'
import "dayjs/locale/ru";
import * as localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
dayjs.locale("ru");
// ---

import * as weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

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
