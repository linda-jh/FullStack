import React, { useState } from 'react'

const Header = ({teksti}) => <h1>{teksti}</h1>

const Average = ({good, neutral, bad}) => {
  const g = good * 1
  const n = neutral * 0
  const b = bad * (-1)
  const all = good + neutral + bad
  let ave = 0

  if (all != 0) {
    ave = (g + n + b)/all
  }
  
  return ave
}

const Positive = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  let p = 0

  if (all != 0) {
    p = (100 * good / all)
  }

  return p + " %"
}

const Statistics = ({good, neutral, bad}) => {
  // Jos palautetta ei ole annettu
  if(good + neutral + bad == 0) {
    return (
      <>
        <div>No feedback given</div>
      </>
    )
  }else {
    const ave = <Average good={good} neutral={neutral} bad={bad} />
    const pos = <Positive good={good} neutral={neutral} bad={bad} />

    return (
      <table>
        <tbody>
          <StaticLine text={"good"} value={good}/>
          <StaticLine text={"neutral"} value={neutral}/>
          <StaticLine text={"bad"} value={bad}/>
          <StaticLine text={"all"} value={good + neutral + bad}/>
          <StaticLine text={"average"} value={ave}/>
          <StaticLine text={"positive"} value={pos}/>
        </tbody>
      </table>
    )
  }
}

const StaticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({handle, text}) => <button onClick={handle}>{text}</button>

const App = () => {
  const otsikko = "give feedback"
  const otsikko2 = "statistics"
  
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header teksti = {otsikko} />
      <Button handle={() => {setGood(good + 1)}} text={"good"} />
      <Button handle={() => {setNeutral(neutral + 1)}} text={"neutral"} />
      <Button handle={() => {setBad(bad + 1)}} text={"bad"} />
      <Header teksti = {otsikko2} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App