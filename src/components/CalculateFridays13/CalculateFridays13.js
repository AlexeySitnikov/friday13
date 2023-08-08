/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { daysOrder } from '../constrains/daysOrder'
import { getCurrentYear } from '../constrains/getCurrentYear'
import { getDayOfWeek } from '../constrains/getDayOfWeek'

export function CalculateFridays13({ dayOfWeek, leapYear }) {
  const currentYear = getCurrentYear({ leapYear })
  const Year = {
  }

  let startDay = daysOrder[dayOfWeek]
  let countOfFridays13 = 0

  for (const month in currentYear) {
    const days = currentYear[month]
    Year[month] = []
    for (let day = 1; day <= days; day += 1) {
      Year[month].push(getDayOfWeek({ day, startDay }))
      if (day === days) {
        startDay = daysOrder[getDayOfWeek({ day, startDay })] + 1
      }
      if ((day === 13) && (getDayOfWeek({ day, startDay }) === 'Friday')) {
        countOfFridays13 += 1
      }
    }
  }
  // console.log({ Year })
  return { countOfFridays13, Year }
}
