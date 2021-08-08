import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import classNames from 'classnames'
import { mapStatusStateToStatusName } from '../../service/mapping'
import { Task } from '../../types'
import NoResult from '../NoResult'
import TaskCard from '../TaskCard'

const useStyles = makeStyles(
  (theme) => ({
    topBorderRadius: {
      borderTopLeftRadius: theme.spacing(3),
      borderTopRightRadius: theme.spacing(3),
    },
    taskListContainer: {
      overflowY: 'auto',
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
        height="100px"
        p={3}
        px={2}
        mt={-3}
      >
        {tasks.length > 0 ? (
          <Grid container spacing={1}>
            {tasks.map((task) => {
              return (
                <Grid key={task.id} item xs={6} sm={6}>
                  <TaskCard
                    title={task.title}
                    description={task.description}
                    status={mapStatusStateToStatusName(task.status)}
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
