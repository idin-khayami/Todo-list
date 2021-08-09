import { Box, BoxProps } from '@material-ui/core'

function Container({ children, ...otherProps }: BoxProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      mt={2}
      px={2}
      {...otherProps}
    >
      {children}
    </Box>
  )
}

export default Container
