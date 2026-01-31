"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function ShareSection() {
  const { RiveComponent } = useRive({
    src: "/share.riv",
    stateMachines: "State Machine",
    artboard: "Homepage_image 3",
    autoplay: true,
    automaticallyHandleEvents: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <section className="w-full bg-[#780016] py-16 sm:py-20 md:py-24">
      <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right Column - Content */}
          <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-6">
            {/* Heading */}
            <h2 className="text-4xl sm:text-4xl text-center sm:text-left md:text-5xl lg:text-6xl font-bold text-[#d9a6d9] font-(family-name:--font-plus-jakarta-sans) leading-tight">
              Share Your Linktree Anywhere You Like!
            </h2>

            {/* Description */}
            <p className="text-lg text-white sm:text-lg text-center sm:text-left leading-relaxed">
              One link for everything. Share your Linktree URL across all your
              social media platforms, email signatures, business cards, and
              anywhere else you connect with your audience.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#d9a6d9] text-lg cursor-pointer sm:text-lg text-[#030712] hover:bg-[#d99dd9] font-semibold py-5 px-16 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 font-(family-name:--font-plus-jakarta-sans)">
                Start Sharing
              </button>
            </div>
          </div>

          {/* Left Column - Rive Animation */}
          <div className="relative w-full h-75 sm:h-100 md:h-125">
            <RiveComponent className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
