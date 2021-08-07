import { Controller, useForm } from 'react-hook-form'
import { Box, Button, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

// interface TaskFormProps {
//   handleSubmit: () => any
// }

interface TaskFormFields {
  title: string
  description: string
}

const TaskForm = () => {
  const { handleSubmit, control, formState } = useForm<TaskFormFields>({
    mode: 'all',
  })
  const handleSubmitTaskForm = (data: TaskFormFields) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitTaskForm)}>
      <Box my={1} width="100%">
        <Controller
          name="title"
          control={control}
          rules={{
            required: 'Title is required',
            validate: (value: string) => {
              if (value.length > 0 && value.length < 5) {
                return 'Task must have at least 5 characters'
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
      <Box my={1} width="100%">
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
      </Box>
    </form>
  )
}

export default TaskForm
