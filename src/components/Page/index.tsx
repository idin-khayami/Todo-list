import { ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface PageProps {
  children: ReactNode
}

function Page({ children }: PageProps) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" flexGrow={1}>
      {children}
    </Box>
  )
}

export default Page
