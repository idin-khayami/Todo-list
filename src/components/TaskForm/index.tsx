import { Controller, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import { CreateTaskInput, Task, UpdateTaskInput } from '../../types'

const useStyles = makeStyles(
  (theme) => ({
    formControl: {
      margin: `${theme.spacing(1)} auto`,
      width: '100%',
    },
  }),
  {
    name: 'task-form',
  },
)

interface TaskFormProps {
  task?: Task
  onSubmitTask: (data: Task) => void
}

const TaskForm = ({ task, onSubmitTask }: TaskFormProps) => {
  const classes = useStyles()
  const { handleSubmit, control, formState } = useForm<
    CreateTaskInput | UpdateTaskInput
  >({
    mode: 'all',
    defaultValues: {
      title: task?.title,
      description: task?.description,
      status: task?.status,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmitTask)}>
      <Box my={1} width="100%">
        <Controller
          name="title"
          control={control}
          rules={{
            required: 'Title is required',
            validate: (value: string) => {
              if (value.length > 0 && value.length < 5) {
                return 'Title must have at least 5 characters'
              }
            },
          }}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextField
                label="Title"
                variant="filled"
                id="title"
                fullWidth
                size="medium"
                error={!!formState.errors.title}
                helperText={formState.errors.title?.message}
                {...field}
              />
            )
          }}
        />
      </Box>
      <Box my={1} width="100%">
        <Controller
          name="description"
          control={control}
          rules={{
            required: 'Description is required',
            validate: (value) => {
              if (value.length < 15) {
                return 'Task must have a long description'
              }
            },
          }}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextField
                rows={4}
                label="Description"
                variant="filled"
                id="description"
                fullWidth
                multiline
                size="medium"
                error={!!formState.errors.description}
                helperText={formState.errors.description?.message}
                {...field}
              />
            )
          }}
        />
      </Box>
      {task && (
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-status-native-simple">Status</InputLabel>
          <Select
            native
            inputProps={{
              name: 'status',
              id: 'filled-status-native-simple',
            }}
          >
            <option value={10}>Ten</option>
          </Select>
        </FormControl>
      )}
      <Box my={1} width="100%">
        {task ? (
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                startIcon={<EditIcon />}
                disabled={!formState.isValid}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button color="primary" variant="outlined" fullWidth size="large">
                Cancel
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            size="large"
            startIcon={<AddIcon />}
            disabled={!formState.isValid}
          >
            Add
          </Button>
        )}
      </Box>
    </form>
  )
}

export default TaskForm
