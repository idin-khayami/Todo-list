import {
  Box,
  Link,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import classNames from 'classnames'

interface TaskCardProps {
  title: string
  description: string
  status: string
  link: string
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

const TaskCard = ({ title, description, status, link }: TaskCardProps) => {
  const theme = useTheme()
  const isSmallMobileScreen = useMediaQuery(theme.breakpoints.down(340))
  console.log(isSmallMobileScreen)
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
        mt={1}
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
          justifyContent="flex-end"
          alignItems="center"
        >
          <Link color="textPrimary" href={link}>
            <EditIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default TaskCard
