/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/test/finalRobot.glb 
*/

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color, MathUtils, ShaderMaterial } from 'three'

export function Test(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./test/finalRobot.glb')
  const { actions } = useAnimations(animations, group)

  const lightRef = useRef();
  const rot = useRef();
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);

  const handleMouseMove = (event) => {
    const rotationSpeed = 0.01; // Adjust as needed
    setTargetRotation(targetRotation => targetRotation + (event.movementX * rotationSpeed));
  };

  const handleMouseLeave = () => {
    // Set target rotation to 0 for gradual return
    setTargetRotation(0);
  };

  useFrame(() => {
    if (rot.current) {
      // Gradually interpolate the rotation
      const lerpFactor = 0.1; // Adjust for smoother or faster interpolation
      setRotation(currentRotation => MathUtils.lerp(currentRotation, targetRotation, lerpFactor));
      rot.current.rotation.y = rotation;
    }
  });


  useEffect(() => {
    // Play all actions
    for (const actionName in actions) {
      const action = actions[actionName];
      if (action && typeof action.play === 'function') {
        action.play();
      }
    }
  }, [actions]);


  const glowMaterial = useMemo(() => new ShaderMaterial({
    uniforms: {
      glowColor: { value: new Color(0x800080) }, // Purple color
      glowIntensity: { value: 10 },
      fogDensity: { value: 1 },
    },
    vertexShader: `varying vec3 vPosition;

    void main() {
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`, // The vertex shader code
    fragmentShader: `varying vec3 vPosition;

    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float fogDensity;
    
    void main() {
      float distance = length(vPosition);
      float fogFactor = 1.0 - exp(-pow(distance * fogDensity, 2.0));
      fogFactor = clamp(fogFactor, 0.0, 1.0); // Ensure fogFactor is in the range [0, 1]
    
      vec3 color = mix(vec3(1.0, 1.0, 1.0), glowColor, fogFactor) * glowIntensity;
      gl_FragColor = vec4(color, 1.0);
    }
    `, // The fragment shader code
    transparent: true,
  }), []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera name="Camera" makeDefault={true} far={100} near={0.1} fov={32.895} position={[0.19, 8, 13]} rotation={[-1.631, 0.005, 0.001]} />
        <rectAreaLight
          ref={lightRef}
          width={3}
          height={3}
          intensity={5}
          position={[-1.3797, 0, 0.8693]}
          rotation={[
            (19.106 * Math.PI) / 180, // Convert X rotation from degrees to radians
            (-74.387 * Math.PI) / 180, // Convert Y rotation from degrees to radians
            (-14.556 * Math.PI) / 180, // Convert Z rotation from degrees to radians
          ]}
        // Add any other props you need for the light
        />
        <pointLight name="Point" intensity={0.481} decay={2} color="#ff0fe1" position={[0.006, 1.503, 0.031]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point001" intensity={2.028} decay={2} position={[-0.946, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point003" intensity={2.028} decay={2} color="#ff0fe1" position={[0.013, .403, 0.01]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point002_1" intensity={2.028} decay={2} position={[0.828, 1.218, -1.94]} rotation={[-Math.PI / 2, 0, 0]} />
        <pointLight name="Point001_1" intensity={2.028} decay={2} position={[-0.946, 0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.012']} scale={[0.512, 0.118, 0.509]}>
          <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={glowMaterial} />
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials['Material.011']} />
          <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={glowMaterial} />
        </mesh>
        <mesh ref={rot} onPointerMove={handleMouseMove} onPointerLeave={handleMouseLeave} name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[0, 0.905, 0]}>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.007']} position={[0, 1.227, 0]} scale={[0.472, 0.472, 0.257]}>
            <group name="Empty" position={[0.034, -0.061, -6.947]} rotation={[0.022, 0, 0]} scale={[2.119, 2.12, 3.896]}>
              <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0.102, 0.103, 2.025]} rotation={[1.547, 0, 0]} scale={0.099} />
            </group>
            <group name="Empty001" position={[0.034, -0.226, 9.296]} scale={[2.119, 2.119, 3.896]} />
            <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.008']} />
            <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[0, 0, 0.242]} />
            <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.007']} />
            <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.009']} position={[0, -0.082, 0]} />
          </mesh>
          <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.Material} position={[0, -0.075, 0]} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./test/finalRobot.glb')