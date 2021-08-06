import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

interface PageHeaderProps {
  title: string;
}

function PageHeader({ title }: PageHeaderProps) {
  return (
    <Grid item xs={12} sm={12}>
      <Box
        display="flex"
        alignItems="center"
        bgcolor="info.main"
        color="primary.contrastText"
        p={2}
      >
        <Typography variant="h6" component="h1">
          Task Management
        </Typography>
        <ChevronRightIcon />
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Box>
    </Grid>
  );
}

export default PageHeader;
