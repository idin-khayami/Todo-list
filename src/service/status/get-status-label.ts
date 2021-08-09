import { STATUS_LABEL_MAP } from 'constants/status'
import { TaskStatus } from 'types'

export const getStatusLabel = (status: TaskStatus): string => {
  return STATUS_LABEL_MAP[status]
}
