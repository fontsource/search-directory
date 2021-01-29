import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(3),
    maxWidth: '960px',
  },
}));

export default function Doc({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}
