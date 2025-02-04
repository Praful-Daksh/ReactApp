import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //use Effect
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
    const data = await res.json()
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 100000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    // setShowAddTask(false)
  }

  //toggle reminder task
  const toggleReminder = async (id) => {
    const taskToToogle = await fetchTask(id)
    const updTask = { ...taskToToogle, reminder: !taskToToogle.reminder }
    const res  = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type' : 'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ?
        {
          ...task, reminder: data.reminder
        } : task))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  )
}


export default App;
