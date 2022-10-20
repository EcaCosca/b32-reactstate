import React, {useState, useEffect} from 'react'

const Form = ({instructor}) => {
    // USE STATE HOOKS GO AT THE TOP AND WORK AS VARIABLES TOS TORE THE INFORMATION WE NEED FOR THIS COMPONENT 
    // "students" would be the name and allows me to see all the students I have anywhere in my function
    const [students, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState()

    useEffect(()=>{
        if(localStorage.getItem('students')){
            setStudents(localStorage.getItem('students').split(','))
        }
    },[])
    
    console.log(students)
    
    // setStudents() is a function that allows me to change the value of students in a simple maner
    const addStudents = () => {
        const result = [...students, newStudent]
        setStudents(result)
        localStorage.setItem('students', result)
    }


    const handleChange = (e) =>{
        setNewStudent(e.target.value)
    }

  return (
    <div>
        <p>Welcome {instructor}, your students today are:</p>
        <ul>
            {/* STUDENTS IS AN ARRAY, THEREFOR I CAN USE ARRAY METHODS SUCH AS .MAP()  AND GET IT TO RENDER SEVERAL ELEMENTS THAT ARE IDENTICALL BUT WITH DINAMIC VALUES  */}
            {
                students.map(whatever => <li>{whatever}</li>)
            }
        </ul>
        {/* LET'S GIVE THE USER A WAY TO WRITE THE NEW NAME FOR OUR STUDENT LIST  */}
        <input onChange={handleChange}></input>
        <button onClick={addStudents}>Add students</button>
    </div>
  )
}

export default Form