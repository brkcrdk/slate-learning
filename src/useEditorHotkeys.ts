
import { useCallback, type KeyboardEvent } from "react";
import { Editor, Transforms, Element, } from "slate"

const useEditorHotkeys = (editor: Editor) => {
  const toggleCodeBlock = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "`" && event.ctrlKey) {
        event.preventDefault();

        const [match] = Editor.nodes(editor, {
          match: (node) => Element.isElement(node) && node.type==='code'
        });

        Transforms.setNodes(
          editor,
          { type: match ? "paragraph" : "code" },
          { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) },
        );
      }
    },
    [editor],
  );

  const handleEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (event.shiftKey) {
          editor.insertText("\n")
        }else{
          Transforms.splitNodes(editor, {
            always: true, // Boş bloklar için de çalışır
          });
          
          // Yeni blok tipini ayarla (isteğe bağlı)
          Transforms.setNodes(editor, { type: "paragraph" });
        }
      }
    },
    [editor],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      toggleCodeBlock(event);
      handleEnter(event);
      // handleCodeBlockEnter(event);
      // Diğer hotkey'ler...
    },
    [toggleCodeBlock, handleEnter],
  );

  return handleKeyDown ;
};

export default useEditorHotkeys;