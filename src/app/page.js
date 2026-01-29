import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-background min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                All Your Links in One Place
              </h1>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your content, grow your audience, and connect with your community. 
                OneLink makes it easy to share everything you create.
              </p>

              <p className="text-base text-muted-foreground">
                Join thousands of creators, influencers, and businesses using OneLink to 
                turn their followers into customers.
              </p>

              {/* Input with Button */}
              <div className="flex gap-3 mt-8">
                <input
                  type="text"
                  placeholder="yourname"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap font-[family-name:var(--font-plus-jakarta-sans)]">
                  Get Started Free
                </button>
              </div>

              {/* Small text */}
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card required.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-100 md:h-125">
              <Image
                src="/graphic.png"
                alt="OneLink Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}