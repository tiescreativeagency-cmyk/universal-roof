import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav-links";

type SiteNavProps = {
  activeHref?: string;
  className?: string;
  size?: "default" | "compact";
};

const sizeStyles = {
  default: {
    list: "gap-6 sm:gap-12 md:gap-[4.5rem]",
    link: "text-[1.3125rem] sm:text-[1.5rem]",
  },
  compact: {
    list: "gap-8 sm:gap-10 md:gap-12",
    link: "text-[0.65625rem] sm:text-[0.75rem]",
  },
} as const;

export default function SiteNav({
  activeHref,
  className,
  size = "default",
}: SiteNavProps) {
  const styles = sizeStyles[size];

  return (
    <nav className={className} aria-label="Main navigation">
      <ul
        className={`flex flex-wrap items-center justify-center ${styles.list}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={activeHref === link.href ? "page" : undefined}
              className={`nav-link type-nav text-glow-sm ${styles.link} ${
                activeHref === link.href ? "text-white" : "text-white/85"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
