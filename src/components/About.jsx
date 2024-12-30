import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

const Particles = () => {
  const particlesRef = useRef();

  // Create particles
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      positions.push((Math.random() - 0.5) * 10); // X
      positions.push((Math.random() - 0.5) * 10); // Y
      positions.push((Math.random() - 0.5) * 20); // Z
    }
    return new Float32Array(positions);
  }, []);

  // Rotate particles
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          itemSize={3}
          count={particles.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial color="#FFFFFF" size={0.05} />
    </points>
  );
};

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Capture scroll position
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D transformation values based on scroll position
  const rotation = (scrollPosition * 0.01) % 360;
  const scale = 1 + scrollPosition * 0.0005;

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Particles />
        </Canvas>
      </div>

      {/* About Us Content with 3D Scroll Effect */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateX(${rotation}deg) scale(${scale})`,
          transformStyle: "preserve-3d",
        }}
        className="mx-auto text-center items-center justify-center z-10 flex flex-col min-h-screen"
      >
        <span className="text-sm md:text-4xl lg:text-5xl font-normal">
          We help you to
        </span>
        <p className="md:mt-4 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 text-[8px] tracking wider md:text-4xl lg:text-4xl font-bold text-center justify-center items-center max-w-2xl">
          Plan, Migrate, Implement, Manage
          <br />
          and Scale IT Infrastructure
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
