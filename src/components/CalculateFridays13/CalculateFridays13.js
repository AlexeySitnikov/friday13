/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { getCurrentYear } from '../constrains/getCurrentYear'
import { getDayOfWeek } from '../constrains/getDayOfWeek'
import { nameOfDays } from '../constrains/nameOfDays'

export function CalculateFridays13({ dayOfWeek, leapYear }) {
  const currentYear = getCurrentYear({ leapYear })
  const Year = {}

  let startDay = nameOfDays.findIndex((day) => (day === dayOfWeek)) + 1
  let countOfFridays13 = 0

  for (const month in currentYear) {
    const days = currentYear[month]
    Year[month] = []
    for (let day = 1; day <= days; day += 1) {
      Year[month].push(getDayOfWeek({ day, startDay }))
      if (day === days) {
        const dayName = getDayOfWeek({ day, startDay })
        startDay = nameOfDays.findIndex((el) => (el === dayName)) + 2
      }
      if ((day === 13) && (getDayOfWeek({ day, startDay }) === 'Fr')) {
        countOfFridays13 += 1
      }
    }
  }
  return { countOfFridays13, Year }
}
