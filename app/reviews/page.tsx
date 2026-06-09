import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ReviewCarousel from "@/components/ReviewCarousel";

export const metadata: Metadata = {
  title: "Reviews | Universal Roof",
  description: "See what Houston homeowners say about Universal Roof.",
};

export default function ReviewsPage() {
  return (
    <PageShell
      activeHref="/reviews"
      title="Reviews"
      description="Trusted by Houston homeowners. Hear from our customers on Google."
      contentAlign="top"
      contentWidth="wide"
    >
      <div className="mt-3">
        <ReviewCarousel compact />
      </div>
    </PageShell>
  );
}
