import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  return (
    <div className='partContainer'>
      <p>{props.part}</p>
      <p className='exercises'>Exercises: {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ],
  }

  return (
    <div>
      <Header course={course.name}/>
      <div className='content'>
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
      </div>
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))