import { Task } from 'types'
import { storageKeys } from './storage-keys'

export const getTasksList = (): Task[] =>
  JSON.parse(localStorage.getItem(storageKeys.tasksList) ?? '[]')

export const setTasksList = (data: Task[]): void =>
  localStorage.setItem(storageKeys.tasksList, JSON.stringify(data))
