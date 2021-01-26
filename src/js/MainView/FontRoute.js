import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../core/useFetch';
import fontSourceData from '../core/fontSourceData';
import Markdown from './Markdown';

export default function FontRoute({ fontTemplate }) {
  const { font } = useParams();
  const [fontLoaded, setFontLoaded] = useState(false);

  const fontData = useFetch(
    font ? fontSourceData.pkg(font).metadata : '',
    true,
    {
      styles: [],
      subsets: [],
      weights: [],
    }
  );

  // Fetch font data
  useEffect(() => {
    setFontLoaded(false);
    if (fontData.fontId) {
      // Fetch font file
      const fontFace = new FontFace(
        fontData.fontId,
        `url(${
          fontSourceData.pkg(fontData.fontId, fontData.defSubset).preview
        })`,
        {}
      );
      fontFace.display = 'block';
      fontFace.load().then(result => {
        document.fonts.add(result);
        setFontLoaded(true);
      });
    }
  }, [fontData]);

  return fontData.fontId ? (
    <Markdown data={{ fontData, fontLoaded }}>
      {fontTemplate(fontData)}
    </Markdown>
  ) : null;
}
