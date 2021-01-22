/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0px 0px 16px',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
}));

export default function paragraph({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="body1" paragraph classes={{ root: classes.root }}>
      {children}
    </Typography>
  );
}
