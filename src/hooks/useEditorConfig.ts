import { useMemo } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import withLayout from "./withLayout";

/**
 * Bu hookta editör instance'ını oluşturuyoruz. Bu instancı daha sonra kullanmak
 * istediğimiz pluginlerle extend ediyoruz. Normalde dökümandaki yaklaşım şu şekilde:
 * ```ts
 *  const editor = withReact(withHistory(createEditor()));
 * ```
 * Fakat bu yaklaşımda okunabilirlik düşünülerek hook içinde yapıyoruz. Bu yaklaşımdaki gibi yapıyoruz.
 */
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