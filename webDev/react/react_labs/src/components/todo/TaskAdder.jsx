import {useState,useContext} from 'react'
import {TaskContext} from './TheContainer.jsx'
import TaskAdderToggle from './TaskAdderToggle.jsx'

const TaskAdder = () => {
  //import context
  const inject = useContext(TaskContext)
  //init stats
  const [todo, setTask] = useState('')
  const [day, setDay] = useState('')
  const add = () => {
    const id = Math.floor(Math.random()*100 + 1)
    if(!todo){
      alert("Please enter task")
    }else{
      inject.modifyTasks.addTasks({id,todo,day})
    }
  }
  return (
    <div>
      <div className={`bg-black opacity-70 h-screen absolute top-0 bottom-0 left-0 right-0 ${inject.taskAdder.visible.state ? 'block' : 'hidden'}`}> </div>
        <div className={`-mx-8 right-1/4 left-10  opacity-100 absolute ${inject.taskAdder.visible.state ? 'block' : 'hidden'}`}>
          <div className="bg-gray-800 p-8">
            <TaskAdderToggle symbol={`X`} styling={`absolute right-10 top-5 text-red-400 text-xl cursor-pointer`}></TaskAdderToggle>
            <div className="flex flex-col py-4 sm:py-8">
              <label  htmlFor="taskInput" className="text-blue-400">Enter Task:</label>
              <textarea onChange={(e) => {setTask(e.target.value)}} value={`${todo}`} className="bg-blue-100 text-gray-800 p-2" name="task" id="taskInput"></textarea>
            </div>
            <div className="flex flex-col py-4 sm:py-8">
              <label htmlFor="dateInput" className="text-blue-400">Date For Task:</label>
              <textarea onChange={(e) => {setDay(e.target.value)}} value={`${day}`} placeholder='format: time/month-day. ie, 1:45pm/03-24' className="p-2 bg-blue-100 text-gray-800" name="date" id="dateInput"></textarea>
            </div>
            <button onClick={add} className="bg-blue-400 text-black p-2 px-4 block ml-auto text-xl font-thin">Add</button>
          </div>
        </div>
    </div>
  )
}
export default TaskAdder




