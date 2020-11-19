/* eslint-disable import/prefer-default-export */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  li: {
    margin: theme.spacing(1.5),
  },
}));

export function OL({ children }) {
  return <ol>{children}</ol>;
}

export function UL({ children }) {
  return <ul>{children}</ul>;
}

export function LI({ children }) {
  const classes = useStyles();
  return (
    <Typography component="li" gutterBottom classes={{ root: classes.li }}>
      {children}
    </Typography>
  );
}
