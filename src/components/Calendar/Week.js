import { Day } from './Day'
import style from './style.module.css'

export function Week({ week }) {
  return (
    <div className={`${style.week}`}>
      {week.map((day, index) => (
        <Day day={day} dayOfWeek={index + 1} key={crypto.randomUUID()} />
      ))}
    </div>
  )
}
