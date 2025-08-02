import { useCallback, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, withReact,Editable, type RenderElementProps } from "slate-react";
import useEditorHotkeys from "./useEditorHotkeys";
import Block from "./Block";


function Editor() {
  const editor = useMemo(() => withReact(createEditor()),[])
  const hotkeyEvents = useEditorHotkeys(editor);

   const renderElement = useCallback(
     (props: RenderElementProps) => <Block  {...props} />,
     [],
   );

  return (
    <Slate
      editor={editor}
      initialValue={[
        {
          type: "main-title",
          children: [{ text: "" }],
        },
        {
          type: "paragraph",
          children: [{ text: "A line of text in a paragraph." }],
        },
        {
          type: "paragraph",
          children: [{ text: "A line of text in a paragraph." }],
        },
      ]}
      // onChange={(value) => {
      //   console.log(value);
      //   const isAstChange = editor.operations.some(
      //     (op) => "set_selection" !== op.type,
      //   );
      //   if (isAstChange) {
      //     // // Save the value to Local Storage.
      //     const content = JSON.stringify(value);
      //     console.log(content);
      //     // localStorage.setItem("content", content);
      //   }
      // }}
      // onSelectionChange={(e) => console.log("selection", e)}
      onValueChange={(e) => console.log("valueChange", e)}
    >
      <Editable
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        renderElement={renderElement}
        // renderPlaceholder={({
        //   children,
        //   attributes,
        // }: RenderPlaceholderProps) => (
        //   <div {...attributes}>
        //     <p>{children}</p>
        //     <pre>
        //       Use the renderPlaceholder prop to customize rendering of the
        //       placeholder
        //     </pre>
        //   </div>
        // )}
        style={{
          border: "1px solid red",
          minWidth: "500px",
          minHeight: "500px",
        }}
        onKeyDown={hotkeyEvents}
      />
    </Slate>
  );
}

export default Editor;
