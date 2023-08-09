/* eslint-disable no-restricted-syntax */
import { useState } from 'react'
import './App.css'
import { Days } from './components/Days/Day'
import { CalculateFridays13 } from './components/CalculateFridays13/CalculateFridays13'
import { Month } from './components/Calendar/Month'
import { nameOfMonthes } from './components/constrains/nameOfMonthes'
import { nameOfDays } from './components/constrains/nameOfDays'

function App() {
  const [leapYear, setLeapYear] = useState(false)
  const [dayOfWeek, setDayOfWeek] = useState(nameOfDays[0])

  const onClickCheckBoxHandler = (e) => {
    e.stopPropagation()
    setLeapYear(!leapYear)
  }

  const currentYear = CalculateFridays13({ dayOfWeek, leapYear }).Year
  const monthes = Object.keys(currentYear).map((month) => currentYear[month])

  return (
    <>
      <div className="App">
        <div>
          <p>Choose the day of week for 1st January</p>
          <Days setDayOfWeek={setDayOfWeek} dayOfWeek={dayOfWeek} />
        </div>
        <div>
          <label htmlFor="leapYear">
            Leap Year
            <input type="checkbox" name="leapYear" checked={leapYear} onChange={onClickCheckBoxHandler} />
          </label>
        </div>
      </div>
      <div className="Friday13">
        The number of 13th of Friday is
        {' '}
        {CalculateFridays13({ dayOfWeek, leapYear }).countOfFridays13}
      </div>
      <div className="Calendar">
        {monthes.map((month, index) => (
          <Month key={crypto.randomUUID()} month={month} monthName={nameOfMonthes[index]} />))}
      </div>

    </>
  )
}

export default App
