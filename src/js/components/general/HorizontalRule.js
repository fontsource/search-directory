import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function HR() {
  const classes = useStyles();

  return <Divider classes={{ root: classes.divider }} />;
}
