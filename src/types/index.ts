export type UUID = string

interface BaseTask {
  title: string
  description: string
}

export interface Task extends BaseTask {
  id: UUID
  status: string
}

export type CreateTaskInput = BaseTask

export type UpdateTaskInput = Task
