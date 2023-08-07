import { SingleMonth } from './SingleMonth'

export function Month() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const onClickButtonHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <select onChange={onClickButtonHandler}>
      {months.map((el) => (
        <SingleMonth month={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
