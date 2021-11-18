import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const random = (num) => Math.floor(Math.random() * num);

const Button = ({handler, text}) => {
  return (
      <button onClick={handler}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Array(6).fill(0));
  const [mostVoted, setMostVoted] = useState(0)

  const handleSelect = () => {
    setSelected(random(anecdotes.length))
  }
  const handlePoints = () => {
    const copyPoints = [...points];
    copyPoints[selected] += 1;
    setPoints(copyPoints)
    //console.log(mostVoted)
    if(copyPoints[selected] > copyPoints[mostVoted]){
      setMostVoted(selected);
      //console.log(mostVoted)
    }
  }

  return (
    <div>
      <div className='buttons'>
        <Button handler={handleSelect} text='Next Anecdote'/>
        <Button handler={handlePoints} text='Vote'/>
      </div>
      <p>Has {points[selected]} votes</p>
      <p>{anecdotes[selected]}</p>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>Has {points[mostVoted]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root'));