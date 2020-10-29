import React from 'react';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Code from './Code';

// Generate styles for Homepage
const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  text: {
    margin: theme.spacing(2),
  },
  img: {
    padding: theme.spacing(2),
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <div>
      {/* Title */}
      <Typography variant="h2" classes={{ root: classes.text }}>
        Fontsource
      </Typography>
      <div className={classes.text}>
        <a href="https://github.com/fontsource/fontsource">
          <img
            src="https://img.shields.io/badge/fontsource-passing-brightgreen"
            alt="Generic badge"
          />
        </a>{' '}
        <a href="https://github.com/fontsource/download-stat-aggregator">
          <img
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffontsource%2Fdownload-stat-aggregator%2Fmaster%2Fdata%2FbadgeMonth.json"
            alt="Monthly Downloads"
          />
        </a>{' '}
        <a href="https://github.com/fontsource/download-stat-aggregator">
          <img
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffontsource%2Fdownload-stat-aggregator%2Fmaster%2Fdata%2FbadgeTotal.json"
            alt="Total Downloads"
          />
        </a>{' '}
        <a href="https://github.com/fontsource/fontsource/blob/master/LICENSE">
          <img src="https://badgen.net/badge/license/MIT/green" alt="License" />
        </a>{' '}
        <a href="https://github.com/fontsource/fontsource/stargazers">
          <img
            src="https://img.shields.io/github/stars/DecliningLotus/fontsource.svg?style=social&amp;label=Star"
            alt="GitHub stars"
          />
        </a>
      </div>
      {/* Description */}
      <Typography variant="body1" paragraph classes={{ root: classes.text }}>
        An updating monorepo full of self-hostable Open Source fonts bundled
        into individual NPM packages! Inspired by the aging{' '}
        <a href="https://github.com/KyleAMathews/typefaces">Typefaces</a>{' '}
        project and primarily built using{' '}
        <a href="https://github.com/fontsource/google-font-metadata">
          Google Font Metadata
        </a>
        .
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography
        variant="body1"
        classes={{ root: classes.text }}
        component="ul"
      >
        <li className={classes.text}>
          Self-hosting brings significant performance gains as typically loading
          fonts from hosted font services, such as Google Fonts, lead to an
          extra (render blocking) network request. To provide perspective, for
          simple websites it has been seen to double visual load times.
          Benchmarks can be found{' '}
          <a href="https://github.com/HTTPArchive/almanac.httparchive.org/pull/607">
            here
          </a>{' '}
          and{' '}
          <a href="https://github.com/reactiflux/reactiflux.com/pull/21">
            here
          </a>
          .
        </li>
        <li className={classes.text}>
          Your fonts load offline. Often there may be situations, like working
          in an airplane or train, leaving you stranded without access to your
          online hosted fonts. Have the ability to keep working under any
          circumstance.
        </li>
        <li className={classes.text}>
          Fonts remain version locked. Google often pushes updates to their
          fonts{' '}
          <a href="https://github.com/google/fonts/issues/1307">
            without notice
          </a>
          , which may interfere with your live production projects. Manage your
          fonts like any other NPM dependency.
        </li>
        <li className={classes.text}>
          Support for fonts outside the Google Font ecosystem. This repository
          is constantly evolving with{' '}
          <a href="https://github.com/fontsource/fontsource/blob/master/FONTLIST.md">
            other Open Source fonts
          </a>
          . Feel free to contribute!
        </li>
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Installation
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Fontsource assumes you are using a bundler, such as Webpack, to load in
        CSS. Solutions like <a href="https://create-react-app.dev/">CRA</a>,{' '}
        <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
        <a href="https://nextjs.org/">Next.js</a> are prebuilt examples that are
        compatible.
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        This is an installation example using Open Sans, applicable to all other
        fonts searchable via NPM or the packages directory.
      </Typography>
      <Code language="javascript">
        yarn add fontsource-open-sans // npm install fontsource-open-sans
      </Code>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Then within your app entry file or site component, import it in. For
        example in Gatsby, you could choose to import it into a layout template
        (<b>layout.js</b>), page component (<b>index.js</b>), or{' '}
        <b>gatsby-browser.js</b>.
      </Typography>
      <Code language="javascript">
        import &quot;fontsource-open-sans&quot; // Defaults to weight 400 with
        all styles included.
      </Code>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Fontsource allows you to select weights and even individual styles,
        allowing you to cut down on payload sizes to the last byte! Utilizing
        the CSS unicode-range selector, all language subsets are accounted for.
      </Typography>
      <Code language="javascript">
        import &quot;fontsource-open-sans/500.css&quot; // All styles included.
        {'\n'}
        import &quot;fontsource-open-sans/900-normal.css&quot; // Select either
        normal or italic.
      </Code>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Alternatively, the same solutions could be imported via SCSS!
      </Typography>
      <Code language="scss">
        @import &quot;~fontsource-open-sans/index.css&quot;;
        {'\n'}
        @import &quot;~fontsource-open-sans/300-italic.css&quot;;
      </Code>
      <Typography variant="body1" classes={{ root: classes.text }}>
        <i>
          Do confirm on Google Fonts (or elsewhere) whether your font supports a
          certain subset, weight or style beforehand as these examples may not
          reflect actual compatibility.
        </i>
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Finally, you can reference the font name in a CSS stylesheet, CSS
        Module, or CSS-in-JS.
      </Typography>
      <Code language="css">{'body {\n  font-family: "Open Sans";\n}'}</Code>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Additional Options
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        In the rare case you need to individually select a language subset and
        not utilize the CSS unicode-range selector, you may specify the import
        as follows. This is especially not recommended for languages, such as
        Japanese, with a large amount of characters.
      </Typography>
      <Code language="javascript">
        import &quot;fontsource-open-sans/latin-ext.css&quot; // All weights and
        styles included.{'\n'}
        import &quot;fontsource-open-sans/cyrillic-ext-500.css&quot; // All
        styles included.{'\n'}
        import &quot;fontsource-open-sans/greek-900-normal.css&quot; // Select
        either normal or italic.
      </Code>
      <Typography variant="body1" classes={{ root: classes.text }}>
        <i>Examples above may not reflect actual variant availability.</i>
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Migrating from 2.x to 3.x
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        See{' '}
        <a href="https://github.com/fontsource/fontsource/blob/master/CHANGELOG.md">
          CHANGELOG.md
        </a>{' '}
        for more details.
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Adding New Fonts
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        For Open Source fonts that are not automatically updated by the Google
        ecosystem, we have a generic packager that builds CSS files for the
        project.
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Make a request by creating an{' '}
        <a href="https://github.com/fontsource/fontsource/issues">issue</a>!
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Licensing
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        It is important to always read the license for every font that you use.
        Most of the fonts in the collection use the SIL Open Font License, v1.1.
        Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu
        Font License v1.0.
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        You can find their specific licenses at the bottom of each fonts page.
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="h4" classes={{ root: classes.text }}>
        Other Notes
      </Typography>
      <Typography variant="body1" classes={{ root: classes.text }}>
        Feel free to star and contribute new ideas to this repository that aim
        to improve the performance of font loading, as well as expanding the
        existing library we already have. Any suggestions or ideas can be voiced
        via an{' '}
        <a href="https://github.com/fontsource/fontsource/issues">issue</a>.
      </Typography>
    </div>
  );
}
