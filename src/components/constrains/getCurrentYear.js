export function getCurrentYear({ leapYear }) {
  const currentYear = {
    January: 31,
    February: leapYear ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    Luky: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    Decembrt: 31,
  }
  return (currentYear)
}
