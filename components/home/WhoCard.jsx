// components/Who.js

import React, { Suspense } from "react";
import HomeAnimatedIcon from "../helper/homeAnimatedIcon";
import InstructionsModal from "../instructions/modal";

const Who = () => {
    return (
        <section className="h-screen snap-center flex justify-center items-center">
            <div className="h-screen snap-center w-full max-w-[1400px] flex justify-between">

                {/* Left Section with Canvas */}
                <HomeAnimatedIcon/>

                {/* Right Section with Text and Button */}
                <div className="flex-1 flex flex-col justify-center gap-5 p-4 md:p-20 text-center md:text-left">
                    <h1 className="text-6xl md:text-[74px] font-bold">
                        Beyond Boundries
                    </h1>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <img src="../../../images/home_logo_cropped.png" alt="line" className="h-[5px]" />
                        <h2 className="text-primary text-[20px] lg:text-[24px]">Who we Are</h2>
                    </div>
                    <p className="text-lg md:text-2xl text-gray-400">
                        Creators of AI-driven tools that automate and organize, turning Gmail attachments into neatly categorized Google Drive folders—effortlessly and securely.
                    </p>
                    <InstructionsModal></InstructionsModal>
                </div>

            </div>
        </section>
    );
};

export default Who;
