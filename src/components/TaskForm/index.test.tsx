import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { v4 as uuidv4 } from 'uuid'
import { getStatusLabel } from 'service/status/get-status-label'
import { Task } from 'types'
import TaskForm from '.'

const validTask: Task = {
  id: uuidv4(),
  title: 'task title',
  description: 'task description should be long',
  status: 'InProgress',
}

const newValidTask: Task = {
  id: validTask.id,
  title: 'task title should be changed',
  description: 'task description should be long and already changed',
  status: 'InQA',
}

const inValidTask: Task = {
  id: uuidv4(),
  title: '',
  description: 'short description',
  status: 'ToDo',
}

const noop = jest.fn()

test('should render edit form properly', async () => {
  await act(async () => {
    render(<TaskForm task={validTask} onSubmitTask={noop} />)
  })

  expect(screen.getByRole('form')).toHaveFormValues({
    title: validTask.title,
    description: validTask.description,
    status: validTask.status,
  })
})

test('should pass correct form data on edit with valid data', async () => {
  const submitHandler = jest.fn()
  await act(async () => {
    render(<TaskForm task={validTask} onSubmitTask={submitHandler} />)
    const titleElement = screen.getByDisplayValue(validTask.title)
    fireEvent.change(titleElement, { target: { value: newValidTask.title } })

    const descriptionElement = screen.getByDisplayValue(validTask.description)
    fireEvent.change(descriptionElement, {
      target: { value: newValidTask.description },
    })

    const statusElement = screen.getByDisplayValue(
      getStatusLabel(validTask.status),
    )
    fireEvent.change(statusElement, { target: { value: newValidTask.status } })

    fireEvent.submit(screen.getByRole('form'))
  })

  expect(submitHandler).toHaveBeenCalledTimes(1)
  expect(submitHandler).toHaveBeenCalledWith({
    title: newValidTask.title,
    description: newValidTask.description,
    status: newValidTask.status,
  })
})

test('should pass correct form data on edit with invalid data', async () => {
  const submitHandler = jest.fn()
  await act(async () => {
    render(<TaskForm task={validTask} onSubmitTask={submitHandler} />)
    const titleElement = screen.getByDisplayValue(validTask.title)
    fireEvent.change(titleElement, { target: { value: inValidTask.title } })

    const descriptionElement = screen.getByDisplayValue(validTask.description)
    fireEvent.change(descriptionElement, {
      target: { value: inValidTask.title },
    })

    const statusElement = screen.getByDisplayValue(
      getStatusLabel(validTask.status),
    )
    fireEvent.change(statusElement, { target: { value: newValidTask.status } })
  })

  const submitButton = screen
    .getByRole('form')
    .querySelector('button[type=submit]')

  expect(submitButton).toBeDisabled()
})

test('should pass correct form data on create with valid data', async () => {
  const submitHandler = jest.fn()
  await act(async () => {
    render(<TaskForm onSubmitTask={submitHandler} />)
    const form = screen.getByRole('form')
    const titleElement = form.querySelector('input[name=title]')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.change(titleElement!, { target: { value: validTask.title } })

    const descriptionElement = form.querySelector('textarea[name=description]')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.change(descriptionElement!, {
      target: { value: validTask.description },
    })

    fireEvent.submit(screen.getByRole('form'))
  })

  expect(submitHandler).toHaveBeenCalledTimes(1)
  expect(submitHandler).toHaveBeenCalledWith({
    title: validTask.title,
    description: validTask.description,
  })
})

test('should pass correct form data on create with invalid data', async () => {
  const submitHandler = jest.fn()
  await act(async () => {
    render(<TaskForm onSubmitTask={submitHandler} />)
    const form = screen.getByRole('form')
    const titleElement = form.querySelector('input[name=title]')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.change(titleElement!, { target: { value: validTask.title } })

    fireEvent.submit(screen.getByRole('form'))
  })

  expect(submitHandler).toHaveBeenCalledTimes(0)
})
