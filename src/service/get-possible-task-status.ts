type TaskStatus =
  | 'ToDo'
  | 'InProgress'
  | 'Blocked'
  | 'InQA'
  | 'Done'
  | 'Deployed'

const TASK_STATUS_MAP: { [key in TaskStatus]: TaskStatus[] } = {
  ToDo: ['InProgress'],
  InProgress: ['Blocked', 'InQA'],
  Blocked: ['ToDo'],
  InQA: ['ToDo', 'Done'],
  Done: ['Deployed'],
  Deployed: [],
}

export function getPossibleTaskStatus(status: TaskStatus): TaskStatus[] {
  return TASK_STATUS_MAP[status]
}
