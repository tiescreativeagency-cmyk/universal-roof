import type { ReactNode } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import HeaderCta from "@/components/HeaderCta";
import SiteNav from "@/components/SiteNav";

type PageShellProps = {
  title: string;
  description?: string;
  activeHref?: string;
  contentAlign?: "center" | "top";
  contentWidth?: "default" | "wide";
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
};

export default function PageShell({
  title,
  description,
  activeHref,
  contentAlign = "center",
  contentWidth = "default",
  backHref,
  backLabel,
  children,
}: PageShellProps) {
  return (
    <div className="page-shell relative flex min-h-screen flex-col bg-black">
      <header
        className={`relative z-10 grid grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-12 ${
          contentAlign === "top" ? "py-4 sm:py-5" : "py-8"
        }`}
      >
        <BrandLogo
          linkClassName="justify-self-start"
          className="h-14 w-auto sm:h-[4.5rem]"
        />
        <SiteNav activeHref={activeHref} size="compact" className="justify-self-center" />
        <HeaderCta />
      </header>

      <main
        className={`relative z-10 flex flex-1 flex-col items-center px-6 sm:px-12 ${
          contentAlign === "top"
            ? "justify-start pb-4 pt-1 sm:pb-6 sm:pt-2"
            : "justify-center pb-24"
        }`}
      >
        <div
          className={`w-full ${
            contentWidth === "wide" ? "max-w-6xl" : "max-w-2xl"
          }`}
        >
          {backHref && backLabel && (
            <Link
              href={backHref}
              className="nav-link type-nav mb-4 inline-flex text-sm text-white/60 sm:mb-5"
            >
              {backLabel}
            </Link>
          )}
          <div className="text-center">
          <div
            className={`mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent ${
              contentAlign === "top"
                ? contentWidth === "wide"
                  ? "mb-3"
                  : "mb-4"
                : "mb-8"
            }`}
          />
          <h1
            className={`type-hero text-glow text-white/90 ${
              contentAlign === "top"
                ? "text-3xl sm:text-4xl md:text-5xl"
                : "text-4xl sm:text-5xl md:text-6xl"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`type-body text-white/60 ${
                contentAlign === "top" && contentWidth === "wide"
                  ? "mt-3 text-sm sm:text-base"
                  : "mt-6 text-base sm:text-lg"
              }`}
            >
              {description}
            </p>
          )}
          {children ?? (
            <p className="type-body mt-10 text-sm text-white/30">
              Content coming soon.
            </p>
          )}
          </div>
        </div>
      </main>
    </div>
  );
}
