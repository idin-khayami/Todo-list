import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import WrongPage from '../../components/WrongPage'
import { useTasks } from '../../context/Task'
import paths from '../../router/paths'
import { TaskInput, UpdateTaskInput, UUID } from '../../types'

const EditTask = () => {
  const { updateTask, getTask } = useTasks()
  const { id } = useParams<{ id: UUID }>()
  const task = getTask(id)

  const handleUpdateTask = useCallback(
    (taskData: TaskInput) => {
      // as this is an update case we can cast `taskData` to `UpdateTaskInput`
      updateTask(taskData as UpdateTaskInput)
      window.location.href = paths.home
    },
    [updateTask],
  )

  return (
    <Page>
      <PageHeader title="Edit" />
      <Container>
        <Typography variant="h6" component="p">
          Edit Task
        </Typography>
        {task ? (
          <TaskForm onSubmitTask={handleUpdateTask} task={task} />
        ) : (
          <WrongPage description="Sorry, the task you are looking for does not exist." />
        )}
      </Container>
    </Page>
  )
}

export default EditTask
