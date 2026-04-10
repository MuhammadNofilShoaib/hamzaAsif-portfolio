"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Creator = {
  name: string;
  image: string;
  link?: string;
};

export default function CreatorsSlider({ creators }: { creators: Creator[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // 80% of visible width
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-black flex flex-col justify-center items-center gap-10 text-white text-center">
      <h2 className="text-5xl font-semibold mb-10">
        Creators I worked with:
      </h2>

      <div className="relative w-full max-w-[1200px]">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 z-10 hover:bg-gray-200 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 z-10 hover:bg-gray-200 transition"
        >
          ▶
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth px-8 py-16"
        >
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="flex-shrink-0 flex flex-col gap-4 items-center justify-center w-[260px]"
            >
              {creator.link ? (
                <Link href={creator.link} target="_blank">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={260}
                    height={260}
                    className="object-cover rounded-full border border-white hover:shadow-[0px_0px_60px_#ffffff] duration-200 ease-in-out"
                  />
                </Link>
              ) : (
                <Image
                  src={creator.image}
                  alt={creator.name}
                  width={260}
                  height={260}
                  className="object-cover rounded-full border border-white"
                />
              )}
              <p className="text-lg font-medium">{creator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}