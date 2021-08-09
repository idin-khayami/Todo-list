import { getPossibleTaskStatus } from './get-possible-task-status'

test('getPossibleTaskStatus should return correct value for next status', () => {
  expect(getPossibleTaskStatus('ToDo')).toEqual(['ToDo', 'InProgress'])
  expect(getPossibleTaskStatus('InProgress')).toEqual([
    'InProgress',
    'Blocked',
    'InQA',
  ])
  expect(getPossibleTaskStatus('Blocked')).toEqual(['Blocked', 'ToDo'])
  expect(getPossibleTaskStatus('InQA')).toEqual(['InQA', 'ToDo', 'Done'])
  expect(getPossibleTaskStatus('Done')).toEqual(['Done', 'Deployed'])
  expect(getPossibleTaskStatus('Deployed')).toEqual(['Deployed'])
})
