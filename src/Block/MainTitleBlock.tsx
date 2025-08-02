import { Node } from "slate";
import type { RenderElementProps } from "slate-react";

  function MainTitleBlock(props: RenderElementProps) {
  const { attributes, children, element } = props;
  
  const isEmpty = Node.string(element) === "";



  return (
    <h1
      data-placeholder="Main Title"
      data-empty={isEmpty ? '' : undefined}
      {...attributes}
    >
      {children}
    </h1>
  );
}

export default MainTitleBlock;