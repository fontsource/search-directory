import { Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import fontSourceData from '../../fontSourceData';

// Generate styles for Footer
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  links: {
    margin: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default function FontFooter({ fontData }) {
  const classes = useStyles();

  return (
    <div>
      <Divider classes={{ root: classes.divider }} />

      {/* Source */}
      <Link
        href={fontData.source}
        variant="body2"
        classes={{ root: classes.links }}
      >
        Source
      </Link>

      {/* License */}
      <Link
        href={fontData.license}
        variant="body2"
        classes={{ root: classes.links }}
      >
        License
      </Link>

      {/* Github */}
      <Link
        href={fontSourceData.pkg(fontData.fontId).repo}
        variant="body2"
        classes={{ root: classes.links }}
      >
        Font On Github
      </Link>

      {/* NPM */}
      <Link
        href={fontSourceData.pkg(fontData.fontId).npm}
        variant="body2"
        classes={{ root: classes.links }}
      >
        Font On NPM
      </Link>
    </div>
  );
}
