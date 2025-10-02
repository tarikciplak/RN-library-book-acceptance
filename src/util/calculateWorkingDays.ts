export interface WorkingDaysCalculatorProps {
  weekendDays: number[];
  holidays: Date[];
  startDate: Date;
  endDate: Date;
}

export function calculateWorkingDays(startDate: Date, endDate: Date, weekendDays: number[], holidays: Date[]): number {
  let totalWorkingDays = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();

    if (weekendDays.includes(dayOfWeek) || holidays.some((holiday) => holiday.toDateString() === currentDate.toDateString())) {
      currentDate.setDate(currentDate.getDate() + 1);
      continue;
    }
    totalWorkingDays++;
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return totalWorkingDays;
}
