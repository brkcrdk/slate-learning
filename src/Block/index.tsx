
import type { RenderElementProps } from "slate-react";
import CodeBlock from "./CodeBlock";
import MainTitleBlock from "./MainTitleBlock";
import ParagraphBlock from "./ParagraphBlock";

function Block(props: RenderElementProps) {
  const { element } = props;

  if (element.type === "main-title") {
    return <MainTitleBlock {...props} />;
  }

  if (element.type === "code") {
    return <CodeBlock {...props} />;
  }

  return <ParagraphBlock {...props} />;
}

export default Block;