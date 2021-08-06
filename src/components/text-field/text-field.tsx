import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface TextFieldsProps {
  id: string
  label: string
  multiline?: boolean
}

function TextFields({ id, label, multiline = false }: TextFieldsProps) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        rows={4}
        id={id}
        label={label}
        multiline={multiline}
        variant="filled"
        fullWidth
      />
    </form>
  );
}

export default TextFields;
