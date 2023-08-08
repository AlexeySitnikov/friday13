/* eslint-disable no-restricted-syntax */
import { useState } from 'react'
import './App.css'
import { Days } from './components/Days/Day'
import { CalculateFridays13 } from './components/CalculateFridays13/CalculateFridays13'
import { Month } from './components/Calendar/Month'

function App() {
  const [leapYear, setLeapYear] = useState(false)
  const [dayOfWeek, setDayOfWeek] = useState('Monday')
  const [showCalendar, setShowCalendar] = useState(false)

  const onClickCheckBoxHandler = (e) => {
    e.stopPropagation()
    setLeapYear(!leapYear)
  }

  const onClickCalculateButtonHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    // console.log(`count of 13th of Friday is
    // ${CalculateFridays13({ dayOfWeek, leapYear }).countOfFridays13}`)
    // console.log(CalculateFridays13({ dayOfWeek, leapYear }).Year)
    setShowCalendar(true)
  }

  if (showCalendar) {
    const currentYear = CalculateFridays13({ dayOfWeek, leapYear }).Year
    const monthes = Object.keys(currentYear).map((month) => currentYear[month])

    return (
      <div className="Calendar">
        {monthes.map((month) => <Month key={crypto.randomUUID()} month={month} />)}
      </div>
    )
  }

  return (
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
      <div>
        <button type="button" onClick={onClickCalculateButtonHandler}>Рассчитать</button>
      </div>
    </div>
  )
}

export default App
