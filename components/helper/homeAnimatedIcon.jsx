// components/RightSection.js

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "@react-three/drei"; // Import Sphere component if not imported
import { MeshDistortMaterial } from "@react-three/drei"; // Import MeshDistortMaterial if not imported

const HomeAnimatedIcon = () => {
    return (
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
                src="../../../images/home_logo_cropped.png"
                alt="Moon"
                className="absolute top-0 bottom-0 left-0 right-0 m-auto 
                 w-[150px] h-[150px] 
                 sm:w-[200px] sm:h-[200px] 
                 md:w-[250px] md:h-[250px] 
                 lg:w-[300px] lg:h-[300px] 
                 xl:w-[500px] xl:h-[400px] 
                 object-contain animate-slow-bounce"
            />
        </div>
    );
};

export default HomeAnimatedIcon;
