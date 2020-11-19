import { Typography } from '@material-ui/core';

/**
 * Code syntax highlighter
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the component.
 * @param {string} props.lang - The syntax highlighting language for the component.
 */
export default function Code({ children, lang }) {
  return (
    <Typography variant="body1" component="div" paragraph>
      <pre>
        <code className={`lang-${lang}`}>{children}</code>
      </pre>
    </Typography>
  );
}
