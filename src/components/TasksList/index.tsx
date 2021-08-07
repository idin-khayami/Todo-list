import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
// import NoResult from '../NoResult'
import TaskCard from '../TaskCard'

const useStyles = makeStyles(
  (theme) => ({
    topBorderRadius: {
      borderTopLeftRadius: theme.spacing(3),
      borderTopRightRadius: theme.spacing(3),
    },
  }),
  {
    name: 'task-list',
  },
)

function TaskList() {
  const classes = useStyles()
  return (
    <Box px={2}>
      <Grid item xs={12} sm={12}>
        <Box
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
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box
          className={classes.topBorderRadius}
          display="flex"
          alignItems="flex-start"
          color="primary.contrastText"
          bgcolor="primary.light"
          p={3}
          px={2}
          mt={-3}
        >
          <Box display="flex" mx="auto">
            <TaskCard
              title="salam"
              description="test mikonim bebinim chetorie bebinim chetorie salammm"
              status="to do"
            />
            <TaskCard
              title="salam"
              description="test mikonim bebinim chetorie bebinim chetorie salammm"
              status="to do"
            />
          </Box>
          {/* <NoResult /> */}
        </Box>
      </Grid>
    </Box>
  )
}

export default TaskList
