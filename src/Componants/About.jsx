import React ,{useEffect,useState} from 'react'

function About() {
  const [task1, setTask1] = useState([])
  useEffect (()=>{
    let task1 = JSON.parse(localStorage.getItem("todos"))

    if(task1){
      setTask1(task1)
      console.log(task1)
    }
  },[])

  const editTodo = (name,index) => {
    const updatedTodo = prompt("update the todo ", name)
    if(updatedTodo !== null){
      const updatedTasks= task1.map((task , i)=>
    i === index ? {name: updatedTodo} : task
    )
    setTask1(updatedTasks)
    localStorage.setItem('todos', JSON.stringify(updatedTasks))
    }
  }
  
  const deleteTodo =(index)=>{
    const newTasks = task1.filter((el,i) => i !== index)
    setTask1(newTasks)
  }


  return (
    <>
  
  <ul>

{
  task1.map((el,index)=>{
    return<div style={{display:"flex", justifyContent:'center', marginTop:"50px", fontWeight:"bold"}}>
      <li> {el.name}</li>
       <button 
       onClick={()=>editTodo(el.name,index)}
       >Edit</button>
      <button 
      onClick={()=>deleteTodo(index)}
      >Delete</button> 
    
    </div>
  })
}
    </ul>


    </>
  )
}

export default About