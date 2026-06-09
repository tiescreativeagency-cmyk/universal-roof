import Link from "next/link";
import { SERVICE_LINKS } from "@/lib/service-links";

export default function ServiceLinks() {
  return (
    <ul className="mx-auto mt-5 flex w-full max-w-md flex-col gap-2.5 sm:max-w-lg sm:mt-6 sm:gap-3">
      {SERVICE_LINKS.map((service) => (
        <li key={service.href}>
          <Link href={service.href} className="service-link type-nav text-glow-sm">
            {service.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
