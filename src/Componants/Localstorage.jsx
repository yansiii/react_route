
import React, {useEffect, useState} from 'react'

const Localstorage = ()=> {

const [todo, setTodo] = useState("")
const[tasks, setTasks]= useState([])
const[editIndex,setIndex] = useState(-1)

console.log(todo)

const addTodo=()=>{
    setTasks([...tasks,{name:todo}])   
    setTodo("")
}
const editTodo=(name ,index)=>{
  setTodo(name)
  setIndex(index)
}
const updateTodo =()=>{
let x = JSON.parse(localStorage.getItem("todos"))
if(x){
  x.splice(editIndex,1,{name:todo})
  setTasks(x)
}
localStorage.setItem("todos", JSON.stringify(tasks))
setIndex(-1)
setTodo('')
}
// const deleteTodo =(index)=>{
//   const newTasks = tasks.filter((el,i) => i !== index)
//   setTasks(newTasks)
// }



useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(tasks))
},[tasks,todo])


console.log(tasks, "all todos")

  return (
    <div style={{textAlign:"center", marginTop:"70px"}}>
     <h1>Todo - List</h1> 
     <input 
      type='text'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder='Add a new todo'
     />
    
     <button onClick={addTodo} style={{display:editIndex !== -1 ?"none" : "inline"}}> Add todo</button>
     <button style={{display:editIndex!= -1 ?"inline" : "none"}} onClick={updateTodo}> updateTodo</button>

    </div>
  )
}

export default Localstorage
