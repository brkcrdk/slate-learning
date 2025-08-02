import { useMemo } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import withLayout from "./withLayout";

function useEditorConfig() {
  return useMemo(() => {
    let  editor = createEditor();
    editor = withReact(editor);
    editor = withHistory(editor);
    editor = withLayout(editor);
    return editor;

  }, []);
}

export default useEditorConfig;