import { nameOfDays } from '../constrains/nameOfDays'
import { SingleDay } from './SingleDay'

export function Days({ dayOfWeek, setDayOfWeek }) {
  const onClickButtonHandler = (e) => {
    setDayOfWeek(e.target.value)
  }

  return (
    <select onChange={onClickButtonHandler} value={dayOfWeek}>
      {nameOfDays.map((el) => (
        <SingleDay day={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
