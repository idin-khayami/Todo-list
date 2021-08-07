import { Box, Typography } from '@material-ui/core'
import NoResult from '../../components/NoResult'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <PageHeader title="Home" />
      <Box width="100%">
        <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
          <Typography variant="h6" component="p">
            Add a new task
          </Typography>
          <TaskForm />
        </Box>
      </Box>
      <Box width="100%">
        <NoResult />
      </Box>
    </Box>
  )
}

export default Home
