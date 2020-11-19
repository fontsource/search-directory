import { makeStyles } from '@material-ui/core/styles';

import P from '../general/Paragraph';
import HR from '../general/HorizontalRule';

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

  return (
    <>
      <HR />

      {/* Source */}
      <P>
        <a href={fontData.source} className={classes.links}>
          Source
        </a>

        {/* License */}
        <a href={fontData.license} className={classes.links}>
          License
        </a>

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
      </P>
    </>
  );
}
