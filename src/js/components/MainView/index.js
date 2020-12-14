import { useState, useEffect } from 'react';
import { CircularProgress, Toolbar } from '@material-ui/core';
import Prism from 'prismjs';

import Doc from '../general/Doc';

import fontSourceData from '../../fontSourceData';

import Homepage from '../Homepage';
import FontPreview from './FontPreview';
import FontInstallation from './FontInstallation';
import FontFooter from './FontFooter';

export default function FontViewer({ view }) {
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
          console.log(fontSourceData.pkg(data.fontId, data.defSubset).preview);
          // Fetch font file
          new FontFace(
            data.fontId,
            `url(${fontSourceData.pkg(data.fontId, data.defSubset).preview})`
          )
            .load()
            .then(result => {
              document.fonts.add(result);
              setFontLoaded(true);
            });
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
    <Doc>
      <Toolbar />
      <br />
      {/* eslint-disable-next-line no-nested-ternary */}
      {view ? (
        view === fontData.fontId ? (
          <>
            <FontPreview fontData={fontData} fontLoaded={fontLoaded} />

            <FontInstallation fontData={fontData} />

            <FontFooter fontData={fontData} />
          </>
        ) : (
          <CircularProgress />
        )
      ) : (
        <Homepage />
      )}
    </Doc>
  );
}
