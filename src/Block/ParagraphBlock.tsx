import type { RenderElementProps } from "slate-react";
import BlockWrapper from "./BlockWrapper";
import { Node } from "slate";

function ParagraphBlock(props: RenderElementProps) {
  const { attributes, children, element } = props;

  const isEmpty = Node.string(element) === "";

  return (
    <BlockWrapper>
      <p
        data-placeholder="Write, / for commands..."
        data-empty={isEmpty ? "" : undefined}
        {...attributes}>
        {children}
      </p>
    </BlockWrapper>
  );
}

export default ParagraphBlock;