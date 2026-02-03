"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Don't render Navbar on specific pages
  const showNavbar = ["/generate", "/"].includes(pathname);

  return (
    <>
      {showNavbar && (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
          <div className="bg-background backdrop-blur-lg border border-border rounded-full shadow-lg px-4 sm:px-6 py-3 sm:py-4 relative">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {/* Show favicon on mobile, full logo on desktop */}
                <Image
                  src="/favicon.ico"
                  alt="OneLink Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 sm:hidden"
                  priority
                />
                <Image
                  src="/logo.svg"
                  alt="OneLink Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto hidden sm:block"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-gray-950 hover:text-gray-950/80 transition-colors font-medium font-(family-name:--font-plus-jakarta-sans)"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-950 hover:text-gray-950/80 transition-colors font-medium font-(family-name:--font-plus-jakarta-sans)"
                >
                  About
                </Link>

                {/* Get Started Button */}
                <Link href="/generate">
                  <button className="bg-[#030712] hover:bg-[#030712]/90 cursor-pointer text-[#F5F7F2] font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 font-(family-name:--font-plus-jakarta-sans)">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Mobile Menu - Right Side Items */}
              <div className="flex md:hidden items-center gap-2">
                {/* Hamburger Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 cursor-pointer rounded-lg transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6 text-gray-950" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-950" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown - Positioned absolutely to not affect navbar shape */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background backdrop-blur-lg border border-border rounded-2xl shadow-lg p-4 z-50">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-gray-950 hover:text-[#030712]/80 transition-colors font-medium font-(family-name:--font-plus-jakarta-sans) px-2 py-2 rounded-lg hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-950 hover:text-[#030712]/80 transition-colors font-medium font-(family-name:--font-plus-jakarta-sans) px-2 py-2 rounded-lg hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/generate"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="w-full bg-[#030712] hover:bg-[#030712]/90 cursor-pointer text-primary-[#030712] font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 font-(family-name:--font-plus-jakarta-sans)">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
