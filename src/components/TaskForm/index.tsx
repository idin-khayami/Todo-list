import { Controller, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  makeStyles,
  Select,
  TextField,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import {
  VALIDATION_DESCRIPTION_MIN_LENGTH,
  VALIDATION_TITLE_MIN_LENGTH,
} from '../../constants/validation'
import paths from '../../router/paths'
import { getPossibleTaskStatus } from '../../service/get-possible-task-status'
import { mapStatusStateToStatusName } from '../../service/mapping'
import { CreateTaskInput, Task, UpdateTaskInput } from '../../types'

const useStyles = makeStyles(
  (theme) => ({
    link: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
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
    defaultValues: task
      ? {
          title: task.title,
          description: task.description,
          status: task.status,
        }
      : {},
  })

  return (
    <form onSubmit={handleSubmit(onSubmitTask)}>
      <Box my={1} width="100%">
        <Controller
          name="title"
          control={control}
          rules={{
            required: 'This field is required',
            validate: (value: string) => {
              if (value.length < VALIDATION_TITLE_MIN_LENGTH) {
                return 'This field must have at least 5 characters'
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
            required: 'This field is required',
            validate: (value) => {
              if (value.length < VALIDATION_DESCRIPTION_MIN_LENGTH) {
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
          <InputLabel htmlFor="filled-status">Status</InputLabel>
          <Select
            native
            value={task.status}
            inputProps={{
              name: 'status',
              id: 'filled-status',
            }}
          >
            {getPossibleTaskStatus(task.status).map((item, index) => (
              <option key={index} value={item}>
                {mapStatusStateToStatusName(item)}
              </option>
            ))}
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
              <Link className={classes.link} href={paths.taskList}>
                <Button
                  color="primary"
                  variant="outlined"
                  fullWidth
                  size="large"
                >
                  Cancel
                </Button>
              </Link>
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
