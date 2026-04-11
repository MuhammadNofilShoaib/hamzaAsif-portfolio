// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// type VideoTestimonial = {
//   id: number;
//   name: string;
//   videoId: string;      // Google Drive FILE ID only (from share link)
//   thumbnail: string;    // Nice thumbnail / screenshot of the video
//   quote?: string;
// };

// const videoTestimonials: VideoTestimonial[] = [
//   {
//     id: 1,
//     name: "Hannah Scott",
//     videoId: "1cOgv0oiqoeo5JVc7iwsVYLf-7O-BnFPv",   // ← Replace with real Drive file ID
//     thumbnail: "/thumbnails/hannah-video-thumb.jpg",
//     quote: "No rush but thank you ✨ you’re amazing!",
//   },
//   {
//     id: 2,
//     name: "Client Name",
//     videoId: "YOUR_DRIVE_FILE_ID_HERE_2",
//     thumbnail: "/thumbnails/long-testimonial-thumb.jpg",
//     quote: "Working with Hamza was such a great experience...",
//   },
//   // Add more video testimonials here...
// ];

// export default function VideoTestimonials() {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

//   // Infinite smooth scrolling (same as your image testimonials)
//   useEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     let offset = 0;
//     let animationFrame: number;
//     const speed = 0.65;

//     const animate = () => {
//       offset -= speed;
//       if (Math.abs(offset) >= scroller.scrollWidth / 2) offset = 0;
//       scroller.style.transform = `translate3d(${offset}px, 0, 0)`;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();

//     const pause = () => cancelAnimationFrame(animationFrame);
//     const resume = () => animate();

//     scroller.addEventListener('mouseenter', pause);
//     scroller.addEventListener('mouseleave', resume);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       scroller.removeEventListener('mouseenter', pause);
//       scroller.removeEventListener('mouseleave', resume);
//     };
//   }, []);

//   const duplicated = [...videoTestimonials, ...videoTestimonials];

//   return (
//     <>
//       <div className="relative w-full bg-zinc-950 py-20 overflow-hidden">
//         {/* Heading */}
//         <div className="max-w-6xl mx-auto px-6 text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
//             Video Testimonials
//           </h2>
//           <p className="text-zinc-400 text-lg">
//             Real clients. Real words. Real results.
//           </p>
//         </div>

//         {/* Fade edges */}
//         <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

//         {/* Scrolling Container */}
//         <div className="overflow-hidden">
//           <div
//             ref={scrollerRef}
//             className="flex gap-8 w-max will-change-transform"
//           >
//             {duplicated.map((video, index) => (
//               <div
//                 key={`${video.id}-${index}`}
//                 onClick={() => setSelectedVideo(video)}
//                 className="group relative w-[380px] md:w-[420px] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/70 flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-3xl active:scale-95"
//               >
//                 {/* Thumbnail */}
//                 <div className="relative w-full aspect-video bg-black rounded-t-3xl overflow-hidden">
//                   <Image
//                     src={video.thumbnail}
//                     alt={`Video testimonial from ${video.name}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     sizes="(max-width: 768px) 100vw, 420px"
//                   />

//                   {/* Dark overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

//                   {/* Big Play Button */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-8 h-8 text-zinc-950 ml-0.5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 4.01V8"
//                         />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Shine effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//                 </div>

//                 {/* Bottom Info */}
//                 <div className="p-6 bg-zinc-900">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-white font-semibold text-xl tracking-tight">– {video.name}</p>
//                       {video.quote && (
//                         <p className="text-emerald-400 text-sm mt-1 line-clamp-2">“{video.quote}”</p>
//                       )}
//                     </div>
//                     <div className="text-amber-400 text-2xl opacity-80">★★★★☆</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center mt-10 text-zinc-500 text-sm tracking-wide">
//           Click any card to watch the full video • Hover to pause scroll
//         </div>
//       </div>

//       {/* VIDEO MODAL */}
//       {selectedVideo && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
//           onClick={() => setSelectedVideo(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopImmediatePropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedVideo(null)}
//               className="absolute top-6 right-6 z-50 text-white bg-black/60 hover:bg-black/80 transition-colors w-10 h-10 rounded-2xl flex items-center justify-center text-2xl leading-none"
//             >
//               ×
//             </button>

//             {/* Embedded Google Drive Video */}
//             <div className="aspect-video w-full bg-black">
//               <iframe
//                 src={`https://drive.google.com/file/d/${selectedVideo.videoId}/preview`}
//                 width="100%"
//                 height="100%"
//                 allow="autoplay"
//                 className="w-full h-full"
//                 allowFullScreen
//               />
//             </div>

//             {/* Modal Info */}
//             <div className="p-8">
//               <p className="text-white font-semibold text-2xl">– {selectedVideo.name}</p>
//               {selectedVideo.quote && (
//                 <p className="text-zinc-400 mt-3 text-lg">“{selectedVideo.quote}”</p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';

type VideoTestimonial = {
  id: number;
  name: string;
  embedLink: string;     // Full Google Drive embed link
  quote?: string;
};

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Julie",
    embedLink: "https://drive.google.com/file/d/1cOgv0oiqoeo5JVc7iwsVYLf-7O-BnFPv/preview",
    quote: "No rush but thank you ✨ you’re amazing!",
  },
  {
    id: 2,
    name: "Abbott",
    embedLink: "https://drive.google.com/file/d/12Yxh0Xby7u7UV_TtA0FrIW-Hv6p1hmqD/preview",
    quote: "Working with Hamza was such a great experience...",
  },
  {
    id: 3,
    name: "Tomas",
    embedLink: "https://drive.google.com/file/d/1F1UgeBbHOu6iFoWgXY92SBLqFad-OyE9/preview",
    quote: "Working with Hamza was such a great experience...",
  },
  {
    id: 4,
    name: "Philipp",
    embedLink: "https://drive.google.com/file/d/1t1uV4OJr_T8CZjChWUQvMRjV2W3Qe103/preview",
    quote: "Working with Hamza was such a great experience...",
  },
  {
    id: 5,
    name: "Phillip",
    embedLink: "https://drive.google.com/file/d/1zQ2a3B0bAARa7TXqCArzpCcpViZesCm5/preview",
    quote: "Working with Hamza was such a great experience...",
  },
  
  
  // Add more videos here...
];

export default function VideoTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  // Smooth infinite scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let offset = 0;
    let animationFrame: number;
    const speed = 0.65;

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

  const duplicated = [...videoTestimonials, ...videoTestimonials];

  return (
    <>
      <div className="relative w-full bg-zinc-950 py-20 overflow-hidden">
        {/* Simple Heading */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
            Video Testimonials
          </h2>
          <p className="text-zinc-400 text-lg">Hear directly from my clients</p>
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
            {duplicated.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                onClick={() => setSelectedVideo(video)}
                className="group relative w-[380px] md:w-[420px] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800/70 flex-shrink-0 cursor-pointer hover:scale-[1.03] transition-all duration-300"
              >
                {/* Video Preview (Drive Embed) */}
                <div className="relative aspect-[1.5/2] bg-black rounded-t-3xl overflow-hidden">
                  <iframe
                    src={video.embedLink}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <span className="text-4xl text-black ml-1">▶</span>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="p-6 bg-zinc-900">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold text-xl">– {video.name}</p>
                      {video.quote && (
                        <p className="text-emerald-400 text-sm mt-1 line-clamp-2">“{video.quote}”</p>
                      )}
                    </div>
                    <div className="text-amber-400 text-2xl">★★★★☆</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 text-zinc-500 text-sm">
          Click any card to watch • Hover to pause
        </div>
      </div>

      {/* Simple Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 text-3xl text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-2xl flex items-center justify-center"
            >
              ✕
            </button>

            <div className="aspect-video">
              <iframe
                src={selectedVideo.embedLink}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>

            <div className="p-8">
              <p className="text-2xl font-semibold text-white">– {selectedVideo.name}</p>
              {selectedVideo.quote && (
                <p className="text-zinc-400 mt-4 text-lg">“{selectedVideo.quote}”</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}