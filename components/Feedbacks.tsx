'use client';

import { useEffect, useRef } from 'react';
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Micheal", text: "This is really solid! I think I do want to work long term with you. You are great at what you do." },
  { name: "Matty", text: "Great Stuff Man, I am gonna get you the next one today." },
  { name: "Camerxn Breen", text: "You're a legend man, You did a great job for brand cohesion." },
  { name: "Micheal", text: "You killed it, Bro! Solid Bro." },
  { name: "Matty", text: "Great Man, Thank you." },
  { name: "Camerxn Breen", text: "Yes, It's great thank you, Ready for the Next One?" },
  { name: "Micheal", text: "It looks good, I am really happy with that." },
  { name: "Matty", text: "Looks great, Thanks again." },
  { name: "Camerxn Breen", text: "Better thanks my friend, Really Good!" },
  { name: "Micheal", text: "Great Edit!" },
];

export default function TestimonialsScroller() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = (element: HTMLDivElement | null, speed: number) => {
      if (!element) return;

      let offset = 0;
      let frameId: number;

      const move = () => {
        offset -= speed;
        if (Math.abs(offset) >= element.scrollWidth / 2) {
          offset = 0;
        }
        element.style.transform = `translate3d(${offset}px, 0, 0)`;
        frameId = requestAnimationFrame(move);
      };

      move();

      const pause = () => cancelAnimationFrame(frameId);
      const resume = () => move();

      element.addEventListener('mouseenter', pause);
      element.addEventListener('mouseleave', resume);

      return () => {
        cancelAnimationFrame(frameId);
        element.removeEventListener('mouseenter', pause);
        element.removeEventListener('mouseleave', resume);
      };
    };

    const cleanup = animate(rowRef.current, 0.5);
    return () => {
      cleanup?.();
    };
  }, []);

  const TestimonialCard = ({ text, name }: { text: string; name: string }) => (
    <div className="min-w-[250px] max-w-sm h-[180px] bg-gradient-to-br from-black via-gray-900 to-black rounded-xl p-5 text-white shadow-lg border border-blue-600/50 shadow-blue-500/30 backdrop-blur-md flex-shrink-0 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-2 text-blue-600">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
      <p className="text-blue-400 font-semibold mt-3 text-right">– {name}</p>
    </div>
  );

  const looped = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full bg-black py-6 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none" />

      {/* Scrolling row */}
      <div className="overflow-hidden">
        <div ref={rowRef} className="flex gap-6 w-max will-change-transform">
          {looped.map((item, i) => (
            <TestimonialCard key={i} text={item.text} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
