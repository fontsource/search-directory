/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { makeStyles } from '@material-ui/core/styles';

import FontPreview from './FontPreview';

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
  paragraph: {
    margin: '0px 0px 16px',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  listItem: {
    paddingTop: '.25em',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: 400,
  },
  inlineCode: {
    padding: '.2em .4em',
    fontSize: '85%',
    lineHeight: '24px',
    letterSpacing: '0px',
    backgroundColor: '#0001',
    borderRadius: '6px',
  },
}));

export default function renderers(fontData) {
  return {
    code: ({ language, value }) => {
      if (language === 'special') {
        switch (value) {
          case 'FontPreview': {
            return <FontPreview {...{ fontData }} />;
          }

          default: {
            return undefined;
          }
        }
      }
      return (
        <SyntaxHighlighter style={okaidia} language={language}>
          {value}
        </SyntaxHighlighter>
      );
    },
    heading: ({ level, children }) => {
      const classes = useStyles();
      return (
        <Typography
          variant={`h${level}`}
          classes={{ root: classes[`h${level}`] }}
        >
          {children}
        </Typography>
      );
    },
    paragraph: ({ children }) => {
      const classes = useStyles();
      return (
        <Typography
          variant="body1"
          paragraph
          classes={{ root: classes.paragraph }}
        >
          {children}
        </Typography>
      );
    },
    listItem: ({ children }) => {
      const classes = useStyles();
      return (
        <Typography
          variant="body1"
          component="li"
          classes={{ root: classes.listItem }}
        >
          {children}
        </Typography>
      );
    },
    inlineCode: ({ children }) => {
      const classes = useStyles();
      return <code className={classes.inlineCode}>{children}</code>;
    },
  };
}
