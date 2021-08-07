import { useParams } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import { useTasks } from '../../context/Task'
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
          <Typography>Not Found</Typography>
        )}
      </Box>
    </>
  )
}

export default EditTask
