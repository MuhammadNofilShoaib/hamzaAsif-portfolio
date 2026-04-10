// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// type Creator = {
//   name: string;
//   image: string;
//   link?: string;
// };

// export default function CreatorsSlider({ creators }: { creators: Creator[] }) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth * 0.8; // 80% of visible width
//       scrollRef.current.scrollTo({
//         left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="py-16 px-4 bg-black flex flex-col justify-center items-center gap-10 text-white text-center">
//       <h2 className="text-5xl font-semibold mb-10">
//         Creators I worked with:
//       </h2>

//       <div className="relative w-full max-w-[1200px]">
//         {/* Scroll buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 z-10 hover:bg-gray-200 transition"
//         >
//           ◀
//         </button>
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 z-10 hover:bg-gray-200 transition"
//         >
//           ▶
//         </button>

//         {/* Scroll container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth px-8 py-16"
//         >
//           {creators.map((creator) => (
//             <div
//               key={creator.name}
//               className="flex-shrink-0 flex flex-col gap-4 items-center justify-center w-[260px]"
//             >
//               {creator.link ? (
//                 <Link href={creator.link} target="_blank">
//                   <Image
//                     src={creator.image}
//                     alt={creator.name}
//                     width={260}
//                     height={260}
//                     className="object-cover rounded-full border border-white hover:shadow-[0px_0px_60px_#ffffff] duration-200 ease-in-out"
//                   />
//                 </Link>
//               ) : (
//                 <Image
//                   src={creator.image}
//                   alt={creator.name}
//                   width={260}
//                   height={260}
//                   className="object-cover rounded-full border border-white"
//                 />
//               )}
//               <p className="text-lg font-medium">{creator.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState, useCallback } from "react";

type Creator = {
  name: string;
  image: string;
  link?: string;
};

export default function CreatorsSlider({ creators }: { creators: Creator[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const scrollSpeed = 0.1; // pixels per millisecond (adjust this for speed)

  // Auto scroll with constant speed using requestAnimationFrame
  const autoScroll = useCallback(() => {
    if (!scrollRef.current || isHovered) return;

    const now = Date.now();
    const deltaTime = now - lastTimeRef.current;
    lastTimeRef.current = now;

    const scrollContainer = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

    // Calculate movement with constant speed
    const moveDistance = scrollSpeed * deltaTime;

    let newScrollLeft = scrollLeft + moveDistance;

    // Infinite loop (seamless)
    if (newScrollLeft >= scrollWidth - clientWidth) {
      newScrollLeft = newScrollLeft - (scrollWidth - clientWidth * 2); // adjust for better loop
    }

    scrollContainer.scrollLeft = newScrollLeft;

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isHovered, scrollSpeed]);

  // Start/stop animation
  useEffect(() => {
    lastTimeRef.current = Date.now();

    if (!isHovered) {
      animationRef.current = requestAnimationFrame(autoScroll);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, autoScroll]);

  // Manual scroll buttons (kept smooth for better UX)
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 300; // pixels per click
    const currentScroll = scrollRef.current.scrollLeft;

    const targetScroll = direction === "left" 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;

    scrollRef.current.scrollTo({
      left: Math.max(0, Math.min(targetScroll, scrollRef.current.scrollWidth - scrollRef.current.clientWidth)),
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="py-16 px-4 bg-black flex flex-col justify-center items-center gap-10 text-white text-center">
      <h2 className="text-5xl font-semibold mb-10">
        Creators I worked with:
      </h2>

      <div 
        className="relative w-full max-w-[1200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-3 z-20 hover:bg-gray-200 transition-all shadow-lg"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-3 z-20 hover:bg-gray-200 transition-all shadow-lg"
        >
          ▶
        </button>

        {/* Scroll container - IMPORTANT: removed scroll-smooth for constant speed */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-8 py-16"
          style={{ scrollBehavior: "auto" }}  
        >
          {creators.map((creator, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col gap-4 items-center justify-center w-[260px]"
            >
              {creator.link ? (
                <Link href={creator.link} target="_blank" rel="noopener noreferrer">
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

          {/* Duplicate items for seamless infinite scroll */}
          {creators.map((creator, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 flex flex-col gap-4 items-center justify-center w-[260px]"
            >
              {creator.link ? (
                <Link href={creator.link} target="_blank" rel="noopener noreferrer">
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