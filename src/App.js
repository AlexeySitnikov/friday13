import { useState } from 'react'
import './App.css'
import { Days } from './components/Days/Day'
import { CalculateFridays13 } from './components/CalculateFridays13/CalculateFridays13'

function App() {
  const [leapYear, setLeapYear] = useState(false)
  const [dayOfWeek, setDayOfWeek] = useState('Monday')

  const onClickCheckBoxHandler = (e) => {
    e.stopPropagation()
    setLeapYear(!leapYear)
  }

  const onClickCalculateButtonHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    CalculateFridays13({ dayOfWeek, leapYear })
  }

  return (
    <div className="App">
      <div>
        <p>Choose the day of week for 1st January</p>
        <Days leapYear={leapYear} setDayOfWeek={setDayOfWeek} dayOfWeek={dayOfWeek} />
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
