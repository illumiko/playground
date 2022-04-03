import {useContext} from 'react' // this importing functions that lets use the context we created
import {TaskContext} from "./TheContainer.jsx" // importing our created context from the main file of the project

const TaskDisplay = () => {
  const inject = useContext(TaskContext)  // Declaring a var for all the values we passed into `value` and declaring the context we want to use, in this case which is TaskContext
  return (
    <div className=''>
      {inject.modifyTasks.content.map(i => (
        <div key={i.id} className="p-4 my-8 border border-blue-300 grid grid-cols-2 items-center">
          <div className='flex flex-col'>
            <div>
              <span className="text-white text-2xl pr-2">Task:</span>
              <h1  className="inline">{i.todo}</h1>
            </div>
            <div>
              <span className="text-white text-2xl pr-2">Done By:</span>
              <h1  className="inline">{i.day}</h1>
            </div>
          </div>
          <span onClick={() => inject.modifyTasks.deleteTask(i.id)} className="cursor-pointer select-none text-red-400 ml-auto">x</span>
        </div>
        ))
      }
    </div>
  )
}

export default TaskDisplay

























