/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  h1: {
    margin: '24px 0px 16px',
    paddingBottom: '9.6px',
    borderBottom: '1px solid #0001',
    fontSize: '2em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
  h2: {
    margin: '24px 0px 16px',
    paddingBottom: '7.2px',
    borderBottom: '1px solid #0001',
    fontSize: '1.5em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
  h3: {
    margin: '24px 0px 16px',
    fontSize: '1.25em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
  h4: {
    margin: '24px 0px 16px',
    fontSize: '1em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
  h5: {
    margin: '24px 0px 16px',
    fontSize: '0.875em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
  h6: {
    margin: '24px 0px 16px',
    fontSize: '0.85em',
    lineHeight: '1.25',
    letterSpacing: '0em',
    fontWeight: 600,
  },
}));

export default function heading({ level, children }) {
  const classes = useStyles();
  return (
    <Typography variant={`h${level}`} classes={{ root: classes[`h${level}`] }}>
      {children}
    </Typography>
  );
}
