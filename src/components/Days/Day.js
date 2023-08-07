import { SingleDay } from './SingleDay'

export function Days({ dayOfWeek, setDayOfWeek }) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturnday',
    'Sunday',
  ]

  const onClickButtonHandler = (e) => {
    setDayOfWeek(e.target.value)
  }

  return (
    <select onChange={onClickButtonHandler} value={dayOfWeek}>
      {days.map((el) => (
        <SingleDay day={el} dayOfWeek={dayOfWeek} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
