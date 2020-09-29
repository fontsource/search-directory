import React, { useState, useEffect } from 'react';
import { Divider, Link, Slider, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import fontSource from '../fontSource';

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
    margin: theme.spacing(2),
  },
}));

export default function FontViewer({ view }) {
  const classes = useStyles();
  const [fontData, setFontData] = useState({
    styles: [],
    subsets: [],
    weights: [],
  });
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(36);

  useEffect(() => {
    setFontLoaded(false);
    if (view.length > 0) {
      fetch(fontSource.pkg(view).metadata)
        .then(response => response.json())
        .then(data => {
          setFontData(data);
          new FontFace(
            data.fontId,
            `url(${fontSource.pkg(data.fontId).preview})`
          )
            .load()
            .then(result => {
              document.fonts.add(result);
              setFontLoaded(true);
            });
        });
    }
  }, [view]);

  return (
    <div className={classes.root}>
      <Toolbar />

      {view ? (
        <div>
          {/* Title */}
          <Typography variant="h2" display="inline" gutterBottom>
            {fontData.fontName}
          </Typography>

          {/* Version */}
          <Typography variant="subtitle1" display="inline">
            {` ${fontData.version}`}
          </Typography>

          {/* Styles */}
          <Typography variant="body1">{`${
            fontData.styles.length > 1
              ? `${fontData.styles.length} Styles`
              : 'Style'
          }: ${fontData.styles.join(', ')}`}</Typography>

          {/* Default Subset */}
          {fontData.subsets.length > 1 ? (
            <Typography variant="body1">{`Default Subset: ${fontData.defSubset}`}</Typography>
          ) : (
            ''
          )}

          {/* Subsets */}
          <Typography variant="body1">{`${
            fontData.subsets.length > 1
              ? `${fontData.subsets.length} Subsets`
              : 'Subset'
          }: ${fontData.subsets.join(', ')}`}</Typography>

          {/* Weights */}
          <Typography variant="body1">{`${
            fontData.weights.length > 1
              ? `${fontData.weights.length} Weights`
              : 'Weight'
          }: ${fontData.weights.join(', ')}`}</Typography>
          <br />
          <Slider
            defaultValue={36}
            onChange={(e, newValue) => {
              setFontSize(newValue);
            }}
            step={6}
            marks
            min={6}
            max={96}
            valueLabelDisplay="auto"
          />
          {fontLoaded ? (
            <Typography variant="body1" paragraph>
              <span
                style={{
                  fontFamily: fontData.fontId,
                  fontSize: `${fontSize}px`,
                }}
              >
                The quick brown fox jumps over the lazy dog.
              </span>
            </Typography>
          ) : (
            ''
          )}

          <br />

          <Typography variant="h5" paragraph>
            Installation
          </Typography>

          <Typography variant="body1" paragraph>
            Fontsource assumes you are using a bundler, such as Webpack, to load
            in CSS. Solutions like CRA, Gatsby and Next.js are prebuilt examples
            that are compatible.
          </Typography>

          <Typography variant="body1" paragraph>
            <code>
              &nbsp;&nbsp;yarn add fontsource-{fontData.fontId}{' '}
              {`// npm install fontsource-${fontData.fontId}`}
            </code>
          </Typography>

          <Typography variant="body1" paragraph>
            Then within your app entry file or site component, import it in. For
            example in Gatsby, you could choose to import it into a layout
            template (layout.js), page component (index.js), or
            gatsby-browser.js.
          </Typography>

          <Typography variant="body1" paragraph>
            <code>
              &nbsp;&nbsp;import &quot;fontsource-{fontData.fontId}&quot; //
              Defaults to weight 400 with all styles included.
            </code>
          </Typography>

          <Typography variant="body1" paragraph>
            Fontsource allows you to select weights and even individual styles,
            allowing you to cut down on payload sizes to the last byte!
            Utilizing the CSS unicode-range selector, all language subsets are
            accounted for.
          </Typography>

          <Typography variant="body1" paragraph>
            <code>
              &nbsp;&nbsp;import &quot;fontsource-{fontData.fontId}
              /500.css&quot; // All styles included.
              <br />
              &nbsp;&nbsp;import &quot;fontsource-{fontData.fontId}
              /900-normal.css&quot; // Select either normal or italic.
            </code>
          </Typography>

          <Typography variant="body1" paragraph>
            Alternatively, the same solutions could be imported via SCSS!
          </Typography>

          <Typography variant="body1" paragraph>
            <code>
              &nbsp;&nbsp;@import &quot;~fontsource-{fontData.fontId}
              /index.css&quot;
              <br />
              &nbsp;&nbsp;@import &quot;~fontsource-{fontData.fontId}
              /300-italic.css&quot;
            </code>
          </Typography>

          <Typography variant="body1" paragraph>
            These examples may not reflect actual compatibility. Please refer
            below.
          </Typography>

          <Typography variant="body1" paragraph>
            Supported variables:
            <br />
            <ul>
              <li>Weights: [{fontData.weights.join(', ')}]</li>
              <li>Styles: [{fontData.styles.join(', ')}]</li>
            </ul>
          </Typography>

          <Typography variant="body1" paragraph>
            Finally, you can reference the font name in a CSS stylesheet, CSS
            Module, or CSS-in-JS.
          </Typography>

          <Typography variant="body1" paragraph>
            <code>
              &nbsp;&nbsp;body {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;font-family: &quot;{fontData.fontName}
              &quot;;
              <br />
              &nbsp;&nbsp;{'}'}
            </code>
          </Typography>

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
        </div>
      ) : (
        <div>
          {' '}
          <Typography variant="h5" paragraph>
            Select a font to get started.
          </Typography>
        </div>
      )}
    </div>
  );
}
