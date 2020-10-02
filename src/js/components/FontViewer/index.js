import React, { useState, useEffect } from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Prism from 'prismjs';

import fontSource from '../../fontSource';

import Homepage from '../Homepage';
import Main from './sections/Main';
import Installation from './sections/Installation';
import Footer from './sections/Footer';

// Generate root styles for FontViewer
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    width: '100%',
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

  // Highlight code after each render
  useEffect(() => {
    return () => Prism.highlightAll();
  });

  // Fetch font data
  useEffect(() => {
    setFontLoaded(false);
    if (view.length > 0) {
      fetch(fontSource.pkg(view).metadata)
        .then(response => response.json())
        .then(data => {
          setFontData(data);

          // Fetch font file
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
          <Main fontData={fontData} fontLoaded={fontLoaded} />

          <br />

          <Installation fontData={fontData} />

          <Footer fontData={fontData} />
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
}
