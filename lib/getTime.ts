import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();

  const firstDayOfThisMonth = dayjs()
    .set("month", month)
    .startOf("month")
    .day();
  let dayCounter = -firstDayOfThisMonth;

  return Array.from({ length: 5 }, () =>
    Array.from({ length: 7 }, () => dayjs(new Date(year, month, ++dayCounter)))
  );
};
