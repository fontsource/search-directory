import { useState, useEffect } from 'react';
import { CircularProgress, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Prism from 'prismjs';

import fontSourceData from '../../fontSourceData';

import Homepage from '../Homepage';
import FontPreview from './FontPreview';
import FontInstallation from './FontInstallation';
import FontFooter from './FontFooter';

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
      fetch(fontSourceData.pkg(view).metadata)
        .then(response => response.json())
        .then(data => {
          setFontData(data);

          if (data.subsets.includes('latin')) {
            // Fetch font file
            new FontFace(
              data.fontId,
              `url(${fontSourceData.pkg(data.fontId, 'latin').preview})`
            )
              .load()
              .then(result => {
                document.fonts.add(result);
                setFontLoaded(true);
              });
          }
        });

      // Fetch font file
      new FontFace(view, `url(${fontSourceData.pkg(view).preview})`)
        .load()
        .then(result => {
          document.fonts.add(result);
          setFontLoaded(true);
        });
    }
  }, [view]);

  return (
    <div className={classes.root}>
      <Toolbar />
      {/* eslint-disable-next-line no-nested-ternary */}
      {view ? (
        view === fontData.fontId ? (
          <div>
            <FontPreview fontData={fontData} fontLoaded={fontLoaded} />

            <br />

            <FontInstallation fontData={fontData} />

            <FontFooter fontData={fontData} />
          </div>
        ) : (
          <CircularProgress />
        )
      ) : (
        <Homepage />
      )}
    </div>
  );
}
