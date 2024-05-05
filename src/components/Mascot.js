import { OrbitControls, Preload, Stars, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import CanvasLoader from "./Loader"
import { Test } from "./Test";

function MascotCanvas() {
    return (
        <Canvas shadows>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} minAzimuthAngle={-Math.PI / 10} // -45 degrees
                    maxAzimuthAngle={Math.PI / 10}  // 45 degrees
                    maxPolarAngle={Math.abs(1.346)}
                    minPolarAngle={Math.abs(1.001)}
                />
                <rectAreaLight height={2} width={3} intensity={5} position={[1, 5, 1]} />
                <rectAreaLight height={2} width={5} intensity={8} position={[1, 5, 10]} rotateY={90} />
                <rectAreaLight height={2} width={5} intensity={8} position={[1, 5, -10]} rotateY={90} />
                <Test />
            </Suspense>
            <Preload all />
        </Canvas>
    )

}

export default MascotCanvas
