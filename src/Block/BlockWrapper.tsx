import type { PropsWithChildren } from "react";

function BlockWrapper({children}:PropsWithChildren) {
  return (
    <div className="block-wrapper">
      <button className="add-block-button" contentEditable={false}>
        +
      </button>
      <button className="drag-handle-button" contentEditable={false}>
        #
      </button>
      {children}
    </div>
  );
}

export default BlockWrapper;