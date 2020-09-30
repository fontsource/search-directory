import React, { useState, useEffect } from 'react';
import { Divider, Link, Slider, Toolbar, Typography } from '@material-ui/core';
import Prism from 'prismjs';

import fontSource from '../../fontSource';

import useStyles from './style';
import Installation from './Installation';

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
    return () => Prism.highlightAll();
  });

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
            classes={{ root: classes.slider }}
            defaultValue={36}
            onChange={(e, newValue) => {
              setFontSize(newValue);
            }}
            step={12}
            marks
            min={12}
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

          <Installation fontData={fontData} />

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
