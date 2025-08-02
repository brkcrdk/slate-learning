
import { useCallback, type KeyboardEvent } from "react";
import { Editor, Transforms, Element, } from "slate"
import isMainTitleElement from "../utils/isMainTitleElement";

/**
 * Bu hook editörde kullanılan tüm key işlemlerinde almak istediğimiz callbackleri tuttuğumuz yerdir.
 * Tüm eventleri callback ile sardığımız için bir hook içinde yazıyoruz.
 */
const useEditorHotkeys = (editor: Editor) => {
  /**
   * Bu callback ile bir bloğu code bloğuna paragraph bloğuna çevirebiliyoruz. Bu işlem toggle yapmayı öğrenmek için
   * bir demo olarak düşünülebilir.
   */
  const toggleCodeBlock = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "`" && event.ctrlKey) {
        event.preventDefault();

        const [match] = Editor.nodes(editor, {
          match: (node) => Element.isElement(node) && node.type === "code",
        });

        Transforms.setNodes(
          editor,
          { type: match ? "paragraph" : "code" },
          { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) }
        );
      }
    },
    [editor]
  );

  /**
   * Bu callback enter tuşunda alacağımız aksiyonları yönettiğimiz callback.
   * - Eğer shift tuşuna basılı bir şekilde entera basarsak yeni bir satır eklemiş oluyoruz. Bu satır mevcut blok ne olursa olsun paragragh olarak ekleniyor.
   * - Eğer enter+shift tuşuna title içinde basarsak çalışmıyor. Başlıkta sadece enter tuşuna basarak yeni bir satır tuşuna geçiriyoruz.
   */
  const handleEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        const isMainTitle = isMainTitleElement(editor);

        if (event.shiftKey && !isMainTitle) {
          Editor.insertText(editor, "\n");
        } else {
          Transforms.splitNodes(editor, {
            always: true,
          });

          Transforms.setNodes(editor, { type: "paragraph" });
        }
      }
    },
    [editor]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      toggleCodeBlock(event);
      handleEnter(event);
    },
    [toggleCodeBlock, handleEnter]
  );

  return handleKeyDown;
};

export default useEditorHotkeys;