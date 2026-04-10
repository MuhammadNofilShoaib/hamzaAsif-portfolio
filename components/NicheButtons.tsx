"use client";

import Link from "next/link";
import { niches } from "@/data/niches";

export default function NicheButtons() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-zinc-900 dark:text-white mb-4">
          Explore My Portfolio
        </h2>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          Discover my work across different industries and creative niches
        </p>
      </div>

      {/* Niche Buttons */}
      <div className="flex flex-wrap gap-5 justify-center">
        {niches.map((niche, index) => (
          <Link
            key={niche.slug}
            href={`/niche/${niche.slug}`}
            className="group relative px-9 py-5 text-lg font-medium
                       bg-white dark:bg-zinc-950 
                       border border-zinc-100 dark:border-zinc-800
                       rounded-3xl overflow-hidden
                       shadow-lg hover:shadow-2xl
                       transition-all duration-400 ease-out
                       hover:-translate-y-2 hover:scale-[1.05]
                       active:scale-95
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-blue-500"
            style={{
              animationDelay: `${index * 40}ms`,
            }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            {/* Moving shine effect */}
            <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent 
                            group-hover:via-blue-600 dark:group-hover:via-blue-800
                            translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

            <span className="relative z-10 text-zinc-900 dark:text-white tracking-tight">
              {niche.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}