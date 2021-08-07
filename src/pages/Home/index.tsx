import { Box, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TasksList'

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <PageHeader title="Home" />
      <Box width="100%">
        <Box display="flex" flexDirection="column" flexGrow="1" my={2} px={2}>
          <Typography variant="h6" component="p">
            Add a new task
          </Typography>
          <TaskForm />
        </Box>
      </Box>
      <Box width="100%">
        <TaskList />
      </Box>
    </Box>
  )
}

export default Home
