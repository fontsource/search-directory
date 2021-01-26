/* eslint-disable react-hooks/rules-of-hooks */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  inlineCode: {
    padding: '.2em .4em',
    fontSize: '85%',
    lineHeight: '24px',
    letterSpacing: '0px',
    backgroundColor: '#0001',
    borderRadius: '6px',
  },
}));

export default function inlineCode({ children }) {
  const classes = useStyles();
  return <code className={classes.inlineCode}>{children}</code>;
}
