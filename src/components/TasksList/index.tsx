import { Box, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { getStatusLabel } from 'service/status/get-status-label'
import { DeleteFunction, Task } from 'types'
import Container from '../Container'
import NoResult from '../NoResult'
import TaskCard from '../TaskCard'

const useStyles = makeStyles(
  (theme) => ({
    topBorderRadius: {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
    },
    taskListContainer: {
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '0.5em',
      },
      '&::-webkit-scrollbar-track': {},
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.common.black,
        borderRadius: theme.shape.borderRadius,
        height: '80px',
      },
    },
  }),
  {
    name: 'task-list',
  },
)

interface TaskListProps {
  tasks: Task[]
  onDelete: DeleteFunction
  onFilterTasks: (title: string) => void
}

function TaskList({ tasks, onDelete, onFilterTasks }: TaskListProps) {
  const classes = useStyles()
  return (
    <Container>
      <Box width="100%">
        <Box
          flexGrow={1}
          className={classes.topBorderRadius}
          color="primary.contrastText"
          bgcolor="primary.main"
          py={1}
          px={2}
          height="100px"
          flexDirection="column"
        >
          <Typography variant="h6" component="h1">
            Tasks
          </Typography>
          <TextField
            label="search"
            fullWidth
            size="medium"
            variant="filled"
            onChange={(e) => onFilterTasks(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        className={classNames(
          classes.taskListContainer,
          classes.topBorderRadius,
        )}
        display="flex"
        alignItems="flex-start"
        color="primary.contrastText"
        bgcolor="primary.light"
        flexDirection="column"
        flexGrow={1}
        height="70px"
        p={1}
        mt={-1}
      >
        {tasks.length > 0 ? (
          <Grid container>
            {tasks.map((task, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                  <TaskCard
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    status={getStatusLabel(task.status)}
                    link={`/edit-task/${task.id}`}
                    onDelete={onDelete}
                  />
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <NoResult />
        )}
      </Box>
    </Container>
  )
}

export default TaskList
