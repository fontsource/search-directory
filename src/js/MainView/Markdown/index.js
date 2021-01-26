import ReactMarkdown from 'react-markdown';

import code from './code';
import heading from './heading';
import inlineCode from './inlineCode';
import listItem from './listItem';
import paragraph from './paragraph';

export default function Markdown({ children, data }) {
  return (
    <ReactMarkdown
      renderers={{
        code: code(data?.fontData, data?.fontLoaded),
        heading,
        inlineCode,
        listItem,
        paragraph,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
