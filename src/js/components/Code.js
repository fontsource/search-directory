export default function Code({ children, language }) {
  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
