import type { PropsWithChildren } from "react";

function BlockWrapper({children}:PropsWithChildren) {
  return <div className="block-wrapper">{children}</div>
}

export default BlockWrapper;