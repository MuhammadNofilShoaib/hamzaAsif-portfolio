'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const names = [
  "Jessica",
  "Lochlyn",
  "Vanja",
  "Philipp",
  "jake",
  "Ola",
  "Philipp",
  "Abbott",
  "Phillip",
  "Julie",
  "Philipp",
  "Abbott",
  "Natassia",
  "Jessica",
  "Jessica",
  "Philipp",
  "Micheal",
  "Micheal",
  "Micheal",
  "Micheal",
  "Micheal",
  "Micheal",
  "Micheal",
  "Matty",
  "Micheal",
  "Micheal",
  "Micheal",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
  "Cameron",
];


const totalImages = 37; // 👈 change this to your total screenshots

const testimonials = Array.from({ length: totalImages }, (_, i) => ({
  id: i + 1,
  name: names[i] || "Client", // fallback if name missing
  image: `/${i + 1}.jpg`,
}));

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Client",
//     image: "/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Client",
//     image: "/2.jpg"
//   },
//   // Add all your other testimonial screenshots here...
// ];

export default function TestimonialsScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let offset = 0;
    let animationFrame: number;
    const speed = 0.65;   // Smooth & elegant speed

    const animate = () => {
      offset -= speed;
      if (Math.abs(offset) >= scroller.scrollWidth / 2) {
        offset = 0;
      }
      scroller.style.transform = `translate3d(${offset}px, 0, 0)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const pause = () => cancelAnimationFrame(animationFrame);
    const resume = () => animate();

    scroller.addEventListener('mouseenter', pause);
    scroller.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animationFrame);
      scroller.removeEventListener('mouseenter', pause);
      scroller.removeEventListener('mouseleave', resume);
    };
  }, []);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full bg-zinc-950 py-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
          Real Results, Real Clients
        </h2>
        <p className="text-zinc-400 text-lg">
          What clients actually say about working with me
        </p>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

      {/* Scrolling Row */}
      <div className="overflow-hidden">
        <div
          ref={scrollerRef}
          className="flex gap-8 w-max will-change-transform"
        >
          {duplicated.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[380px] md:w-[420px] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/70 flex-shrink-0"
            >
              {/* WhatsApp Screenshot - Fully visible, no cropping */}
              {/* WhatsApp Screenshot */}
              <div className="relative w-full h-[420px] md:h-[500px] lg:h-[520px] bg-black flex items-center justify-center overflow-hidden rounded-t-3xl">
                
                
                <Image
                  src={item.image}
                  alt={`Testimonial from ${item.name}`}
                  width={800}
                  height={1400}
                  className="max-h-full w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={index < 4}
                />
                

                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5" />
              </div>

              {/* Bottom Info */}
              <div className="p-6 bg-zinc-900 border-t border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-xl">– {item.name}</p>
                    {/* {item.quote && (
                      <p className="text-emerald-400 text-sm mt-1 line-clamp-2">“{item.quote}”</p>
                    )} */}
                  </div>
                  <div className="text-amber-400 text-2xl opacity-80">★★★★☆</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 text-zinc-500 text-sm">
        Hover any card to pause • Real client messages
      </div>
    </div>
  );
}