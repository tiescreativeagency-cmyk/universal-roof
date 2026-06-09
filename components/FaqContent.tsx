"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS, type FaqItem } from "@/lib/faq-content";

function FaqAccordionItem({ faq }: { faq: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="about-section">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="group flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <h2 className="type-subheading text-glow-sm flex-1 text-base text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
          {faq.question}
        </h2>
        <span
          className={`faq-chevron mt-0.5 shrink-0 text-cyan-400/80 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="type-body pt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FaqContent() {
  return (
    <div className="mx-auto mt-8 max-w-6xl space-y-5 text-left sm:mt-10 sm:space-y-6">
      {FAQ_ITEMS.map((faq) => (
        <FaqAccordionItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
