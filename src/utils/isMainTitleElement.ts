import { Editor, Element } from "slate";

 function isMainTitleElement(editor: Editor): boolean {
  const [element] =
    Editor.above(editor, {
      match: (node) => Element.isElement(node) && node.type === "main-title",
    }) || [];

  return element?.type === "main-title";
};

export default isMainTitleElement;