import type { Metadata } from "next";
import AboutUsContent from "@/components/AboutUsContent";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | Universal Roof",
  description:
    "Learn about Universal Roofing & Restoration — integrity, craftsmanship, and protection for Houston homes.",
};

export default function AboutUsPage() {
  return (
    <PageShell
      activeHref="/about-us"
      title="About Us"
      description="Over a decade of craftsmanship, integrity, and protection for Houston homes."
      contentAlign="top"
      contentWidth="wide"
    >
      <AboutUsContent />
    </PageShell>
  );
}
