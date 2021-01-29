import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  inner: {
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(3),
    maxWidth: '960px',
  },
}));

export default function Wrapper({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Toolbar />
        <br />
        {children}
      </div>
    </div>
  );
}
