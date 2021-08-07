import { Box, Grid, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

interface PageHeaderProps {
  title: string
}

function PageHeader({ title }: PageHeaderProps) {
  return (
    <Grid item xs={12} sm={12}>
      <Box
        display="flex"
        alignItems="center"
        color="primary.contrastText"
        bgcolor="primary.main"
        p={2}
      >
        <Typography variant="h6" component="h1">
          Task Management
        </Typography>
        <ChevronRightIcon />
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </Box>
    </Grid>
  )
}

export default PageHeader
