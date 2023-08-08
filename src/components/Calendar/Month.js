import { daysOrder } from '../constrains/daysOrder'
import { Day } from './Day'
import style from './style.module.css'

export function Month({ month }) {
  const startDay = daysOrder[month[0]]
  let week = ['-', '-', '-', '-', '-', '-', '-']

  let i = 0
  for (let index = 0; index < (startDay - 1); index += 1) {
    week.push('-')
    i = index + 1
  }

  for (let index = 0; index < month.length; index += 1) {
    i += 1
    if (i === 7) {
      week.push(month[index])
      i = 0
      week = []
    } else {
      week.push(month[index])
    }
    console.log(week)
  }

  return (
    <div className={`${style.month}`}>
      {month.map((day) => <Day day={day} key={crypto.randomUUID()} />)}
    </div>
  )
}
