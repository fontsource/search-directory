import { useState } from 'react';
import { MenuItem, Select, Typography } from '@material-ui/core';

import previewGenerator from '../previewGenerator';

const generateFontSizes = ((min, max, step) => {
  const list = [];
  for (let i = min; i <= max; i += step) {
    list.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
  return list;
})(12, 96, 12);

export default function FontPreview({ fontData, fontLoaded }) {
  const [fontSize, setFontSize] = useState(36);

  return (
    <>
      <Select
        value={fontSize}
        onChange={e => {
          setFontSize(e.target.value);
        }}
        renderValue={v => `Font Size: ${v}px`}
      >
        {generateFontSizes}
      </Select>
      <Typography variant="body1">
        <span
          style={{
            fontFamily: fontData.fontId,
            fontSize: `${fontSize}px`,
          }}
        >
          {fontLoaded
            ? previewGenerator(fontData.defSubset, fontData.fontId)
            : ''}
        </span>
      </Typography>
    </>
  );
}
