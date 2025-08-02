
import type { RenderElementProps } from "slate-react";
import CodeBlock from "./CodeBlock";
import MainTitleBlock from "./MainTitleBlock";

function Block(props: RenderElementProps) {
  const { attributes, children, element } = props;

  if (element.type === "main-title") {
    return <MainTitleBlock {...props} />;
  }

  if (element.type === "code") {
    return <CodeBlock {...props} />;
  }

  return <p {...attributes}>{children}</p>;
}

export default Block;