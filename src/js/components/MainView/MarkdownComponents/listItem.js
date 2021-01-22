/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '.25em',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
}));

export default function listItem({ children }) {
  const classes = useStyles();
  return (
    <Typography variant="body1" component="li" classes={{ root: classes.root }}>
      {children}
    </Typography>
  );
}
