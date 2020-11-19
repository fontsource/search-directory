/* eslint-disable import/prefer-default-export */
import { Typography } from '@material-ui/core';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H1({ children, classes = {} }) {
  return (
    <Typography variant="h1" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H2({ children, classes = {} }) {
  return (
    <Typography variant="h2" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H3({ children, classes = {} }) {
  return (
    <Typography variant="h3" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H4({ children, classes = {} }) {
  return (
    <Typography variant="h4" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H5({ children, classes = {} }) {
  return (
    <Typography variant="h5" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {Object} [props.classes] - Override or extend the styles applied to the component.
 */
export function H6({ children, classes = {} }) {
  return (
    <Typography variant="h6" gutterBottom {...{ classes }}>
      {children}
    </Typography>
  );
}
