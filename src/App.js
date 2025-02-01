import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Football Match',
      day: 'Feb 6th at 4:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Feb 9th at 10:30pm',
      reminder: false,
    },
    ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() *100000) + 1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
    setShowAddTask(false)
  }

  //toggle reminder task
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  )
}


export default App;
