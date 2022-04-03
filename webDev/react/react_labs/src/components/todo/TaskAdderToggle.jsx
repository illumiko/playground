import {useContext} from 'react'
import {TaskContext} from './TheContainer.jsx'

const TaskAdderToggle = ({styling,symbol}) => {
  const inject = useContext(TaskContext)
  return (
    <button onClick={inject.taskAdder.visible.toggle} className={`${styling}`}>{symbol}</button>
  )
}

export default TaskAdderToggle
