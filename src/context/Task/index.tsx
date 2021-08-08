import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { STATUS_STATE_TO_DO } from '../../constants/status'
import { getTasksList, setTasksList } from '../../service/storage'
import { CreateTaskInput, Task, UpdateTaskInput, UUID } from '../../types'

interface TaskContextType {
  tasks: Task[]
  createTask: (data: CreateTaskInput) => void
  updateTask: (data: UpdateTaskInput) => void
  getTask: (id: UUID) => Task | undefined
}

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
      status: STATUS_STATE_TO_DO, //status when task created
    }
    const newTaskList: Task[] = [...tasks, newTask]
    setTasks(newTaskList)
    setTasksList(newTaskList)
    return newTask
  }

  const getTask = (id: UUID): Task | undefined => {
    return tasks.find((task) => task.id === id)
  }

  const updateTask = (task: UpdateTaskInput): Task => {
    // const taskTest = tasks.find((item) => item.id === task.id)
    const newTask = task
    const newTaskList: Task[] = [...tasks, newTask]
    setTasks(newTaskList)
    setTasksList(newTaskList)
    return newTask
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, getTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TaskContext
