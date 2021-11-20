import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

export const Course = ({course, part}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={total(part)} />
    </div>
  )
}

const total = (array) => {
  return array.map(item => item.exercises).reduce((prev, curr) => prev + curr,0)
}