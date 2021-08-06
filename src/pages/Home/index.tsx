import { Box } from '@material-ui/core'
import AddNewTask from '../../components/AddNewTask'
import NoResult from '../../components/NoResult'
import PageHeader from '../../components/PageHeader'

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <PageHeader title="Home" />
      <Box width="100%">
        <AddNewTask />
      </Box>
      <Box width="100%">
        <NoResult />
      </Box>
    </Box>
  )
}

export default Home
