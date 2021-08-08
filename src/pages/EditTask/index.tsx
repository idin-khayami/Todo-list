import { useParams } from 'react-router-dom'
import { Box, Link, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import { useTasks } from '../../context/Task'
import paths from '../../router/paths'
import { UUID } from '../../types'

const EditTask = () => {
  const { updateTask, getTask } = useTasks()
  const { id } = useParams<{ id: UUID }>()
  const task = getTask(id)

  return (
    <>
      <PageHeader title="Edit" />
      <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
        <Typography variant="h6" component="p">
          Edit Task
        </Typography>
        {task ? (
          <TaskForm onSubmitTask={updateTask} task={task} />
        ) : (
          <Box my={2} textAlign="center">
            <Typography variant="h6" component="p" color="primary">
              Sorry, the task you are looking for does not exist.
            </Typography>
            <Box my={3} textAlign="center">
              <Link href={paths.taskList}>Go Home</Link>
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default EditTask
