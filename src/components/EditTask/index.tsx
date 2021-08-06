import { Box, Typography } from '@material-ui/core'
import TaskForm from '../TaskForm'

const EditTask = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
      <Typography variant="h6" component="p">
        Edit Task
      </Typography>
      <TaskForm />
    </Box>
  )
}

export default EditTask
