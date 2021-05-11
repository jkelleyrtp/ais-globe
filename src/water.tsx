import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Box, OrbitControls, RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";
import { Camera, Matrix4, Object3D } from "three";
import { Scene, WebGLRenderer } from "three";
import ThreeGlobe from "three-globe";

export function WaterCanvas({}: {}) {
  return (
    <Canvas shadows style={{ backgroundColor: "black" }}>
      <OrbitControls position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[10, 10, 10]} />

      <RoundedBox
        args={[1, 1, 1]} // Width, Height and Depth of the box
        radius={0.05} // Border-Radius of the box
        smoothness={4} // Optional, number of subdivisions
      >
        <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
      </RoundedBox>
      <Globe />
      <axesHelper />
    </Canvas>
  );
}

function ArBox({}: {}) {
  return (
    <mesh scale={[1, 1, 1]} position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" color="#ff0000" />
    </mesh>
  );
}

const MyGlobe = new ThreeGlobe()
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png");

const Globe = (props: {}) => {
  const { scene } = useThree();
  // This reference will give us direct access to the mesh

  useEffect(() => {
    scene.add(MyGlobe);
  }, []);

  return null;
};
