import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Environment } from '@react-three/drei';

function Model({ modelPath }) {
  const modelType = modelPath.split('/').pop()?.split('.')[0];

  const TurbineModel = () => (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.5, 32]} />
        <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos(i * Math.PI / 4) * 0.7,
            0,
            Math.sin(i * Math.PI / 4) * 0.7
          ]}
          rotation={[Math.PI / 2, 0, i * Math.PI / 4]}
        >
          <boxGeometry args={[0.2, 0.8, 0.05]} />
          <meshStandardMaterial color="#666" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );

  const CylinderModel = () => (
    <group>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#555" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 2.5, 32]} />
        <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );

  const PCBModel = () => (
    <group>
      <mesh position={[0, -0.05, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#0a5" roughness={0.3} />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => {
        const x = (i % 4) * 0.4 - 0.6;
        const z = Math.floor(i / 4) * 0.4 - 0.4;
        return (
          <mesh key={i} position={[x, 0.05, z]}>
            <boxGeometry args={[0.2, 0.1, 0.2]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#333" : i % 3 === 1 ? "#555" : "#777"} 
            />
          </mesh>
        );
      })}
    </group>
  );

  const RobotModel = () => (
    <group>
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshStandardMaterial color="#444" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial color="#666" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.5, 0.5]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.2, 1, 0.2]} />
        <meshStandardMaterial color="#888" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.5, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#aaa" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );

  const modelComponents = {
    turbine: TurbineModel,
    cylinder: CylinderModel,
    pcb: PCBModel,
    robot: RobotModel
  };

  const ModelComponent = modelComponents[modelType] || (() => null);
  return <ModelComponent />;
}

const DiagramDisplay = ({ diagram, onZoomIn, onZoomOut, onResetRotation }) => {
  const controlsRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Model modelPath={diagram.modelPath} />
        
        <Grid 
          infiniteGrid 
          cellSize={0.5}
          cellThickness={0.5}
          sectionSize={2}
          sectionThickness={1}
          fadeDistance={30}
          fadeStrength={1}
        />
        
        <OrbitControls 
          ref={controlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          enableZoom={true}
          enablePan={true}
          minDistance={2}
          maxDistance={10}
        />
        
        <Environment preset="city" />
      </Canvas>
      
      <div className="absolute top-4 left-4 p-4 max-w-xl">
        <h2 className="text-xl font-bold">{diagram.name}</h2>
        <p className="text-gray-300 mt-2">{diagram.description}</p>
        <div className="mt-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={autoRotate}
              onChange={() => setAutoRotate(prev => !prev)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Auto-rotate</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DiagramDisplay;