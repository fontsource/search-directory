import { Typography } from '@material-ui/core';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 * @param {*} props.component - The component used for the root node.
 */
export default function P({ children, classes = {}, component }) {
  return (
    <Typography variant="body1" paragraph {...{ classes, component }}>
      {children}
    </Typography>
  );
}
