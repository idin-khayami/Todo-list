import { Task } from '../../types'
import { getItem, setItem } from '../../utils/storage'
import { storageKeys } from './storage-keys'

export const getTasksList = (): Task[] =>
  JSON.parse(getItem(storageKeys.tasksList) ?? '[]')

export const setTasksList = (data: Task[]): void =>
  setItem(storageKeys.tasksList, JSON.stringify(data))
