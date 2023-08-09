import style from './style.module.css'

export function Day({ day, dayOfWeek }) {
  return (
    <div className={
      (
        ((dayOfWeek === 6) || (dayOfWeek === 7) || (day === 'Sa') || (day === 'Su'))
      )
        ? `${style.hollyday}`
        : `${style.day}`
      }
    >
      <div className={
        (
          (day === 13) && (dayOfWeek === 5)
        )
          ? `${style.friday13}`
          : ''
        }
      >
        {day}
      </div>
    </div>
  )
}
