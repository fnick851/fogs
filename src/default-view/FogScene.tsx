import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useCss } from "kremling"
import React from "react"
import { Fog, FogExp2 } from "three"
import CanvasContainer from "../CanvasContainer"

function Scene(props: { fog: Fog | FogExp2 }) {
  const { scene } = useThree()
  scene.fog = props.fog

  return (
    <>
      <ambientLight color="white" />
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1, 1, 5, 50]} />
        <meshStandardMaterial color={0x8844aa} />
      </mesh>
      <OrbitControls autoRotate={true} />
    </>
  )
}

function FogScene(props: {
  fog: Fog | FogExp2
  docLink: string
  label: string
}) {
  const cssScope = useCss(css)

  return (
    <CanvasContainer>
      <div {...cssScope} className="fog-scene">
        <div className="label">
          <a href={props.docLink} target="_blank">
            {props.label}
          </a>
        </div>
        <Canvas>
          <Scene fog={props.fog} />
        </Canvas>
      </div>
    </CanvasContainer>
  )
}

const css = /*css*/ `
& .fog-scene {
  height: 100%;
}

& .label {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

& .label a {
  font-size: 12px
}
`

export default FogScene
