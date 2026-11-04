import Link from "next/link";
import React from "react";

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar Full Width (Edge-to-Edge) */}
      <header className="sticky top-0 z-20 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="flex h-14 w-full items-center justify-between px-6 sm:px-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Challenges</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Next.js Coding Assessment
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div>{children}</div>
    </div>
  );
}
