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
    <section className="w-full bg-bg py-16 sm:py-20 md:py-24">
      <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Rive Animation */}
          <div className="relative w-full h-75 sm:h-100 md:h-125">
            <RiveComponent className="w-full h-full" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share Everywhere</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-(family-name:--font-plus-jakarta-sans) leading-tight">
              Share Your Linktree Anywhere You Like!
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              One link for everything. Share your Linktree URL across all your
              social media platforms, email signatures, business cards, and
              anywhere else you connect with your audience.
            </p>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base">
                  <strong className="text-foreground">Instagram Bio</strong> -
                  Perfect for your IG profile
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base">
                  <strong className="text-foreground">TikTok & YouTube</strong>{" "}
                  - Share across all platforms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-foreground/80 text-sm sm:text-base">
                  <strong className="text-foreground">QR Codes</strong> -
                  Generate and print for offline sharing
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-btn-background hover:bg-btn-background/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 font-(family-name:--font-plus-jakarta-sans)">
                Start Sharing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
