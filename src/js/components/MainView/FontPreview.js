import { useState } from 'react';
import { Divider, Slider, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import previewGenerator from '../previewGenerator';

// Generate styles for Main
const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

export default function FontPreview({ fontData, fontLoaded }) {
  const classes = useStyles();
  const [fontSize, setFontSize] = useState(36);

  return fontData.fontId ? (
    <>
      {/* Title */}
      <Typography variant="h1" display="inline" gutterBottom>
        {fontData.fontName}
      </Typography>

      {/* Version */}
      <Typography variant="body1" display="inline" gutterBottom>
        {` ${fontData.version}`}
      </Typography>

      <Typography variant="body1" component="div" paragraph>
        {/* Styles */}
        <div>{`${fontData.styles.length} Style${
          fontData.styles.length > 1 ? 's' : ''
        }: ${fontData.styles.join(', ')}`}</div>

        {/* Subsets */}
        {fontData.subsets.length > 1 ? (
          <div>
            {fontData.subsets.length} Subsets:&nbsp;
            <Tooltip
              title="Default Subset"
              arrow={true}
              enterDelay={500}
              placement="top"
            >
              <b>{fontData.defSubset}</b>
            </Tooltip>
            ,&nbsp;
            {fontData.subsets.filter(v => fontData.defSubset !== v).join(', ')}
          </div>
        ) : (
          <div>1 Subset: {fontData.defSubset}</div>
        )}

        {/* Weights */}
        <div>{`${fontData.weights.length} Weight${
          fontData.weights.length > 1 ? 's' : ''
        }: ${fontData.weights.join(', ')}`}</div>
      </Typography>

      <Slider
        classes={{ root: classes.slider }}
        defaultValue={36}
        onChange={(e, newValue) => {
          setFontSize(newValue);
        }}
        step={12}
        marks
        min={12}
        max={96}
        valueLabelDisplay="auto"
      />
      {fontLoaded ? (
        <Typography variant="body1" paragraph>
          <span
            style={{
              fontFamily: fontData.fontId,
              fontSize: `${fontSize}px`,
            }}
          >
            {previewGenerator(fontData.defSubset, fontData.fontId)}
          </span>
        </Typography>
      ) : (
        ''
      )}

      <br />
      <Divider />
      <br />
    </>
  ) : (
    <></>
  );
}
