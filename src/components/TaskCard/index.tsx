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
      p={2}
    >
      <Typography variant="h6" component="h1">
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
      <Box display="flex">
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          <Typography variant="body1" component="h6">
            {status}
          </Typography>
        </Box>
        <Button size="small" startIcon={<EditIcon />}></Button>
      </Box>
    </Box>
  )
}

export default TaskCard
