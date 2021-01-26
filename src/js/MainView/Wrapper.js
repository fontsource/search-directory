import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  inner: {
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(65),
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(80),
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(120),
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.spacing(200),
    },
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
