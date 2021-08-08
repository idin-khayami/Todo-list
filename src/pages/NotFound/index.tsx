import { Box, Link, Typography } from '@material-ui/core'
import paths from '../../router/paths'

const NotFound = () => {
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
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Box my={3} textAlign="center">
          <Link href={paths.taskList}>Go Home</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NotFound
