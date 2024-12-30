"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const sphereRef = useRef();
  const [distortionSpeed, setDistortionSpeed] = useState(0.5);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere
      ref={sphereRef}
      args={[1, 100, 200]}
      scale={2.5}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={hovered ? 0.6 : 0.4}
        speed={distortionSpeed}
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.4}
        roughness={0.3}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingParticles = () => {
  const count = 100;
  const [positions, setPositions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prev => {
        const newPos = new Float32Array(prev.length);
        for (let i = 0; i < prev.length; i += 3) {
          newPos[i] = prev[i] + (Math.random() - 0.5) * 0.05;
          newPos[i + 1] = prev[i + 1] + (Math.random() - 0.5) * 0.05;
          newPos[i + 2] = prev[i + 2] + (Math.random() - 0.5) * 0.05;
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-black"
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white "
        >
          Empowering Your <span className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">IT Solutions</span> 
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl tracking-wider font-bold text-white"
        >
          Transform · Innovate · Excel
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-medium shadow-lg shadow-blue-500/25"
          >
            Contact Us
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-500/50 hover:bg-blue-500/10 rounded-lg font-medium backdrop-blur-sm"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <AnimatedSphere />
          <FloatingParticles />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;

