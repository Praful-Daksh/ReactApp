import Header from "./components/Header";
import Tasks from "./components/Tasks"; 
import {useState} from 'react'

function App() {
  const [tasks,setTasks] = useState(
    [{
        id:1,
        text:'Doctor Appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Football Match',
        day:'Feb 6th at 4:30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Shopping',
        day:'Feb 9th at 10:30pm',
        reminder:false,
    },
]) 

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  )
}


export default App;
