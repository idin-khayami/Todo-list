import { Box, Button, Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

interface TaskCardProps {
  title: string
  description: string
  status: string
}

const TaskCard = ({ title, description, status }: TaskCardProps) => {
  return (
    <Box
      bgcolor="white"
      color="text.primary"
      display="flex"
      flexDirection="column"
      borderRadius={8}
      p={1}
      mx={1}
    >
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box mb={1}>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Box
          bgcolor="info.main"
          color="info.contrastText"
          py={1}
          px={2}
          borderRadius={8}
          flexGrow="1"
          textAlign="center"
        >
          <Typography variant="body1" component="h6">
            {status}
          </Typography>
        </Box>
        <Box
          width="40px"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Button size="small" startIcon={<EditIcon />}></Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskCard
