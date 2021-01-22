import { useState, useEffect } from 'react';
import { Toolbar } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import template from 'lodash/template';

import pages from '../../../pages';

import useFetch from '../../hooks/useFetch';
import Doc from '../general/Doc';

import fontSourceData from '../../fontSourceData';

import code from './MarkdownComponents/code';
import heading from './MarkdownComponents/heading';
import inlineCode from './MarkdownComponents/inlineCode';
import listItem from './MarkdownComponents/listItem';
import paragraph from './MarkdownComponents/paragraph';

const pagesObject = (() => {
  const tempPagesObject = {};
  const generatePagesObject = pagesArray => {
    for (let i = 0; i < pagesArray.length; i += 1) {
      if (typeof pagesArray[i].id === 'string') {
        tempPagesObject[pagesArray[i].id] = pagesArray[i].page;
      }
      if (pagesArray[i].children) {
        generatePagesObject(pagesArray[i].children);
      }
    }
  };
  generatePagesObject(pages);
  return tempPagesObject;
})();

const fontTemplate = template(pagesObject['font-template']);

export default function MainView({ view }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  const isFont = view.startsWith('font-');

  const fontData = useFetch(
    isFont ? fontSourceData.pkg(view.substring(5)).metadata : '',
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

  return (
    <Doc>
      <Toolbar />
      <br />
      <div>
        <ReactMarkdown
          renderers={{
            code: code(fontData, fontLoaded),
            heading,
            inlineCode,
            listItem,
            paragraph,
          }}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {isFont
            ? fontData.fontId
              ? fontTemplate(fontData)
              : ''
            : pagesObject[view]}
        </ReactMarkdown>
      </div>
    </Doc>
  );
}
