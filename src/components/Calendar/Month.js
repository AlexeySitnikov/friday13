import { nameOfDays } from '../constrains/nameOfDays'
import { Day } from './Day'
import { Week } from './Week'
import style from './style.module.css'

export function Month({ month, monthName }) {
  const startDay = nameOfDays.findIndex((day) => (day === month[0])) + 1
  const weeksOfMonth = {}
  let weeksCount = 0
  weeksOfMonth[weeksCount] = ['', '', '', '', '', '', '']

  let i = startDay - 1
  for (let index = 0; index < month.length; index += 1) {
    if ((i === 6) || (index === month.length - 1)) {
      weeksOfMonth[weeksCount][i] = index + 1
      if ((index !== month.length - 1)) {
        weeksCount += 1
        weeksOfMonth[weeksCount] = ['', '', '', '', '', '', '']
      }
      i = -1
    } else {
      weeksOfMonth[weeksCount][i] = index + 1
    }
    i += 1
  }

  const weeks = Object.keys(weeksOfMonth).map((week) => weeksOfMonth[week])

  return (
    <div className={`${style.month}`}>
      <div className={`${style.monthName}`}>
        {monthName}
      </div>
      <div className={`${style.nameOfDays}`}>
        <div className={`${style.week}`}>
          {nameOfDays.map((nameOfDay) => <Day day={nameOfDay} key={crypto.randomUUID()} />)}
        </div>
      </div>
      {weeks.map((week) => <Week week={week} key={crypto.randomUUID()} />)}
    </div>
  )
}
