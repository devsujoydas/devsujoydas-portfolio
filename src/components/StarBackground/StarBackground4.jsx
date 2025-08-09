import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarBackground4   = () => {
  return (
    <div className="absolute inset-0 bg-black -z-10">
      <Canvas>
        <Stars
          radius={100} // তারাগুলোর দূরত্ব
          depth={50}   // গভীরতা
          count={5000} // তারা কয়টা হবে
          factor={1}   // তারার আকার
          saturation={0}
          fade
          speed={10}    // ঘোরার স্পিড
        />
      </Canvas>
    </div>
  );
};

export default StarBackground4;
