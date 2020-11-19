import { Typography } from '@material-ui/core';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export default function P({ children, classes = {} }) {
  return (
    <Typography variant="body1" paragraph {...{ classes }}>
      {children}
    </Typography>
  );
}
