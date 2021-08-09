import { Box, BoxProps } from '@material-ui/core'

function Page({ children, ...otherProps }: BoxProps) {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      flexGrow={1}
      {...otherProps}
    >
      {children}
    </Box>
  )
}

export default Page
