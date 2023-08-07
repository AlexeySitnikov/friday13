/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { Week } from '../constrains/Week'
import { Year } from '../constrains/Year'
import { getDayOfWeek } from '../constrains/getDayOfWeek'

export function CalculateFridays13({ dayOfWeek, leapYear }) {
  const currentYear = Year({ leapYear })
  const currentWeek = Week()

  let startDay = currentWeek[dayOfWeek]
  let countOfFridays13 = 0

  for (const month in currentYear) {
    const days = currentYear[month]
    for (let day = 1; day <= days; day += 1) {
      if (day === days) {
        startDay = currentWeek[getDayOfWeek({ day, startDay })] + 1
      }
      if ((day === 13) && (getDayOfWeek({ day, startDay }) === 'Friday')) {
        countOfFridays13 += 1
      }
    }
  }
  console.log(`count of 13th of Friday is ${countOfFridays13}`)

  return { startDay, currentYear }
}
