import { useState } from 'react';
import { Slider, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Generate styles for Main
const useStyles = makeStyles(() => ({
  slider: {
    width: '200px',
  },
}));

export default function FontPreview({ fontData, fontLoaded }) {
  const classes = useStyles();
  const [fontSize, setFontSize] = useState(36);
  return (
    <div>
      {/* Title */}
      <Typography variant="h2" display="inline" gutterBottom>
        {fontData.fontName}
      </Typography>

      {/* Version */}
      <Typography variant="subtitle1" display="inline">
        {` ${fontData.version}`}
      </Typography>

      {/* Styles */}
      <Typography variant="body1">{`${fontData.styles.length} Style${
        fontData.styles.length > 1 ? 's' : ''
      }: ${fontData.styles.join(', ')}`}</Typography>

      {/* Subsets */}
      {fontData.subsets.length > 1 ? (
        <Typography variant="body1">
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
        </Typography>
      ) : (
        <Typography variant="body1">1 Subset: {fontData.defSubset}</Typography>
      )}

      {/* Weights */}
      <Typography variant="body1">{`${fontData.weights.length} Weight${
        fontData.weights.length > 1 ? 's' : ''
      }: ${fontData.weights.join(', ')}`}</Typography>
      <br />
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
            The quick brown fox jumps over the lazy dog.
          </span>
        </Typography>
      ) : (
        ''
      )}
    </div>
  );
}
