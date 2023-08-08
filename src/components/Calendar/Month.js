import { daysOrder } from '../constrains/daysOrder'
import { Day } from './Day'
import style from './style.module.css'

export function Month({ month }) {
  const startDay = daysOrder[month[0]]
  let week = ['-', '-', '-', '-', '-', '-', '-']

  // let i = 0
  // for (let index = 0; index < (startDay - 1); index += 1) {
  //   // week.push('-')
  //   i = index + 1
  // }

  let i = startDay - 1
  for (let index = 0; index < month.length; index += 1) {
    if ((i === 6) || (index === month.length - 1)) {
      week[i] = month[index]
      i = -1
      console.log({ week })
      week = ['-', '-', '-', '-', '-', '-', '-']
    } else {
      week[i] = month[index]
    }
    i += 1
  }

  return (
    <div className={`${style.month}`}>
      {month.map((day) => <Day day={day} key={crypto.randomUUID()} />)}
    </div>
  )
}
