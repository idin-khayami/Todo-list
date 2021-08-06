import { Box, Typography } from '@material-ui/core'
import TaskForm from '../TaskForm'

const AddNewTask = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
      <Typography variant="h6" component="p">
        Add a new task
      </Typography>
      <TaskForm />
    </Box>
  )
}

export default AddNewTask
