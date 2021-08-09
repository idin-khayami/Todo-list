import { Typography } from '@material-ui/core'
import Container from '../Container'

const NoResult = () => {
  return (
    <Container
      color="text"
      mx="auto"
      justifyContent="center"
      textAlign="center"
    >
      <Typography variant="h6" component="p">
        Yo have nothing to do.
      </Typography>
      <Typography variant="h6" component="p">
        Go get some sleep.
      </Typography>
    </Container>
  )
}

export default NoResult
