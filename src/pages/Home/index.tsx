import { useCallback } from 'react'
import { Box, Typography } from '@material-ui/core'
import PageHeader from '../../components/PageHeader'
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TasksList'
import { useTasks } from '../../context/Task'
import { TaskInput } from '../../types'

const Home = () => {
  const { createTask, tasks } = useTasks()

  const handleAddNewTask = useCallback(
    (newTask: TaskInput) => {
      // as this is an update case we can cast `newTask` to `CreateTaskInput`
      createTask(newTask)
    },
    [createTask],
  )

  return (
    <Box display="flex" flexDirection="column" flexGrow={1} minHeight="100vh">
      <PageHeader title="Home" />
      <Box width="100%">
        <Box display="flex" flexDirection="column" flexGrow="1" my={2} px={2}>
          <Typography variant="h6" component="p">
            Add a new task
          </Typography>
          <TaskForm onSubmitTask={handleAddNewTask} />
        </Box>
      </Box>
      <Box width="100%" display="flex" flexGrow={1}>
        <TaskList tasks={tasks} />
      </Box>
    </Box>
  )
}

export default Home
