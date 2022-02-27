import React, { useState } from 'react'

const Button = ({handle, text}) => <button onClick={handle}>{text}</button>

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



const MostVotes = ({points, anecdotes}) => {
  let m = 0;

  for(let i = 1; i < points.length; i++) {
    if (points[i] > points[m]) {
      m = i
    }
  }

  if(points[m] === 0) {
    return null;
  }

  return <>
          <p>{anecdotes[m]}</p>
          <p>Has {points[m]} votes</p>
         </>
}

const nextAnecdote = (setSelected, max) => {
  const r = getRandomInt(max)
  setSelected(r);
}

const vote = (selected, points, setPoint) => {
  const copy = [...points]
  copy[selected] += 1
  setPoint(copy)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  

  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(Array(anecdotes.length).fill(0))

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} votes</p>
        <Button handle={() => {vote(selected, points, setPoint)}} text={"vote"} />
        <Button handle={() => {nextAnecdote(setSelected, anecdotes.length)}} text={"next anecdote"} />
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <MostVotes points={points} anecdotes={anecdotes}/>
      </div>
    </div>
  )
}
//
export default App