"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { BrandLogoImage } from "@/components/BrandLogo";
import SiteNav from "@/components/SiteNav";
import { REQUEST_QUOTE_URL } from "@/lib/cta-link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const FRAME_COUNT = 77;
const SEQUENCE_PATH = "/universal sequence";

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(3, "0");
  return `${SEQUENCE_PATH}/ezgif-frame-${num}.jpg`;
});

function drawImageContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  const canvasAspect = width / height;
  const imgAspect = img.naturalWidth / img.naturalHeight;

  let drawWidth: number;
  let drawHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (imgAspect > canvasAspect) {
    drawWidth = width;
    drawHeight = width / imgAspect;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  } else {
    drawHeight = height;
    drawWidth = height * imgAspect;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export default function ChipScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 1],
    [1, 1, 0, 0],
    { clamp: true }
  );
  const titleVisibility = useTransform(scrollYProgress, (v) =>
    v > 0.25 ? "hidden" : "visible"
  );

  const experienceOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.25, 0.38, 0.45, 1],
    [0, 1, 1, 0, 0],
    { clamp: true }
  );
  const experienceVisibility = useTransform(scrollYProgress, (v) =>
    v > 0.45 ? "hidden" : "visible"
  );

  const homesOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.45, 0.82, 0.9, 1],
    [0, 1, 1, 0, 0],
    { clamp: true }
  );
  const homesVisibility = useTransform(scrollYProgress, (v) =>
    v > 0.9 ? "hidden" : "visible"
  );

  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.92, 1],
    [0, 1],
    { clamp: true }
  );
  const ctaVisibility = useTransform(scrollYProgress, (v) =>
    v >= 0.92 ? "visible" : "hidden"
  );
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }, []);

  const drawFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const framePos = progress * (images.length - 1);
    const currentIndex = Math.floor(framePos);
    const blend = framePos - currentIndex;
    const nextIndex = Math.min(currentIndex + 1, images.length - 1);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    drawImageContain(ctx, images[currentIndex], width, height);

    if (blend > 0.001 && currentIndex !== nextIndex) {
      ctx.globalAlpha = blend;
      drawImageContain(ctx, images[nextIndex], width, height);
      ctx.globalAlpha = 1;
    }
  }, []);

  const scheduleDraw = useCallback(
    (progress: number) => {
      progressRef.current = progress;
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        drawFrame(progressRef.current);
      });
    },
    [drawFrame]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoading) {
      scheduleDraw(latest);
    }
  });

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    const load = async () => {
      setIsLoading(true);
      setLoadError(null);

      const results = await Promise.all(
        FRAME_URLS.map(
          (url) =>
            new Promise<HTMLImageElement | null>((resolve) => {
              const img = new Image();
              img.decoding = "async";
              img.onload = () => {
                if (!cancelled) {
                  loaded += 1;
                  setLoadedCount(loaded);
                }
                resolve(img);
              };
              img.onerror = () => resolve(null);
              img.src = url;
            })
        )
      );

      if (cancelled) return;

      const images = results.filter(
        (img): img is HTMLImageElement => img !== null
      );
      const failed = FRAME_URLS.length - images.length;

      if (images.length === 0) {
        setLoadError("Unable to load animation frames. Please refresh the page.");
        setIsLoading(false);
        return;
      }

      if (failed > 0) {
        console.warn(`${failed} frame(s) failed to load`);
      }

      imagesRef.current = images;
      setIsLoading(false);
      resizeCanvas();
      drawFrame(progressRef.current);
    };

    load();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resizeCanvas, drawFrame]);

  useEffect(() => {
    if (isLoading) return;

    resizeCanvas();
    drawFrame(progressRef.current);

    const handleResize = () => {
      resizeCanvas();
      drawFrame(progressRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoading, resizeCanvas, drawFrame]);

  const loadProgress = useMemo(
    () => Math.round((loadedCount / FRAME_COUNT) * 100),
    [loadedCount]
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      {/* Sticky canvas layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400" />
            </div>
            <p className="mt-6 text-sm tracking-tight text-white/60">
              Loading experience
            </p>
            <p className="mt-2 font-mono text-xs text-cyan-400/80">
              {loadProgress}%
            </p>
          </div>
        )}

        {/* Error state */}
        {loadError && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black px-6">
            <p className="max-w-md text-center text-white/60">{loadError}</p>
          </div>
        )}

        {/* Text overlays */}
        {!isLoading && !loadError && (
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* 0% — Hero title */}
            <motion.div
              style={{ opacity: titleOpacity, visibility: titleVisibility }}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              <h1 className="type-hero text-center text-4xl text-white/90 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-glow block">Universal</span>
                <span className="type-subheading text-glow mt-3 block text-[0.38em] sm:mt-4 sm:text-[0.34em]">
                  Roofing &amp; Restoration
                </span>
              </h1>
            </motion.div>

            {/* 25% — Experience */}
            <motion.div
              style={{
                opacity: experienceOpacity,
                visibility: experienceVisibility,
              }}
              className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 lg:px-32"
            >
              <h2 className="type-subheading text-glow max-w-sm text-xl text-white/90 sm:max-w-lg sm:text-2xl md:text-3xl lg:text-4xl">
                Top Rated Roofing, Siding &amp; Gutters
              </h2>
            </motion.div>

            {/* 45% — Homes serviced */}
            <motion.div
              style={{ opacity: homesOpacity, visibility: homesVisibility }}
              className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-32"
            >
              <h2 className="type-subheading text-glow max-w-sm text-right text-xl text-white/90 sm:max-w-lg sm:text-2xl md:text-3xl lg:text-4xl">
                Serving Greater Houston Area
              </h2>
            </motion.div>

            {/* 92–100% — Logo above house, CTA on house, nav below house */}
            <motion.div
              initial={{ opacity: 0, visibility: "hidden" }}
              style={{ opacity: ctaOpacity, visibility: ctaVisibility }}
              className="pointer-events-none absolute inset-0 z-30 flex flex-col px-6"
            >
              <div className="relative z-40 flex shrink-0 justify-center pt-10 sm:pt-12">
                <BrandLogoImage
                  className="h-[7.5rem] w-auto sm:h-[9rem]"
                  priority
                />
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8">
                <h2 className="type-cta-heading text-glow text-center text-xl text-white/90 sm:text-2xl md:text-3xl">
                  Book an Appointment
                </h2>
                <a
                  href={REQUEST_QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button type-nav pointer-events-auto relative rounded-full border px-8 py-3 text-sm text-white backdrop-blur-sm sm:px-10 sm:py-3.5 sm:text-base"
                >
                  <span className="text-glow-sm">Request Quote</span>
                </a>
              </div>

              <div className="pointer-events-auto flex shrink-0 justify-center pb-8 sm:pb-10">
                <SiteNav />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
