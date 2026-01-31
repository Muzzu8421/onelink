import Image from "next/image";
import CustomizationSection from "@/components/CustomizationSection";
import ShareSection from "@/components/ShareSection";

export default function Home() {
  return (
    <>
      <main className="bg-lime-500 min-h-screen pt-29 sm:pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-2 sm:space-y-2">
              {/* Heading */}
              <h1 className="text-4xl text-center sm:text-left sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#030712] font-(family-name:--font-plus-jakarta-sans) leading-tight">
                One Link. Endless Possibilities.
              </h1>

              {/* Description */}
              <p className="text-lg text-center sm:text-left px-3 sm:px-0 sm:text-lg text-[#030712]/80 leading-relaxed">
                Connect your audience to everything you do — your content,
                products, social media, and more. All in one beautiful,
                customizable page.
              </p>

              {/* Input with Button */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <input
                  type="text"
                  placeholder="yourname"
                  className="w-full sm:flex-1 px-4 py-3 rounded-full border border-[#030712]/30 bg-[#F5F7F2] text-[#030712] placeholder:text-[#030712]/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
                <button className="bg-[#030712] hover:bg-[#030712]/90 cursor-pointer text-[#F5F7F2] font-semibold py-3 sm:px-6 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap font-(family-name:--font-plus-jakarta-sans)">
                  Get Started Free
                </button>
              </div>

              {/* Small text */}
              <span className="text-xs flex gap-2 sm:text-sm text-[#030712]/60">
                <p>
                  <span className="font-bold text-[#030712]">✓</span> Free
                  forever
                </p>
                <p>
                  <span className="font-bold text-[#030712]">✓</span> No credit
                  card required
                </p>
              </span>
            </div>

            {/* Right Column - Image */}
            <div className="relative mt-6 w-full h-85 sm:h-100 md:h-125 lg:h-150 overflow-hidden flex items-center justify-center">
              <Image
                src="/test2.gif"
                alt="3D smartphone mockup showing OneLink interface"
                fill
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      {/* Customize Section Goes Here */}
      <CustomizationSection />

      {/* Share Section Goes Here */}
      <ShareSection />
    </>
  );
}
