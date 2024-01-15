import dayjs from "dayjs";

export const CalculateMultiWeek = (start_date, finish_date, name) => {
  const eventStart = dayjs(start_date).day();

  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");

  if (eventEnd < 1) {
    eventEnd = 1;
  }
  const titleLimit = name.substring(0, 18);

  let newStartDate;
  let spanTransfer;
  let newDay;
  let newEventStart;

  const allowedToSpan = 6 - eventStart;
  if (eventEnd > allowedToSpan) {
    spanTransfer = eventEnd - allowedToSpan;
  }
  newDay = dayjs(finish_date).subtract(spanTransfer, "day");
  if (dayjs(newDay).get("day") === 6) {
    newDay = dayjs(newDay).add(2, "day");
  }
  if (dayjs(newDay).get("day") === 0) {
    newDay = dayjs(newDay).add(1, "day");
  }
  // mapEvents.set(nanoid(), newDay);
  newStartDate = newDay;
  newEventStart = dayjs(newStartDate).day();

  return {
    newStartDate,
    spanTransfer,
    newDay,
    newEventStart,
    titleLimit,
    eventStart,
    eventEnd,
  };
};

export function getWeeksBetweenDates(startDate, endDate) {
  // Ensure start date is before end date
  if (startDate.isAfter(endDate)) {
    [startDate, endDate] = [endDate, startDate];
  }

  // Initialize a counter for weeks
  let weeksDifference = 0;

  // Copy the start date to avoid modifying the original
  let currentDate = startDate.clone();

  // Loop until the current date exceeds the end date
  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, "day")) {
    // Check if the current date is at the start of a new week (Monday)
    if (currentDate.day() === 1) {
      weeksDifference++;
    }

    // Move to the next day
    currentDate = currentDate.add(1, "day");
  }

  return weeksDifference;
}
