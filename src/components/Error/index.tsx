import { Box, Link, Typography } from '@material-ui/core'
import paths from 'router/paths'
import Container from '../Container'

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
    <Container textAlign="center" justifyContent="center">
      <Typography variant="h6" component="p" color="primary">
        {description}
      </Typography>
      <Box my={3} textAlign="center">
        <Link underline="none" href={redirectTo}>
          Back
        </Link>
      </Box>
    </Container>
  )
}

export default ErrorPage
