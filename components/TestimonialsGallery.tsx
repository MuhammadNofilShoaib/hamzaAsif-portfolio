
"use client";

import { useCallback, useEffect, useState } from "react";

const screenshots = Array.from({ length: 14 }, (_, index) => ({
  src: `/t${index + 1}.png`,
  alt: `Content performance screenshot ${index + 1}`,
}));

export default function TestimonialsGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + screenshots.length) % screenshots.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % screenshots.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeModal, showPrevious, showNext]);

  return (
    <section
      id="content-results"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
            Content Performance
          </span>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            The Numbers Behind
            <br />
            <span className="text-blue-600">the Content.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Real videos. Real reach. A closer look at the content
            making an impact.
          </p>
        </header>

        {/* Screenshot gallery */}
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
          {screenshots.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View screenshot ${index + 1} of ${screenshots.length}`}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-left sm:mb-4 lg:mb-5"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition duration-300 group-hover:scale-[1.02] group-hover:opacity-80"
              />

              {/* Hover indicator */}
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-lg text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                ↗
              </span>
            </button>
          ))}
        </div>

        <p className="mt-8 text-center text-xs tracking-wide text-neutral-500">
          A selection of content performance snapshots
        </p>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Content screenshot viewer"
          className="fixed inset-0 z-[9999] flex items-center justify-center gap-2 bg-black/95 px-3 pb-6 pt-16 backdrop-blur-md sm:gap-5 sm:px-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close image viewer"
            autoFocus
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-lime-400 hover:text-black sm:right-6 sm:top-6"
          >
            &times;
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:bg-lime-400 hover:text-black sm:h-12 sm:w-12 sm:text-2xl"
          >
            &#8592;
          </button>

          {/* Full image */}
          <div className="flex max-h-full min-w-0 max-w-[calc(100vw-100px)] flex-col items-center gap-4 sm:max-w-[calc(100vw-180px)]">
            <img
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              className="block h-auto max-h-[calc(100dvh-140px)] w-auto max-w-full rounded-lg object-contain"
            />

            <span className="shrink-0 text-xs tracking-widest text-neutral-400">
              {activeIndex + 1} / {screenshots.length}
            </span>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition hover:bg-lime-400 hover:text-black sm:h-12 sm:w-12 sm:text-2xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
