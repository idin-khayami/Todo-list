import {
  STATUS_STATE_BLOCKED,
  STATUS_STATE_DEPLOYED,
  STATUS_STATE_DONE,
  STATUS_STATE_IN_PROGRESS,
  STATUS_STATE_IN_QA,
  STATUS_STATE_TO_DO,
} from '../../constants/status'
import { TaskStatus } from '../../types'

export const mapStatusStateToStatusName = (status: TaskStatus): string => {
  const statusList: { [key in TaskStatus]: string } = {
    [STATUS_STATE_TO_DO]: 'To Do',
    [STATUS_STATE_IN_PROGRESS]: 'In Progress',
    [STATUS_STATE_BLOCKED]: 'Blocked',
    [STATUS_STATE_IN_QA]: 'In Qa',
    [STATUS_STATE_DONE]: 'Done',
    [STATUS_STATE_DEPLOYED]: 'Deployed',
  }

  return statusList[status]
}
