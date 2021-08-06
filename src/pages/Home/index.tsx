import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import AddNewTask from '../../components/AddNewTask'
import NoResult from '../../components/NoResult'
import PageHeader from '../../components/PageHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(0)}px auto`,
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PageHeader title="Home" />
      </Paper>
      <Paper className={classes.paper}>
        <AddNewTask />
      </Paper>
      <Paper className={classes.paper}>
        <NoResult />
      </Paper>
    </div>
  )
}

export default Home
