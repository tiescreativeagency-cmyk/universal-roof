import { REQUEST_QUOTE_URL } from "@/lib/cta-link";

export default function HeaderCta() {
  return (
    <a
      href={REQUEST_QUOTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button cta-button-sm type-nav inline-flex justify-self-end rounded-full border px-5 py-2 text-xs text-white backdrop-blur-sm sm:px-6 sm:py-2.5 sm:text-sm"
    >
      <span className="text-glow-sm">Request Quote</span>
    </a>
  );
}
