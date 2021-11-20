import { Part } from './Part';

export const Content = ({parts}) => {
  return (
    <div className='content'>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
    </div>
  )
}