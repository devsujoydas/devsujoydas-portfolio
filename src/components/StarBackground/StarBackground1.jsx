import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Stars({ rotationDelta }) {
  const pointsRef = useRef();

  const particlesPositions = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Scroll এর ডেল্টা অনুযায়ী রোটেশন
      pointsRef.current.rotation.x += delta * 0.00005 + rotationDelta * 0.00005;
      pointsRef.current.rotation.y += delta * 0.00005 + rotationDelta * 0.00003;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPositions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function StarBackground2() {
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);
  const [rotationDelta, setRotationDelta] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - prevScrollY.current;
          prevScrollY.current = currentScrollY;

          setRotationDelta(delta);
          setScrollY(currentScrollY);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stars rotationDelta={rotationDelta} />
      </Canvas>
    </div>
  );
}
