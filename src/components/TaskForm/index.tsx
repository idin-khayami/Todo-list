import { useCallback } from 'react'
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
} from 'constants/validation'
import paths from 'router/paths'
import { getPossibleTaskStatus } from 'service/status/get-possible-task-status'
import { getStatusLabel } from 'service/status/get-status-label'
import { Task, TaskInput } from 'types'

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
  onSubmitTask: (taskData: TaskInput) => void
}

const TaskForm = ({ task, onSubmitTask }: TaskFormProps) => {
  const classes = useStyles()
  const { handleSubmit, control, formState, reset } = useForm<TaskInput>({
    mode: 'all',
    defaultValues: {
      id: task?.id ?? undefined,
      title: task?.title ?? '',
      description: task?.description ?? '',
      status: task?.status ?? undefined,
    },
  })

  const handleSubmitTask = useCallback(
    (taskData: TaskInput) => {
      onSubmitTask(taskData)
      reset()
    },
    [onSubmitTask, reset],
  )

  const validate = useCallback((minLength: number) => {
    return {
      required: 'This field is required',
      validate: (value: string): string | undefined => {
        if (value.length < minLength) {
          return `This field must have at least ${minLength} characters'`
        }
      },
    }
  }, [])

  const titleValidator = validate(VALIDATION_TITLE_MIN_LENGTH)
  const descriptionValidator = validate(VALIDATION_DESCRIPTION_MIN_LENGTH)

  return (
    <form name="task-form" onSubmit={handleSubmit(handleSubmitTask)}>
      <Box my={1} width="100%">
        <Controller
          name="title"
          control={control}
          rules={titleValidator}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextField
                autoFocus
                label="Title"
                variant="filled"
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
          rules={descriptionValidator}
          defaultValue=""
          render={({ field }) => {
            return (
              <TextField
                rows={5}
                label="Description"
                variant="filled"
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
          <Box my={1} width="100%">
            <InputLabel htmlFor="filled-status">Status</InputLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => {
                return (
                  <Select fullWidth native data-test-id="status" {...field}>
                    {getPossibleTaskStatus(task.status).map((item, index) => (
                      <option key={index} value={item}>
                        {getStatusLabel(item)}
                      </option>
                    ))}
                  </Select>
                )
              }}
            />
          </Box>
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
              <Link href={paths.home} underline="none">
                <Button variant="outlined" fullWidth size="large">
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
