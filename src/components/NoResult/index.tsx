import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const NoResult = () => {
  return (
    <Box color="text.primary" p={3} textAlign="center">
      <Typography variant="h6" component="h1">
        Yo have nothing to do.
      </Typography>
      <Typography variant="h6" component="h1">
        Go get some sleep.
      </Typography>
    </Box>
  )
}

export default NoResult
