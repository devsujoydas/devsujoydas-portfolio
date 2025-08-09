import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingStars = () => {
  const starsRef = useRef();

  // প্রতি ফ্রেমে তারাগুলো ঘোরানো
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0008; // ডান-বাম ঘোরা
      starsRef.current.rotation.x += 0.0003; // উপর-নিচ ঘোরা
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100} // তারাগুলোর দূরত্ব
        depth={50}   // কতটা গভীর
        count={5000} // কয়টা তারা
        factor={4}   // আকার
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const StarBackground2 = () => {
  return (
    <div className="fixed bg-black inset-0 -z-10">
      <Canvas>
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default StarBackground2;