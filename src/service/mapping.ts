import {
  STATUS_STATE_BLOCKED,
  STATUS_STATE_DEPLOYED,
  STATUS_STATE_DONE,
  STATUS_STATE_IN_PROGRESS,
  STATUS_STATE_IN_QA,
  STATUS_STATE_TO_DO,
} from '../constants/status'

export const mapStatusStateToStatusName = (status: string): string => {
  let statusState = STATUS_STATE_TO_DO
  const statusList: any = {
    [STATUS_STATE_TO_DO]: 'To Do',
    [STATUS_STATE_IN_PROGRESS]: 'In Progress',
    [STATUS_STATE_BLOCKED]: 'Blocked',
    [STATUS_STATE_IN_QA]: 'In Qa',
    [STATUS_STATE_DONE]: 'Done',
    [STATUS_STATE_DEPLOYED]: 'Deployed',
  }
  for (const state in statusList) {
    if (status.includes(state)) {
      statusState = state
    }
  }
  return statusList[statusState]
}
