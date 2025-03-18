import { useState } from 'react'
import './App.css'

function App() {

  const [tasks,setTasks] =useState(['Mohamed Nader','Rashad Hamed','Rashad Hamed'])
  const [newTask, setNewTask] = useState('')
  function handleInputChange(e){
    setNewTask(e.target.value)
  }
  function addTask(){
    if(newTask.trim() !==''){
    setTasks((tasks)=> [...tasks, newTask])
    setNewTask('')
  }
}
  function deleteTask(index){
  const updatedTasks = tasks.filter((element,i)=> i !== index)
  setTasks(updatedTasks)
  }
  function moveDownTask(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks]
      updatedTasks[index] = tasks[index + 1]
      updatedTasks[index + 1] = tasks[index]
      setTasks(updatedTasks)
    }

  }
  function moveUpTask(index){
     if(index > 0){
      const updatedTasks = [...tasks]
      updatedTasks[index] = tasks[index - 1]
      updatedTasks[index - 1] = tasks[index]
      setTasks(updatedTasks)
     }

  }


  return (
    <>
      <div>
        <h1>To Do List App</h1>
        <input type="text" placeholder='Enter a new Task' value={newTask} onChange={handleInputChange}  />

        <button onClick={addTask}>Add Task</button>
      </div>
    <ol>
{
        tasks.map((task, index) => ( <li key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveUpTask(index)}>Move Up</button>
            <button onClick={() => moveDownTask(index)}>Move Down</button>

    </li>
        ))
}
    </ol>
    </>
)
}

export default App