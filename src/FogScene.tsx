import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useCss } from "kremling"
import React from "react"
import { Fog, FogExp2 } from "three"

function Scene(props: { fog: Fog | FogExp2 }) {
  const { scene } = useThree()
  scene.fog = props.fog

  return (
    <>
      <ambientLight color="white" />
      <mesh>
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
    <div {...cssScope} className="canvas-container">
      <div className="label">
        <a href={props.docLink} target="_blank">
          {props.label}
        </a>
      </div>
      <Canvas>
        <Scene fog={props.fog} />
      </Canvas>
    </div>
  )
}

const css = /*css*/ `
& .canvas-container {
  flex: 1;
  border: 1px solid lightgray;
  margin: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
  box-shadow: 5px 5px 10px -5px rgba(0,0,0,0.5);
  position: relative;
}

.label {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.label a {
  font-size: 12px
}
`

export default FogScene
