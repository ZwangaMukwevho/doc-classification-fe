import React, { Suspense } from "react";
import HomeAnimatedIcon from "../helper/homeAnimatedIcon";
import Link from "next/link";

export const DescriptiveCard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between snap-center lg:h-[100vh] md:h-[200vh]">

     <div className="flex flex-col lg:flex-row h-full w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 justify-between items-center lg:items-stretch">
        {/* Left Section */}
        <div className="flex flex-col justify-center gap-5 p-5 lg:p-10 lg:flex-1 lg:items-start md:items-center lg:justify-center">
          <h1 className="text-[48px] md:text-[64px] lg:text-[74px] text-center lg:text-left">
            Email. Sort. Save.
          </h1>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <img src="../../../images/home_logo_cropped.png" alt="line" className="h-[5px]" />
            <h2 className="text-primary text-[20px] lg:text-[24px]">What We Do</h2>
          </div>

          <p className="text-[18px] lg:text-[24px] text-gray-400 text-center lg:text-left md:px-10 lg:px-0">
            We leverages advanced AI to automatically retrieve email attachments from Gmail and classify them into pre-defined categories based on the email content
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="/categories/0/null">
            <button className="mt-4 w-[120px] rounded bg-primary px-4 py-2 text-white font-medium">
              Get Started
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <HomeAnimatedIcon />
      </div>
    </div>
  );
};
