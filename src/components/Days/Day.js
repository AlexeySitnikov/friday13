import { SingleDay } from './SingleDay'

export function Days() {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'SaturnDay',
    'Sunday',
  ]

  const onClickButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.target.value)
  }
  return (
    <select onChange={onClickButtonHandler}>
      {days.map((el) => (
        <SingleDay day={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
