import { ReactNode } from 'react'
import TaskContext from './Task'

interface ContextProviderProps {
  children: ReactNode
}

function ContextProviders({ children }: ContextProviderProps) {
  return <TaskContext>{children}</TaskContext>
}

export default ContextProviders
