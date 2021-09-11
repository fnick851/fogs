import React from "react"
import { useCss } from "kremling"
import FogScene from "./FogScene"
import { Fog, FogExp2 } from "three"
import { Leva, useControls } from "leva"

function Default() {
  const cssScope = useCss(css)

  const { FogColor, FogNear, FogFar, FogExp2Color, FogExp2Density } =
    useControls({
      FogColor: "white",
      FogNear: 0,
      FogFar: 7,
      FogExp2Color: "white",
      FogExp2Density: 0.2,
    })

  const fog1 = new Fog(FogColor, FogNear, FogFar)
  const fog2 = new FogExp2(FogExp2Color, FogExp2Density)

  return (
    <div {...cssScope} className="default">
      <FogScene
        fog={fog1}
        label="Fog"
        docLink="https://threejs.org/docs/?q=fog#api/en/scenes/Fog"
      />
      <FogScene
        fog={fog2}
        label="FogExp2"
        docLink="https://threejs.org/docs/?q=fog#api/en/scenes/FogExp2"
      />
      <Leva oneLineLabels />
    </div>
  )
}

const css = /*css*/ `
& .default {
  height: 100%;
  display: flex;
  flex-direction: column;
}
`

export default Default
