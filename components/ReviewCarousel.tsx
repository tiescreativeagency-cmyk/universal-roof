"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  GOOGLE_BUSINESS_RATING,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_URL,
  GOOGLE_REVIEW_COUNT,
  REVIEWS_PER_SLIDE,
  type GoogleReview,
} from "@/lib/google-reviews";

const AUTO_PLAY_MS = 6000;

function chunkReviews(reviews: GoogleReview[], size: number) {
  const slides: GoogleReview[][] = [];
  for (let i = 0; i < reviews.length; i += size) {
    slides.push(reviews.slice(i, i + size));
  }
  return slides;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-sm text-cyan-400"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-glow-sm" : "text-white/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  compact,
}: {
  review: GoogleReview;
  compact?: boolean;
}) {
  return (
    <article
      className={`review-card flex h-full flex-col text-left ${compact ? "review-card-compact" : ""}`}
    >
      <StarRating rating={review.rating} />
      <p
        className={`type-body flex-1 text-sm text-white/75 ${
          compact
            ? "mt-2 min-h-[8.25rem] leading-snug sm:min-h-[8.75rem]"
            : "mt-3 leading-relaxed"
        }`}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div
        className={`border-t border-cyan-400/15 ${
          compact ? "mt-2 pt-2" : "mt-4 pt-3"
        }`}
      >
        <p className="type-nav text-xs text-white/85">{review.author}</p>
        <p className="type-body mt-0.5 text-xs text-white/40">{review.date}</p>
      </div>
    </article>
  );
}

type ReviewCarouselProps = {
  compact?: boolean;
};

export default function ReviewCarousel({ compact = false }: ReviewCarouselProps) {
  const slides = useMemo(
    () => chunkReviews(GOOGLE_REVIEWS, REVIEWS_PER_SLIDE),
    []
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveSlide((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const goNext = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, slides.length]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        className={`flex flex-wrap items-center justify-center gap-3 text-center ${
          compact ? "mb-2" : "mb-6"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="type-cta-heading text-glow-sm text-lg text-cyan-400 sm:text-xl">
            {GOOGLE_BUSINESS_RATING.toFixed(1)}
          </span>
          <StarRating rating={5} />
        </div>
        <span className="type-body text-sm text-white/50">
          {GOOGLE_REVIEW_COUNT} Google reviews
        </span>
      </div>

      <div
        className={`relative overflow-hidden ${
          compact ? "min-h-[252px] sm:min-h-[268px]" : "min-h-[280px] sm:min-h-[300px]"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${
              compact ? "gap-3" : "gap-4"
            }`}
            aria-live="polite"
          >
            {slides[activeSlide].map((review) => (
              <ReviewCard key={review.id} review={review} compact={compact} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`flex flex-wrap items-center justify-center gap-4 ${
          compact ? "mt-3" : "mt-8"
        }`}
      >
        <button
          type="button"
          onClick={goPrev}
          className="carousel-control"
          aria-label="Previous reviews"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === activeSlide ? "carousel-dot-active" : ""}`}
              aria-label={`Go to review slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="carousel-control"
          aria-label="Next reviews"
        >
          →
        </button>
      </div>

      <div className={`text-center ${compact ? "mt-2" : "mt-6"}`}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link type-nav text-glow-sm text-sm text-white/60 transition-colors hover:text-white/90"
        >
          View all reviews on Google →
        </a>
      </div>
    </div>
  );
}
