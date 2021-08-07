import { Box, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'

const EditTask = () => {
  return (
    <>
      <PageHeader title="Edit" />
      <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
        <Typography variant="h6" component="p">
          Edit Task
        </Typography>
        <TaskForm />
      </Box>
    </>
  )
}

export default EditTask
