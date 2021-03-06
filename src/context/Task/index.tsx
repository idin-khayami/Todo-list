import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { STATUS_TO_DO } from 'constants/status'
import { getTasksList, setTasksList } from 'service/storage'
import {
  CreateTaskInput,
  DeleteFunction,
  Task,
  UpdateTaskInput,
  UUID,
} from 'types'

interface TaskContextType {
  tasks: Task[]
  createTask: (data: CreateTaskInput) => Task
  updateTask: (data: UpdateTaskInput) => Task
  deleteTask: DeleteFunction
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
  const [tasks, setTasks] = useState<Task[]>(getTasksList)

  const createTask = useCallback(
    (task: CreateTaskInput): Task => {
      const newTask: Task = {
        ...task,
        id: uuidv4(),
        status: STATUS_TO_DO, //status when task created
      }
      const newTaskList: Task[] = [newTask, ...tasks]
      setTasks(newTaskList)
      setTasksList(newTaskList)
      return newTask
    },
    [tasks],
  )

  const getTask = useCallback(
    (id: UUID): Task | undefined => {
      return tasks.find((task) => task.id === id)
    },
    [tasks],
  )

  const updateTask = useCallback(
    (task: UpdateTaskInput): Task => {
      const newTasksList = tasks.map((item) =>
        item.id === task.id ? task : item,
      )
      setTasks(newTasksList)
      setTasksList(newTasksList)
      return task
    },
    [tasks],
  )

  const deleteTask = useCallback(
    (id: UUID): void => {
      const newTaskList = tasks.filter((task) => task.id !== id)
      setTasks(newTaskList)
      setTasksList(newTaskList)
    },
    [tasks],
  )

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        getTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TaskContext
