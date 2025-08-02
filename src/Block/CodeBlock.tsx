import type { RenderElementProps } from "slate-react";

// Define a React component renderer for our code blocks.
function CodeBlock (props: RenderElementProps) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};
export default CodeBlock;