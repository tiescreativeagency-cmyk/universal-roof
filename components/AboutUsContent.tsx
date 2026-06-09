import { ABOUT_SECTIONS } from "@/lib/about-content";

export default function AboutUsContent() {
  const [introSection, ...boxedSections] = ABOUT_SECTIONS;

  return (
    <div className="mt-8 sm:mt-10">
      <article className="mx-auto max-w-6xl text-left">
        <div className="space-y-4">
          {introSection.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className={`type-body leading-relaxed text-white/70 ${
                paragraphIndex === 0
                  ? "text-base text-white/85 sm:text-lg"
                  : "text-sm sm:text-base"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <div className="mx-auto mt-6 max-w-6xl space-y-6 text-left sm:mt-8 sm:space-y-8">
        {boxedSections.map((section) => (
          <article key={section.id} className="about-section">
            {section.title && (
              <h2 className="type-subheading text-glow-sm mb-4 text-base text-cyan-400 sm:mb-5 sm:text-lg">
                {section.title}
              </h2>
            )}
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="type-body text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
