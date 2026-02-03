"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function GeneratePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    handle: searchParams.get("handle") || "",
    links: [{ url: "", title: "" }],
    profileImage: null,
    desc: "",
  });

  const addLink = () => {
    setFormData({
      ...formData,
      links: [...formData.links, { url: "", title: "" }],
    });
  };

  const removeLink = (index) => {
    const newLinks = formData.links.filter((_, i) => i !== index);
    setFormData({ ...formData, links: newLinks });
  };

  const updateLink = (index, field, value) => {
    const newLinks = [...formData.links];
    newLinks[index][field] = value;
    setFormData({ ...formData, links: newLinks });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      let profileImageUrl = null;

      if (formData.profileImage) {
        const reader = new FileReader();
        profileImageUrl = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(formData.profileImage);
        });
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        handle: formData.handle,
        links: formData.links,
        profileImage: profileImageUrl,
        desc: formData.desc || "",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("/api/create", requestOptions);
      const result = await response.json();

      if (result.Success) {
        router.push(`/${formData.handle}`);
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create OneLink. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#780016] min-h-screen pt-45 sm:pt-30 pb-8 sm:pb-0">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="bg-card border border-foreground/10 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg order-2 lg:order-1">
            {/* Error Message */}
            {error && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-500 text-xs sm:text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Steps Indicator */}
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition-colors ${
                      currentStep >= step
                        ? "bg-[#780016] text-primary-foreground"
                        : "bg-foreground/10 text-foreground/50"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-1 sm:mx-2 rounded transition-colors ${
                        currentStep > step ? "bg-[#780016]" : "bg-foreground/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Claim Handle */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Claim Your Handle
                  </h2>
                  <p className="text-foreground/70 text-xs sm:text-sm">
                    Choose a unique username for your OneLink
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Your Handle
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-foreground/50 font-medium text-xs sm:text-sm">
                      onelink.to/
                    </span>
                    <input
                      type="text"
                      value={formData.handle}
                      onChange={(e) =>
                        setFormData({ ...formData, handle: e.target.value })
                      }
                      placeholder="yourname"
                      className="w-full pl-24 sm:pl-28 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-foreground/30 bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    This will be your unique URL
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  disabled={!formData.handle}
                  className="w-full cursor-pointer bg-gray-950 hover:bg-gray-950/90 disabled:bg-foreground/20 disabled:cursor-not-allowed text-primary-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Write a short Desc */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Write a Short Description
                  </h2>
                  <p className="text-foreground/70 text-xs sm:text-sm">
                    Tell people what your OneLink is about
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({ ...formData, desc: e.target.value })
                    }
                    placeholder="A short description of your OneLink"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-foreground/30 bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.desc}
                    className="flex-1 cursor-pointer bg-gray-950 hover:bg-gray-950/90 disabled:bg-foreground/20 disabled:cursor-not-allowed text-primary-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Add Links */}
            {currentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Add Your Links
                  </h2>
                  <p className="text-foreground/70 text-xs sm:text-sm">
                    Add links to your social media, website, or products
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 max-h-95 sm:max-h-65 overflow-y-auto pr-1 sm:pr-2">
                  {formData.links.map((link, index) => (
                    <div
                      key={index}
                      className="bg-background border border-foreground/10 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          Link {index + 1}
                        </span>
                        {formData.links.length > 1 && (
                          <button
                            onClick={() => removeLink(index)}
                            className="text-red-500 hover:text-red-600 text-xs sm:text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={link.title}
                        onChange={(e) =>
                          updateLink(index, "title", e.target.value)
                        }
                        placeholder="Link Title (e.g., Instagram)"
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg border border-foreground/30 bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                      <input
                        type="url"
                        value={link.url}
                        onChange={(e) =>
                          updateLink(index, "url", e.target.value)
                        }
                        placeholder="https://..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg border border-foreground/30 bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={addLink}
                  className="w-full cursor-pointer border-2 border-dashed border-foreground/30 hover:border-primary text-foreground hover:text-primary font-medium py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200"
                >
                  + Add Another Link
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={prevStep}
                    className="flex-1 cursor-pointer bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={formData.links.some((l) => !l.title || !l.url)}
                    className="flex-1 cursor-pointer bg-gray-950 hover:bg-gray-950/90 disabled:bg-foreground/20 disabled:cursor-not-allowed text-primary-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Profile Image */}
            {currentStep === 4 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Add Profile Image
                  </h2>
                  <p className="text-foreground/70 text-xs sm:text-sm">
                    Upload a profile picture for your OneLink
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                  {/* Image Preview */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-foreground/10 border-2 border-dashed border-foreground/30 flex items-center justify-center overflow-hidden">
                    {formData.profileImage ? (
                      <img
                        src={URL.createObjectURL(formData.profileImage)}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 text-foreground/50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Upload Button */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200 text-center">
                      {formData.profileImage ? "Change Image" : "Upload Image"}
                    </div>
                  </label>

                  <p className="text-xs text-foreground/60 text-center">
                    Recommended: Square image, at least 400x400px
                  </p>
                </div>

                <div className="flex gap-3 pt-2 sm:pt-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-950 hover:bg-gray-950/90 disabled:bg-foreground/20 disabled:cursor-not-allowed text-primary-foreground font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    {isSubmitting ? "Creating..." : "Create My OneLink"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full hidden sm:block h-64 sm:h-80 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden lg:sticky lg:top-24 order-1 lg:order-2">
            <Image
              src="/gen.avif"
              alt="Generate your OneLink"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}