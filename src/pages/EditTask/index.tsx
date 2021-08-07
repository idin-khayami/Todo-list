import { Box, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import { UpdateTaskInput } from '../../types'

const EditTask = () => {
  const updateTask = (data: UpdateTaskInput) => {
    console.log('add', data)
  }

  return (
    <>
      <PageHeader title="Edit" />
      <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
        <Typography variant="h6" component="p">
          Edit Task
        </Typography>
        <TaskForm onSubmitTask={updateTask} />
      </Box>
    </>
  )
}

export default EditTask
