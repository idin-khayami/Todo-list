import { Box, LinearProgress, Typography } from '@material-ui/core'

function SplashScreen() {
  return (
    <Box
      height="100vh"
      mx={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flexGrow={1}
    >
      <Box my={2} textAlign="center">
        <Typography variant="h6" component="p" color="primary">
          Loading...
        </Typography>
      </Box>
      <LinearProgress />
    </Box>
  )
}

export default SplashScreen
