import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
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

export default function Doc({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
