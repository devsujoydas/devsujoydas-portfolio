
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const CursorControlledStars = () => {
  const starsRef = useRef();
  const { size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  // মাউস মুভ ইভেন্ট
  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / size.width) * 2 - 1;  // -1 থেকে 1
    mouse.current.y = -(event.clientY / size.height) * 2 + 1; // -1 থেকে 1
  };

  // প্রতি ফ্রেমে তারাগুলো ঘোরানো
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y = mouse.current.x * 0.5; // মাউস X
      starsRef.current.rotation.x = mouse.current.y * 0.5; // মাউস Y
    }
  });

  return (
    <group ref={starsRef} onPointerMove={handleMouseMove}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const StarBackground3 = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas onPointerMove={(e) => e.stopPropagation()}>
        <CursorControlledStars />
      </Canvas>
    </div>
  );
};

export default StarBackground3;



