import { Editor, Element } from "slate";

/**
 * Bu helper functionı ile editorde mevcut bloğun `main-title` bloğu olup olmadığını kontrol ediyoruz.
 * Bu kontrolü tekrar tekrar yaptığımız için bir helper functionı yazıyoruz.
 */
function isMainTitleElement(editor: Editor): boolean {
  const [element] =
    Editor.above(editor, {
      match: (node) => Element.isElement(node) && node.type === "main-title",
    }) || [];

  return element?.type === "main-title";
};

export default isMainTitleElement;