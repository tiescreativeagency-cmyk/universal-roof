import type { ServiceOffering } from "@/lib/services/types";

type ServicePageContentProps = {
  intro: string | string[];
  introHeading?: string;
  introSubheading?: string;
  introTagline?: string;
  subtitle?: string;
  services: ServiceOffering[];
  className?: string;
};

export default function ServicePageContent({
  intro,
  introHeading,
  introSubheading,
  introTagline,
  subtitle,
  services,
  className = "",
}: ServicePageContentProps) {
  const introParagraphs = Array.isArray(intro) ? intro : [intro];

  return (
    <div className={`mt-8 text-left sm:mt-10 ${className}`.trim()}>
      <article className="mx-auto max-w-6xl">
        {introHeading && (
          <h2 className="type-subheading text-glow-sm text-lg text-cyan-400 sm:text-xl">
            {introHeading}
          </h2>
        )}
        {introSubheading && (
          <p
            className={`type-subheading text-glow-sm text-base text-white/90 sm:text-lg ${
              introHeading ? "mt-4" : ""
            }`}
          >
            {introSubheading}
          </p>
        )}
        {introParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className={`type-body text-base leading-relaxed text-white/85 sm:text-lg ${
              introHeading || introSubheading ? "mt-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
        {introTagline && (
          <p className="type-subheading text-glow-sm mt-6 text-center text-sm text-cyan-400 sm:mt-8 sm:text-base">
            {introTagline}
          </p>
        )}
        {subtitle && (
          <p className="type-subheading text-glow-sm mt-6 text-center text-sm text-cyan-400 sm:mt-8 sm:text-base">
            {subtitle}
          </p>
        )}
      </article>

      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 sm:mt-8 sm:gap-6">
        {services.map((service) => (
          <article key={service.id} className="about-section h-full">
            <h2 className="type-subheading text-glow-sm text-base text-cyan-400 sm:text-lg">
              {service.title}
            </h2>
            {service.description && (
              <p className="type-body mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">
                {service.description}
              </p>
            )}
            {service.bullets && service.bullets.length > 0 && (
              <ul className="type-body mt-3 space-y-2 text-sm text-white/70 sm:mt-4 sm:text-base">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 leading-relaxed">
                    <span className="shrink-0 text-cyan-400">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
