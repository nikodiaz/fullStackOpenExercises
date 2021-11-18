import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Button = ({handler, text}) => {
  return (
      <button onClick={handler}>{text}</button>
  )
}

const Statistics = ({text, count}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = () => {
    if(good === 0 && bad === 0) return 0;
    return (good - bad) / all;
  };
  const positive = () => {
    if(good === 0) return 0;
    return 100 * (good / all)
  };

  const countGoodComments = () => {
    setGood(good + 1);
  }
  const countNeutralComments = () => {
    setNeutral(neutral + 1);
  }
  const countBadComments = () => {
    setBad(bad + 1);
  }
  if(good === 0 && neutral === 0 && bad === 0){
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
        <p>No feedback given</p>
      </div>
    </div>
    )
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
        <table className='counts'>
          <tbody>
            <Statistics text='Good' count={good}/>
            <Statistics text='Neutral' count={neutral}/>
            <Statistics text='Bad' count={bad}/>
            <Statistics text='All' count={all}/>
            <Statistics text='Average' count={average()}/>
            <Statistics text='Positive' count={positive() + '%'}/>
          </tbody>
        </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
