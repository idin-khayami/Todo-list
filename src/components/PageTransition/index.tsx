import { Box, LinearProgress, Typography } from '@material-ui/core'
import Container from 'components/Container'
import Page from 'components/Page'

function PageTransition() {
  return (
    <Page>
      <Container justifyContent="center">
        <Box mb={2} textAlign="center">
          <Typography variant="h6" component="p" color="primary">
            Loading...
          </Typography>
        </Box>
        <LinearProgress />
      </Container>
    </Page>
  )
}

export default PageTransition
