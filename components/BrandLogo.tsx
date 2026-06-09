import Image from "next/image";
import Link from "next/link";

const LOGO_WIDTH = 524;
const LOGO_HEIGHT = 147;

const defaultLogoClassName = "h-7 w-auto sm:h-9";

type BrandLogoImageProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogoImage({
  className = defaultLogoClassName,
  priority = false,
}: BrandLogoImageProps) {
  return (
    <Image
      src="/LOGO_WHITE.svg"
      alt="Universal Roofing & Restoration"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

type BrandLogoProps = {
  href?: string;
  className?: string;
  linkClassName?: string;
  priority?: boolean;
};

export default function BrandLogo({
  href = "/",
  className = defaultLogoClassName,
  linkClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex transition-opacity duration-300 hover:opacity-80 ${linkClassName ?? ""}`}
      aria-label="Universal Roofing & Restoration — Home"
    >
      <BrandLogoImage className={className} priority={priority} />
    </Link>
  );
}
