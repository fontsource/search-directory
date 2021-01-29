import { useState, useEffect } from 'react';
import { Toolbar } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import useFetch from '../../hooks/useFetch';
import Doc from '../general/Doc';

import fontSourceData from '../../fontSourceData';

import FontPreview from './FontPreview';
import FontFooter from './FontFooter';

export default function FontViewer({ view }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  let markdownUrl = '';

  switch (view) {
    case '':
      markdownUrl = fontSourceData.readme;
      break;
    case 'CHANGELOG':
      markdownUrl = fontSourceData.changelog;
      break;
    default:
      markdownUrl = fontSourceData.pkg(view).readme;
      break;
  }

  const fontReadme = useFetch(markdownUrl);

  let fontData = useFetch(
    view !== '' && view !== 'CHANGELOG'
      ? fontSourceData.pkg(view).metadata
      : '',
    true
  );

  if (fontData === '') {
    fontData = {
      styles: [],
      subsets: [],
      weights: [],
    };
  }

  // Fetch font data
  useEffect(() => {
    setFontLoaded(false);
    if (fontData.fontId) {
      // Fetch font file
      new FontFace(
        fontData.fontId,
        `url(${
          fontSourceData.pkg(fontData.fontId, fontData.defSubset).preview
        })`
      )
        .load()
        .then(result => {
          document.fonts.add(result);
          setFontLoaded(true);
        });
    }
  }, [fontData]);

  return (
    <Doc>
      <Toolbar />
      <FontPreview {...{ fontData, fontLoaded }}></FontPreview>
      <ReactMarkdown
        renderers={{
          // eslint-disable-next-line react/display-name
          code: ({ language, value }) => (
            <SyntaxHighlighter style={okaidia} language={language}>
              {value}
            </SyntaxHighlighter>
          ),
        }}
      >
        {fontReadme}
      </ReactMarkdown>
      <FontFooter {...{ fontData }}></FontFooter>
    </Doc>
  );
}
