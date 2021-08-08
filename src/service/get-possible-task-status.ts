import { TaskStatus } from '../types'

const TASK_STATUS_MAP: { [key in TaskStatus]: TaskStatus[] } = {
  ToDo: ['ToDo', 'InProgress'],
  InProgress: ['InProgress', 'Blocked', 'InQA'],
  Blocked: ['Blocked', 'ToDo'],
  InQA: ['InQA', 'ToDo', 'Done'],
  Done: ['Done', 'Deployed'],
  Deployed: ['Deployed'],
}

export function getPossibleTaskStatus(status: TaskStatus): TaskStatus[] {
  return TASK_STATUS_MAP[status]
}
