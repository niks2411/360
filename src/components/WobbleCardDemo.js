import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Complete Digital Solutions
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            We provide comprehensive digital solutions that help businesses achieve their online goals with proven strategies and cutting-edge tools.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
          width={500}
          height={500}
          alt="Digital solutions"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-800">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Expert Team
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Certified professionals with years of experience in digital marketing and technology.
        </p>
      </WobbleCard>
      
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-purple-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Proven Results & Real-time Analytics
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Track record of successful campaigns with live analytics and reporting for complete transparency.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
          width={500}
          height={500}
          alt="Analytics dashboard"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
    </div>
  );
}
