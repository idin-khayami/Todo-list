import { Box, Typography } from '@material-ui/core'

const NoResult = () => {
  return (
    <Box color="text.primary" py={3} mx="auto" textAlign="center">
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
