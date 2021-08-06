import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BaseButton from '../../../components/base-button';
import TextFields from '../../../components/text-field';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
    padding: '16px',
  },
  addButton: {
    margin: `${theme.spacing(2)}px 0`,
    fontSize: '16px',
  },
}));

const AddNewTask = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        color="text.primary"
        component="div"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h6" component="h1">
          Add a new task
        </Typography>
        <TextFields id="title" label="Title" />
        <TextFields id="description" label="Description" multiline={true} />
        <BaseButton className={classes.addButton} label="Add" color="blue" />
      </Box>
    </div>
  );
};

export default AddNewTask;
