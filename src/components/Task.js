import Button from './Button'

function Task({task,onDelete,onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=> onToggle(task.id)}> 
      <h3>{task.text} <Button color='transparent' textColor='red' text='❌' onClick={()=> onDelete(task.id)}/> </h3>
      <p>{task.day}</p>
    
    </div>
  )
}

export default Task
