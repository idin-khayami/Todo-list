export type UUID = string

export type TaskStatus =
  | 'ToDo'
  | 'InProgress'
  | 'Blocked'
  | 'InQA'
  | 'Done'
  | 'Deployed'

interface BaseTask {
  title: string
  description: string
}

export interface Task extends BaseTask {
  id: UUID
  status: TaskStatus
}

export type CreateTaskInput = BaseTask

export type UpdateTaskInput = Task
