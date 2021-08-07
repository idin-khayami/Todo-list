import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getTasksList, setTasksList } from '../../service/storage'
import { CreateTaskInput, Task, UpdateTaskInput } from '../../types'

interface TaskContextType {
  tasks: Task[]
  createTask: (data: CreateTaskInput) => void
  updateTask: (data: UpdateTaskInput) => void
}
const DEFAULT_STATUS = 'ToDo'

export const TasksContext = createContext<TaskContextType | null>(null)

export function useTasks() {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks must be wrapped in TasksContext.Provider')
  }
  return context
}

interface TaskContextProps {
  children: ReactNode
}

function TaskContext({ children }: TaskContextProps) {
  const existingTasks = getTasksList()
  const [tasks, setTasks] = useState<Task[]>(existingTasks)

  const createTask = (task: CreateTaskInput) => {
    const newTaskList = [
      ...tasks,
      {
        ...task,
        id: uuidv4(),
        status: DEFAULT_STATUS,
      },
    ]
    setTasks(newTaskList)
    setTasksList(newTaskList)
  }

  const updateTask = (task: UpdateTaskInput) => {
    console.log(task)
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskContext
