import { H2, H4 } from './general/Headers';
import P from './general/Paragraph';
import Code from './general/Code';
import HR from './general/HorizontalRule';
import { UL, LI } from './general/Lists';

export default function Homepage() {
  return (
    <>
      {/* Title */}
      <H2>Fontsource</H2>
      <P>
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
      </P>

      {/* Description */}
      <P>
        An updating monorepo full of self-hostable Open Source fonts bundled
        into individual NPM packages! Inspired by the aging{' '}
        <a href="https://github.com/KyleAMathews/typefaces">Typefaces</a>{' '}
        project and primarily built using{' '}
        <a href="https://github.com/fontsource/google-font-metadata">
          Google Font Metadata
        </a>
        .
      </P>

      <HR />

      <UL>
        <LI>
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
        </LI>
        <LI>
          Your fonts load offline. Often there may be situations, like working
          in an airplane or train, leaving you stranded without access to your
          online hosted fonts. Have the ability to keep working under any
          circumstance.
        </LI>
        <LI>
          Fonts remain version locked. Google often pushes updates to their
          fonts{' '}
          <a href="https://github.com/google/fonts/issues/1307">
            without notice
          </a>
          , which may interfere with your live production projects. Manage your
          fonts like any other NPM dependency.
        </LI>
        <LI>
          Support for fonts outside the Google Font ecosystem. This repository
          is constantly evolving with{' '}
          <a href="https://github.com/fontsource/fontsource/blob/master/FONTLIST.md">
            other Open Source fonts
          </a>
          . Feel free to contribute!
        </LI>
      </UL>

      <HR />

      <H4>Installation</H4>

      <P>
        Fontsource assumes you are using a bundler, such as Webpack, to load in
        CSS. Solutions like <a href="https://create-react-app.dev/">CRA</a>,{' '}
        <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
        <a href="https://nextjs.org/">Next.js</a> are prebuilt examples that are
        compatible.
      </P>

      <P>
        This is an installation example using Open Sans, applicable to all other
        fonts searchable via NPM or the packages directory.
      </P>

      <Code lang="javascript">
        yarn add fontsource-open-sans // npm install fontsource-open-sans
      </Code>

      <P>
        Then within your app entry file or site component, import it in. For
        example in Gatsby, you could choose to import it into a layout template
        (<b>layout.js</b>), page component (<b>index.js</b>), or{' '}
        <b>gatsby-browser.js</b>.
      </P>

      <Code lang="javascript">
        import &quot;fontsource-open-sans&quot; // Defaults to weight 400 with
        all styles included.
      </Code>

      <P>
        Fontsource allows you to select weights and even individual styles,
        allowing you to cut down on payload sizes to the last byte! Utilizing
        the CSS unicode-range selector, all language subsets are accounted for.
      </P>

      <Code lang="javascript">
        import &quot;fontsource-open-sans/500.css&quot; // All styles included.
        {'\n'}
        import &quot;fontsource-open-sans/900-normal.css&quot; // Select either
        normal or italic.
      </Code>

      <P>Alternatively, the same solutions could be imported via SCSS!</P>

      <Code lang="scss">
        @import &quot;~fontsource-open-sans/index.css&quot;;
        {'\n'}
        @import &quot;~fontsource-open-sans/300-italic.css&quot;;
      </Code>

      <P>
        <i>
          Do confirm on Google Fonts (or elsewhere) whether your font supports a
          certain subset, weight or style beforehand as these examples may not
          reflect actual compatibility.
        </i>
      </P>

      <P>
        Finally, you can reference the font name in a CSS stylesheet, CSS
        Module, or CSS-in-JS.
      </P>

      <Code lang="css">{'body {\n  font-family: "Open Sans";\n}'}</Code>

      <HR />

      <H4>Additional Options</H4>

      <P>
        In the rare case you need to individually select a language subset and
        not utilize the CSS unicode-range selector, you may specify the import
        as follows. This is especially not recommended for languages, such as
        Japanese, with a large amount of characters.
      </P>

      <Code lang="javascript">
        import &quot;fontsource-open-sans/latin-ext.css&quot; // All weights and
        styles included.{'\n'}
        import &quot;fontsource-open-sans/cyrillic-ext-500.css&quot; // All
        styles included.{'\n'}
        import &quot;fontsource-open-sans/greek-900-normal.css&quot; // Select
        either normal or italic.
      </Code>

      <P>
        <i>Examples above may not reflect actual variant availability.</i>
      </P>

      <HR />

      <H4>Migrating from 2.x to 3.x</H4>

      <P>
        See{' '}
        <a href="https://github.com/fontsource/fontsource/blob/master/CHANGELOG.md">
          CHANGELOG.md
        </a>{' '}
        for more details.
      </P>

      <HR />

      <H4>Adding New Fonts</H4>

      <P>
        For Open Source fonts that are not automatically updated by the Google
        ecosystem, we have a generic packager that builds CSS files for the
        project.
      </P>

      <P>
        Make a request by creating an{' '}
        <a href="https://github.com/fontsource/fontsource/issues">issue</a>!
      </P>

      <HR />

      <H4>Licensing</H4>

      <P>
        It is important to always read the license for every font that you use.
        Most of the fonts in the collection use the SIL Open Font License, v1.1.
        Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu
        Font License v1.0.
      </P>

      <P>
        You can find their specific licenses at the bottom of each fonts page.
      </P>

      <HR />

      <H4>Other Notes</H4>

      <P>
        Feel free to star and contribute new ideas to this repository that aim
        to improve the performance of font loading, as well as expanding the
        existing library we already have. Any suggestions or ideas can be voiced
        via an{' '}
        <a href="https://github.com/fontsource/fontsource/issues">issue</a>.
      </P>
    </>
  );
}
