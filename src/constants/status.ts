import { TaskStatus } from '../types'

/**
 * Status
 */

export const STATUS_TO_DO = 'ToDo'
export const STATUS_IN_PROGRESS = 'InProgress'
export const STATUS_BLOCKED = 'Blocked'
export const STATUS_IN_QA = 'InQA'
export const STATUS_DONE = 'Done'
export const STATUS_DEPLOYED = 'Deployed'

export const STATUS_LABEL_MAP: { [key in TaskStatus]: string } = {
  [STATUS_TO_DO]: 'To Do',
  [STATUS_IN_PROGRESS]: 'In Progress',
  [STATUS_BLOCKED]: 'Blocked',
  [STATUS_IN_QA]: 'In Qa',
  [STATUS_DONE]: 'Done',
  [STATUS_DEPLOYED]: 'Deployed',
}
