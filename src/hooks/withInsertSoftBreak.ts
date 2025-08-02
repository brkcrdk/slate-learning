import { Editor, insertText, Range, Transforms } from "slate";

/**
 * Default softBreak(shift+enter) istediğimiz gibi çalışmadığımı için bu plugini yazıyoruz.
 */
function withInsertSoftBreak(editor: Editor) {
  editor.insertSoftBreak=()=>{
    // Eğer seçili text varsa onu sil
    if(editor.selection){
      const selectedText = Range.isCollapsed(editor.selection)

      if(!selectedText){
        Transforms.delete(editor,{
          at: editor.selection
        })
      }
    }

    // Sonrasında yeni bir satır ekliyoruz.
    insertText(editor, "\n");
  }

  return editor;
}

export default withInsertSoftBreak;