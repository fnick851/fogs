import React from "react"
import { useCss } from "kremling"

function CanvasContainer({ children }: { children: React.ReactNode }) {
  const cssScope = useCss(css)
  return (
    <div {...cssScope} className="canvas-container">
      {children}
    </div>
  )
}

const css = /*css*/ `
& .canvas-container {
  flex: 1;
  border: 1px solid lightgray;
  margin: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  position: relative;
}
`

export default CanvasContainer
