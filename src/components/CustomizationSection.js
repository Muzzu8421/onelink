export default function CustomizationSection() {
  return (
    <section className="w-full bg-[#2665d6] py-16 sm:py-20 md:py-24">
      <div className="w-[95%] max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Video */}
          <div className="relative w-full h-75 sm:h-100 md:h-125 rounded-2xl overflow-hidden order-2 md:order-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/customize.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 flex flex-col items-center sm:items-start sm:space-y-6 order-1 md:order-2">

            {/* Heading */}
            <h2 className="text-3xl text-center sm:text-left sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lime-500 font-(family-name:--font-plus-jakarta-sans) leading-tight">
              Create & Customize Your Link Tree
            </h2>
            
            {/* Description */}
            <p className="text-base text-center sm:text-left sm:text-lg text-white/90 leading-relaxed">
              Design your perfect link page with our intuitive customization tools. Choose from stunning themes, customize colors, fonts, and layouts to match your brand identity.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-lime-500 text-lg cursor-pointer sm:text-lg text-[#030712] hover:bg-lime-600 font-semibold py-5 px-16 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 font-(family-name:--font-plus-jakarta-sans)">
                Start Customizing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}