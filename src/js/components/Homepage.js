import React from 'react';
import { Divider, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Generate styles for Homepage
const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  text: {
    margin: theme.spacing(2),
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <div>
      {/* Title */}
      <Typography variant="h2" classes={{ root: classes.text }}>
        Fontsource Search Directory
      </Typography>

      {/* Short Description */}
      <Typography variant="h6" gutterBottom classes={{ root: classes.text }}>
        Fontsource allows you to Self-host Open Source fonts in neatly bundled
        NPM packages.
      </Typography>

      <Divider classes={{ root: classes.divider }} />

      <Typography variant="body2" classes={{ root: classes.text }}>
        Select a font to get started.
      </Typography>

      <Divider classes={{ root: classes.divider }} />

      {/* Source */}
      <Link
        href="https://github.com/fontsource/fontsource"
        variant="body2"
        classes={{ root: classes.text }}
      >
        Fontsource On Github
      </Link>

      {/* License */}
      <Link
        href="https://github.com/fontsource/search-directory"
        variant="body2"
        classes={{ root: classes.text }}
      >
        Search Directory On Github
      </Link>
    </div>
  );
}
