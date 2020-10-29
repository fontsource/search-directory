import React from 'react';
import { Typography } from '@material-ui/core';

import Code from '../Code';

export default function FontInstallation({ fontData }) {
  return (
    <div>
      <Typography variant="h5" paragraph>
        Installation:
      </Typography>

      <Typography variant="body1" paragraph>
        Fontsource assumes you are using a bundler, such as Webpack, to load in
        CSS. Solutions like CRA, Gatsby and Next.js are prebuilt examples that
        are compatible.
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        <Code language="javascript">
          {`yarn add fontsource-${fontData.fontId} # npm install fontsource-${fontData.fontId}`}
        </Code>
      </Typography>

      <Typography variant="body1" paragraph>
        Then within your app entry file or site component, import it in. For
        example in Gatsby, you could choose to import it into a layout template
        (layout.js), page component (index.js), or gatsby-browser.js.
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        <Code language="js">
          {`import "fontsource-${fontData.fontId}"; // Defaults to weight 400 with all styles included.`}
        </Code>
      </Typography>

      <Typography variant="body1" paragraph>
        Fontsource allows you to select weights and even individual styles,
        allowing you to cut down on payload sizes to the last byte! Utilizing
        the CSS unicode-range selector, all language subsets are accounted for.
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        <Code language="js">
          {`import "fontsource-${fontData.fontId}/500.css" // All styles included.\n` +
            `import "fontsource-${fontData.fontId}/900-normal.css" // Select either normal or italic.`}
        </Code>
      </Typography>

      <Typography variant="body1" paragraph>
        Alternatively, the same solutions could be imported via SCSS!
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        <Code language="scss">
          {`@import "~fontsource-${fontData.fontId}/index.css";\n` +
            `@import "~fontsource-${fontData.fontId}/300-italic.css";`}
        </Code>
      </Typography>

      <Typography variant="body1" paragraph>
        These examples may not reflect actual compatibility. Please refer to the
        variables at the top of the page.
      </Typography>

      <Typography variant="body1" paragraph>
        Finally, you can reference the font name in a CSS stylesheet, CSS
        Module, or CSS-in-JS.
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        <Code language="css">
          {`body {\n  font-family: "${fontData.fontName}";\n}`}
        </Code>
      </Typography>
    </div>
  );
}
