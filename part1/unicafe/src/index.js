import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Button = ({handler, text}) => {
  return (
      <button onClick={handler}>{text}</button>
  )
}

const Comments = ({text, count}) => {
  return (
  <div>
    <p>{text}</p>
    <p>{count}</p>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGoodComments = () => {
    setGood(good + 1);
  }
  const countNeutralComments = () => {
    setNeutral(neutral + 1);
  }
  const countBadComments = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <div className='buttons'>
        <Button text='good' handler={countGoodComments} />
        <Button text='neutral' handler={countNeutralComments} />
        <Button text='bad' handler={countBadComments} />
      </div>
      <h2>Statistics</h2>
      <div className='counts'>
        <Comments text='Good' count={good}/>
        <Comments text='Neutral' count={neutral}/>
        <Comments text='Bad' count={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)