import { getStatusLabel } from './get-status-label'

test('getPossibleTaskStatus should return correct value for next status', () => {
  expect(getStatusLabel('ToDo')).toBe('To Do')
  expect(getStatusLabel('InProgress')).toBe('In Progress')
  expect(getStatusLabel('Blocked')).toBe('Blocked')
  expect(getStatusLabel('InQA')).toBe('In Qa')
  expect(getStatusLabel('Done')).toBe('Done')
  expect(getStatusLabel('Deployed')).toBe('Deployed')
})
