import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(
  (theme) => ({
    container: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  {
    name: 'page-header',
  },
);

interface PageHeaderProps {
  title: string;
}

function PageHeader({ title }: PageHeaderProps) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <Box
        className={classes.container}
        display="flex"
        alignItems="center"
        color="primary.contrastText"
        p={2}
      >
        <Typography variant="h6" component="h1">
          Task Management
        </Typography>
        <ChevronRightIcon />
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </Box>
    </Grid>
  );
}

export default PageHeader;
