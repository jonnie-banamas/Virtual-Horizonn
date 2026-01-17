import { Suspense, useRef, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera,
  useTexture,
  Text,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';
import { artworks } from '@/lib/artworks';

interface ArtworkFrameProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  imageUrl: string;
  title: string;
  artist: string;
  onClick?: () => void;
}

function ArtworkFrame({ 
  position, 
  rotation = [0, 0, 0], 
  imageUrl, 
  title, 
  artist,
  onClick 
}: ArtworkFrameProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imageUrl);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(
        new THREE.Vector3(hovered ? 1.02 : 1, hovered ? 1.02 : 1, 1),
        0.1
      );
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.4, 1.8, 0.1]} />
        <meshStandardMaterial color="#2a1f1f" roughness={0.4} />
      </mesh>
      
      {/* Canvas/Artwork */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <planeGeometry args={[2.2, 1.6]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Label */}
      <group position={[0, -1.1, 0.01]}>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.5, 0.3]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <Text
          position={[0, 0.05, 0]}
          fontSize={0.08}
          color="#2c3e50"
          anchorX="center"
          anchorY="middle"
          font="/fonts/PlayfairDisplay-Regular.ttf"
        >
          {title}
        </Text>
        <Text
          position={[0, -0.08, 0]}
          fontSize={0.05}
          color="#6b7b8a"
          anchorX="center"
          anchorY="middle"
        >
          {artist}
        </Text>
      </group>
    </group>
  );
}

function GalleryRoom() {
  const wallColor = '#f5f5f0';
  const floorColor = '#2a2520';

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={floorColor} roughness={0.8} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2.5, -8]} receiveShadow>
        <planeGeometry args={[30, 5]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-10, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[16, 5]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[10, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[16, 5]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      
      {/* Spotlights for artworks */}
      <spotLight
        position={[0, 4.5, 2]}
        angle={0.5}
        penumbra={0.5}
        intensity={1}
        castShadow
        target-position={[0, 2, -7.9]}
      />
    </>
  );
}

function CameraController() {
  const { camera } = useThree();
  
  useFrame(() => {
    // Smooth camera movement could be added here
  });

  return null;
}

interface VirtualGallery3DProps {
  onArtworkClick?: (artworkId: string) => void;
}

export function VirtualGallery3D({ onArtworkClick }: VirtualGallery3DProps) {
  const selectedArtworks = artworks.slice(0, 6);

  // Positions for artworks on walls
  const artworkPositions: { 
    position: [number, number, number]; 
    rotation: [number, number, number];
  }[] = [
    // Back wall - 3 artworks
    { position: [-4, 2.5, -7.9], rotation: [0, 0, 0] },
    { position: [0, 2.5, -7.9], rotation: [0, 0, 0] },
    { position: [4, 2.5, -7.9], rotation: [0, 0, 0] },
    // Left wall - 1.5 artworks
    { position: [-9.9, 2.5, -3], rotation: [0, Math.PI / 2, 0] },
    { position: [-9.9, 2.5, 2], rotation: [0, Math.PI / 2, 0] },
    // Right wall - 1 artwork
    { position: [9.9, 2.5, -1], rotation: [0, -Math.PI / 2, 0] },
  ];

  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={60} />
          <CameraController />
          
          <Environment preset="apartment" />
          
          <GalleryRoom />
          
          {selectedArtworks.map((artwork, index) => (
            <ArtworkFrame
              key={artwork.id}
              position={artworkPositions[index]?.position || [0, 2.5, -7.9]}
              rotation={artworkPositions[index]?.rotation || [0, 0, 0]}
              imageUrl={artwork.thumbnailUrl}
              title={artwork.title}
              artist={artwork.artist}
              onClick={() => onArtworkClick?.(artwork.id)}
            />
          ))}

          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            maxDistance={15}
            minDistance={3}
            target={[0, 2, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
