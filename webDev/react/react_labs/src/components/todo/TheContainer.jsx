import React,{ useState } from "react" // Getting stuff for context api
import TaskAdder from "./TaskAdder.jsx"
import TaskDisplay from "./TaskDisplay.jsx"
import TaskAdderToggle from "./TaskAdderToggle.jsx"
export const TaskContext = React.createContext() // This passes data to all the child components NOTE: remember to export this

const Container = () => {
  // Here we create a state which is immutable but using the function defined in the state. ie, here function is `setTasks`
  const [tasks, setTasks] = useState([ 
    {
      id: 1,
      todo: "3idk manh",
      day: "tba",
    },
    {
      id: 2,
      todo: "2idk manh",
      day: "tba",
    },
    {
      id: 3,
      todo: "1idk manh",
      day: "tba",
    },
  ])
  const [show, setShow] = useState(false)

  const provide = {
    modifyTasks:{
      content:tasks,
      deleteTask(id) {
        setTasks(tasks.filter(i => i.id !== id ))
      },
      addTasks(tasks){
        console.log(tasks)
        setTasks(prevI => [...prevI,tasks])
      }
    },
    taskAdder:{
      visible:{
        state: show,
        toggle() {
          setShow(i => i = !i)
        }
      }
    } 
  }
  return (
    // here we're using the context api to provude the created context to all hour child components
    <TaskContext.Provider value={
      provide
    } >
      <div className="bg-gray-800 px-8 min-h-screen">
        <h1 className="text-center text-white text-4xl font-bold pb-6 pt-6">TODO</h1>
        <div className="">
          <TaskAdder></TaskAdder>
        </div>
        <TaskDisplay></TaskDisplay>
        <TaskAdderToggle symbol={`+`} styling={`block ml-auto px-4 py-2 block bg-blue-400 text-blue-900`}></TaskAdderToggle>
      </div>
    </TaskContext.Provider>
  )
}
export default Container
