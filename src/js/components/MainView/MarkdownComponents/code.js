/* eslint-disable react/display-name */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

import FontPreview from '../FontPreview';

export default function code(fontData, fontLoaded) {
  return ({ language, value }) => {
    if (language === 'special') {
      switch (value) {
        case 'FontPreview': {
          return <FontPreview {...{ fontData, fontLoaded }} />;
        }

        default: {
          return undefined;
        }
      }
    }
    return (
      <SyntaxHighlighter style={okaidia} language={language}>
        {value}
      </SyntaxHighlighter>
    );
  };
}
