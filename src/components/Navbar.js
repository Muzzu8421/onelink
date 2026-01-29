'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background backdrop-blur-lg border border-border rounded-full shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.svg" 
              alt="OneLink Logo" 
              width={120} 
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links & Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-foreground hover:text-primary transition-colors font-medium font-[family-name:var(--font-plus-jakarta-sans)]"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-foreground hover:text-primary transition-colors font-medium font-[family-name:var(--font-plus-jakarta-sans)]"
            >
              About
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-muted transition-colors relative inline-flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <svg 
                className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              
              <svg 
                className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-primary" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            
            {/* Get Started Button */}
            <Link href="/get-started">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 font-[family-name:var(--font-plus-jakarta-sans)]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}