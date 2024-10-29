import React, { Suspense } from "react";
// import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export const DescriptiveCard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between snap-center lg:h-[100vh] md:h-[200vh]">

      <div className="flex flex-col lg:flex-row h-full w-full max-w-[1400px] justify-between items-center lg:items-stretch">
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-5 p-5 lg:p-10 lg:flex-1 lg:items-start md:items-center lg:justify-center">
          <h1 className="text-[48px] md:text-[64px] lg:text-[74px] text-center lg:text-left">
            Organise. Your. Life.
          </h1>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <img src="./img/line.png" alt="line" className="h-[5px]" />
            <h2 className="text-[#da4ea2] text-[20px] lg:text-[24px]">What We Do</h2>
          </div>

          <p className="text-[18px] lg:text-[24px] text-gray-400 text-center lg:text-left md:px-10 lg:px-0">
          We leverages advanced AI to automatically retrieve email attachments from Gmail and classify them into pre-defined categories based on the email content
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="mt-4 w-[120px] rounded bg-[#da4ea2] px-4 py-2 text-white font-medium">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-[50vh] lg:h-full lg:flex-1 lg:w-full flex justify-center items-center">
          <Canvas className="w-full h-full">
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial color="#3d1c56" distort={0.5} speed={2} />
              </Sphere>
            </Suspense>
          </Canvas>

          <img
            src="./img/moon.png"
            alt="Moon"
            className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[300px] h-[300px] lg:w-[500px] lg:h-[400px] object-contain animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};
