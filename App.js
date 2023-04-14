import Course from "./components/Course"

const Total = ({ parts }) => {
  let sum = 0
  const result = parts.reduce((accumulator, parts) =>
  accumulator + parts.exercises, sum);
  return(
    <p>
      <b>Total of {result} exercises.</b>
    </p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course, i) =>
        <div key={i}>
          <Course course={course} />
          <Total parts={course.parts}/>
        </div>
      )}
      
    </div>
  )
}

export default App
