import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BaseButton from '../../../components/base-button';
import TextFields from '../../../components/text-field';

const AddNewTask = () => {
  return (
    <Grid item xs={12} sm={12}>
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
        <BaseButton buttonText="Add" />
      </Box>
    </Grid>
  );
};

export default AddNewTask;
