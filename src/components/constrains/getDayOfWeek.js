import { nameOfDays } from './nameOfDays'

export function getDayOfWeek({ day, startDay }) {
  let currentDayOfWeek = ((day + startDay - 2) % 7)
  if (currentDayOfWeek === 0) {
    currentDayOfWeek = 0
  }

  return (nameOfDays[currentDayOfWeek])
}
