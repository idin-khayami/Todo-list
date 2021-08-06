import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from '../../components/page-header';
import AddNewTask from './add-new-task';
import NoResult from './no-results/no-results';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(0)}px auto`,
  },
}));

const Home = () => {
  const classes = useStyles();
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
  );
};

export default Home;
