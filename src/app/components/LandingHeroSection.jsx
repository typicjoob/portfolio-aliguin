"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const LandingHeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-red-700 font-bold">
              Hello, this is{" "}
            </span>
            Joevany!
          </h1>
          <h2 className="font-semibold mb-2 text-2xl sm:text-5xl">
            <span className="text-white">He is a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "Graphic Designer",
                1000,
                "Digital Artist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-linear-to-r from-amber-500 via-orange-500 to-red-700 text-transparent bg-clip-text"
            />
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-6 lg:text-xl">
            A creative and meticulous developer who blends passion,
            authenticity, and curiosity into everything he does.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-15 lg:mt-0 pt-5 pb-5">
          <div className="rounded-tr-full  bg-linear-to-r from-amber-500 via-orange-500 to-red-700 w-[225px] h-[250px] lg:w-[450px] lg:h-[500px] relative border-4">
            <Image
              src="/images/me.png"
              alt="joevany img"
              className="absolute transform -translate-x-1/2 -translate-y-7/12 top-1/2 left-1/2"
              width={500}
              height={800}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroSection;
