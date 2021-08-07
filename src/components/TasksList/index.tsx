import { Box, Grid, Typography } from '@material-ui/core'
import NoResult from '../NoResult'

function TaskList() {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <Box
          color="primary.contrastText"
          bgcolor="primary.main"
          borderRadius={16}
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
          display="flex"
          alignItems="flex-start"
          color="primary.contrastText"
          bgcolor="primary.light"
          borderRadius={16}
          p={3}
          px={2}
          mt={-3}
        >
          <NoResult />
        </Box>
      </Grid>
    </>
  )
}

export default TaskList
