import React, {useState} from 'react'

const Form = ({instructor}) => {
    // USE STATE HOOKS GO AT THE TOP AND WORK AS VARIABLES TOS TORE THE INFORMATION WE NEED FOR THIS COMPONENT 
    // "students" would be the name and allows me to see all the students I have anywhere in my function
    const [students, setStudents] = useState(['Vinay', 'Luca', 'Maxim'])
    
    console.log(students)
    
    // setStudents() is a function that allows me to change the value of students in a simple maner
    const addStudents = () => {
        setStudents([...students,'Roxi'])
    }

  return (
    <div>
        <p>Welcome {instructor}, your students today are:</p>
        <ul>
        </ul>
        <button onClick={addStudents}>Add students</button>
    </div>
  )
}

export default Form