import { useState, useEffect } from 'react';
import { Toolbar } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import template from 'lodash/template';

import renderers from './renderers';

import pages from '../../../pages';

import useFetch from '../../hooks/useFetch';
import Doc from '../general/Doc';

import fontSourceData from '../../fontSourceData';

export default function MainView({ view }) {
  const [pagesObject] = useState(() => {
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
  });
  const [fontTemplate] = useState(() => template(pagesObject['font-template']));

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
      fontFace.load().then(result => document.fonts.add(result));
    }
  }, [fontData]);

  return (
    <Doc>
      <Toolbar />
      <br />
      <div>
        <ReactMarkdown renderers={renderers(fontData)}>
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
