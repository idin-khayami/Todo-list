import { ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1} mt={2} px={2}>
      {children}
    </Box>
  )
}

export default Container
