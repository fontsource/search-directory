import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import fontSourceData from '../../fontSourceData';

// Generate styles for Footer
const useStyles = makeStyles(theme => ({
  links: {
    margin: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default function FontFooter({ fontData }) {
  const classes = useStyles();

  return fontData.fontId ? (
    <>
      <Divider />

      <br />

      {/* Source */}
      <Typography variant="body1" paragraph>
        {/* Github */}
        <a
          href={fontSourceData.pkg(fontData.fontId).repo}
          className={classes.links}
        >
          Font On Github
        </a>

        {/* NPM */}
        <a
          href={fontSourceData.pkg(fontData.fontId).npm}
          className={classes.links}
        >
          Font On NPM
        </a>
      </Typography>

      <br />
    </>
  ) : (
    <></>
  );
}
