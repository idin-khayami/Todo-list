import { Box, Link, Typography } from '@material-ui/core'
import paths from 'router/paths'

interface ErrorPageProps {
  description: string
  redirectTo?: string
  pageName?: string
}

const ErrorPage = ({
  description,
  redirectTo = paths.home,
}: ErrorPageProps) => {
  return (
    <Box my="auto" mx={2} textAlign="center">
      <Typography variant="h6" component="p" color="primary">
        {description}
      </Typography>
      <Box my={3} textAlign="center">
        <Link underline="none" href={redirectTo}>
          Back
        </Link>
      </Box>
    </Box>
  )
}

export default ErrorPage
