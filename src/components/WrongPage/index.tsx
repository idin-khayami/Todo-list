import { Box, Link, Typography } from '@material-ui/core'
import paths from '../../router/paths'

interface WrongPageProps {
  description: string
  redirectTo?: string
  pageName?: string
}

const WrongPage = ({
  description,
  redirectTo = paths.home,
  pageName = 'Home',
}: WrongPageProps) => {
  return (
    <Box my="auto" mx={2} textAlign="center">
      <Typography variant="h6" component="p" color="primary">
        {description}
      </Typography>
      <Box my={3} textAlign="center">
        <Link underline="none" href={redirectTo}>
          Back to {pageName}
        </Link>
      </Box>
    </Box>
  )
}

export default WrongPage
