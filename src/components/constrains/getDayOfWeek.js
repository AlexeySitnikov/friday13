export function getDayOfWeek({ day, startDay }) {
  const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturnday', 'Sunday']

  let currentDayOfWeek = ((day + startDay - 2) % 7)
  if (currentDayOfWeek === 0) {
    currentDayOfWeek = 0
  }

  return (dayOfWeek[currentDayOfWeek])
}
