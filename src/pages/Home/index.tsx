import { useCallback, useMemo, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import Container from 'components/Container'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import TaskForm from 'components/TaskForm'
import TaskList from 'components/TasksList'
import { useTasks } from 'context/Task'
import { TaskInput, UUID } from 'types'

const Home = () => {
  const { createTask, tasks, deleteTask } = useTasks()
  const [search, setSearch] = useState('')

  const handleAddNewTask = useCallback(
    (newTask: TaskInput) => {
      // as this is an update case we can cast `newTask` to `CreateTaskInput`
      createTask(newTask)
    },
    [createTask],
  )

  const onDelete = useCallback(
    (id: UUID) => {
      deleteTask(id)
    },
    [deleteTask],
  )

  const filteredTasks = useMemo(() => {
    // we can use startWith and includes both
    return tasks.filter((task) => task.title.includes(search))
  }, [search, tasks])

  return (
    <Page>
      <PageHeader title="Home" />
      <Box width="100%">
        <Container>
          <Typography variant="h6" component="p">
            Add a new task
          </Typography>
          <TaskForm onSubmitTask={handleAddNewTask} />
        </Container>
      </Box>
      <Box width="100%" display="flex" flexGrow={1}>
        <TaskList
          tasks={filteredTasks}
          onDelete={onDelete}
          onFilterTasks={setSearch}
        />
      </Box>
    </Page>
  )
}

export default Home
