import { Editor, Transforms } from "slate";
import type { MainTitleElement } from "../types/Slate";

/**
 * Bu plugin ile editorun ana başlığı olan bloğun silinmesini engelliyoruz.
 * Ayrıca onun üstüne de bir blok eklenmesini de engelliyoruz.
 */
function withLayout(editor: Editor) {
   const { normalizeNode } = editor;

   editor.normalizeNode = (entry) => {
     const [, path] = entry;

     if(path.length === 0){
      const isEmpty= Editor.string(editor, [0,0]) === ""

      if (editor.children.length <= 1 && isEmpty) {
        const title: MainTitleElement = {
          type: "main-title",
          children: [{ text: "" }],
        };
        Transforms.insertNodes(editor, title, {
          at: path.concat(0),
          select: true,
        });
      }
     }
     return normalizeNode(entry);
   };

   return editor;
}

export default withLayout;