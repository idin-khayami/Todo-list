import {
  Box,
  IconButton,
  Link,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import classNames from 'classnames'
import { DeleteFunction, UUID } from 'types'

interface TaskCardProps {
  id: UUID
  title: string
  description: string
  status: string
  link: string
  onDelete: DeleteFunction
}

const useStyles = makeStyles(
  () => ({
    textTruncate: {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    },
    title: {
      WebkitLineClamp: 1,
    },
    description: {
      WebkitLineClamp: 3,
    },
  }),
  {
    name: 'task-card',
  },
)

const TaskCard = ({
  id,
  title,
  description,
  status,
  link,
  onDelete,
}: TaskCardProps) => {
  const theme = useTheme()
  const isSmallMobileScreen = useMediaQuery(theme.breakpoints.down(340))
  const classes = useStyles()

  return (
    <Box
      bgcolor="white"
      color="text.primary"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="170px"
      borderRadius={8}
      p={1}
      m={1}
    >
      <Box mb={1}>
        <Typography
          className={classNames(classes.textTruncate, classes.title)}
          variant="h5"
          component="h1"
        >
          {title}
        </Typography>
        <Typography
          className={classNames(classes.textTruncate, classes.description)}
          variant="body2"
          component="p"
        >
          {description}
        </Typography>
      </Box>
      <Box
        display="flex"
        mt={isSmallMobileScreen ? 0 : 1}
        flexDirection={isSmallMobileScreen ? 'column' : undefined}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          bgcolor="info.main"
          color="info.contrastText"
          p={1}
          width="80px"
          borderRadius={8}
          flexGrow={1}
          textAlign="center"
        >
          <Typography variant="body1" component="h6">
            {status}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexGrow={1}
          mt={isSmallMobileScreen ? 1 : 0}
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            aria-label="Delete"
            onClick={() => {
              onDelete(id)
            }}
          >
            <DeleteIcon />
          </IconButton>
          <Link color="textPrimary" href={link}>
            <EditIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskCard
