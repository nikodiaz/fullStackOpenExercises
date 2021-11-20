export const Part = ({part, exercises}) =>{
  return (
    <div className='partContainer'>
      <p>{part}</p>
      <p className='exercises'>Exercises: {exercises}</p>
    </div>
  )
}