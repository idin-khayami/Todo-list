import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { getStatusLabel } from '../../service/status/get-status-label'
import { Task } from '../../types'
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
        width: '0.4em',
      },
      '&::-webkit-scrollbar-track': {},
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.common.black,
        borderRadius: theme.shape.borderRadius,
      },
    },
  }),
  {
    name: 'task-list',
  },
)

interface TaskListProps {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  const classes = useStyles()
  return (
    <Box px={2} flexGrow={1} display="flex" flexDirection="column">
      <Box width="100%">
        <Box
          flexGrow={1}
          className={classes.topBorderRadius}
          color="primary.contrastText"
          bgcolor="primary.main"
          p={2}
          height="50px"
        >
          <Typography variant="h6" component="h1">
            Tasks
          </Typography>
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
        height="80px"
        p={3}
        px={2}
        mt={-3}
      >
        {tasks.length > 0 ? (
          <Grid container spacing={1}>
            {tasks.map((task, index) => {
              return (
                <Grid key={index} item xs={6} sm={6} md={4}>
                  <TaskCard
                    title={task.title}
                    description={task.description}
                    status={getStatusLabel(task.status)}
                    link={`/edit-task/${task.id}`}
                  />
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <NoResult />
        )}
      </Box>
    </Box>
  )
}

export default TaskList
