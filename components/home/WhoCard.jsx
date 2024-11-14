// components/Who.js

import React, { Suspense } from "react";
import HomeAnimatedIcon from "../helper/homeAnimatedIcon";
import InstructionsModal from "../instructions/modal";

const Who = () => {
    return (
        <section className="h-screen snap-center flex justify-center items-center">
            <div className="flex flex-col lg:flex-row md:h-full w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-between items-center lg:items-stretch">

                {/* Left Section with Canvas */}
                <div className="hidden md:block"><HomeAnimatedIcon /></div>

                {/* Right Section with Text and Button */}
                <div className="flex flex-col justify-center gap-5 p-5 lg:p-10 lg:flex-1 lg:items-start md:items-center lg:justify-center">
                    <h1 className="text-[48px] md:text-[64px] lg:text-[74px] text-center lg:text-right">
                        Beyond Boundries
                    </h1>
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <img src="../../../images/home_logo_cropped.png" alt="line" className="h-[5px]" />
                        <h2 className="text-primary text-[20px] lg:text-[24px]">Who we Are</h2>
                    </div>
                    <p className="text-[18px] lg:text-[24px] text-gray-400 text-center lg:text-left md:px-10 lg:px-0">
                        Creators of AI-driven tools that automate and organize, turning Gmail attachments into neatly categorized Google Drive folders—effortlessly and securely.
                    </p>
                    <div className="flex items-center justify-center">
                        <InstructionsModal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Who;
