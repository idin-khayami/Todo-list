import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getTasksList, setTasksList } from '../../service/storage'
import { CreateTaskInput, Task, UpdateTaskInput, UUID } from '../../types'

interface TaskContextType {
  tasks: Task[]
  createTask: (data: CreateTaskInput) => void
  updateTask: (data: UpdateTaskInput) => void
  getTask: (id: UUID) => Task | undefined
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

  const createTask = (task: CreateTaskInput): Task => {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
      status: DEFAULT_STATUS,
    }
    const newTaskList: Task[] = [...tasks, newTask]
    setTasks(newTaskList)
    setTasksList(newTaskList)
    return newTask
  }

  const updateTask = (task: UpdateTaskInput) => {
    console.log(task)
  }

  const getTask = (id: UUID): Task | undefined => {
    return tasks.find((task) => task.id === id)
  }

  return (
    <TasksContext.Provider value={{ tasks, getTask, createTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskContext
