import { Box, Button, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddNewTask = () => {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1" my={1} p={2}>
      <Typography variant="h6" component="p">
        Add a new task
      </Typography>
      <Box my={1} width="100%">
        <TextField
          rows={4}
          id="title"
          label="Title"
          variant="filled"
          fullWidth
        />
      </Box>
      <Box my={1} width="100%">
        <TextField
          rows={4}
          id="description"
          label="Description"
          variant="filled"
          multiline
          fullWidth
        />
      </Box>
      <Box my={1} width="100%">
        <Button
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewTask;
