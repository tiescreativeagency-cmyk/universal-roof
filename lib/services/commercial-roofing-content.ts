import type { ServiceOffering } from "@/lib/services/types";

export const COMMERCIAL_ROOFING_INTRO =
  "At Universal Roofing and Restoration, we provide professional commercial roofing services for office buildings, warehouses, retail centers, and multi-unit properties. Our licensed and insured contractors specialize in roof inspections, repairs, replacements, storm damage restoration, and preventative maintenance. With years of experience and a commitment to quality, we keep your business protected with long-lasting, reliable roofing solutions.";

export const COMMERCIAL_ROOFING_SUBTITLE =
  "Universal Roofing & Restoration — Our Commercial Roofing Services";

export const COMMERCIAL_ROOFING_SERVICES: ServiceOffering[] = [
  {
    id: "built-up-roofing",
    title: "Built-Up Roofing",
    description:
      "Built-Up Roofing (BUR) systems are traditional multi-layered roofs with excellent waterproofing. Perfect for flat or low-slope commercial roofs.",
    bullets: [
      "Excellent waterproofing and durability",
      "Multiple layers of protection (tar, asphalt, or felt)",
      "Long-lasting, resistant to leaks and ponding water",
      "Great for heavy foot traffic areas",
    ],
  },
  {
    id: "roof-coating",
    title: "Roof Coating",
    description:
      "Protect and extend the life of your commercial roof with professional coating services tailored to your building's needs.",
    bullets: [
      "Experienced in coating all types of commercial roofs (TPO, EPDM, metal, BUR, and more)",
      "Extend the life of your roof and reduce maintenance costs",
      "Improve energy efficiency with reflective coatings",
      "Certified and insured contractors",
      "Full inspection and detailed photo report included",
    ],
  },
  {
    id: "modified-bitumen",
    title: "Modified Bitumen Roof Repair and Installation",
    description:
      "At Universal Roofing and Restoration, we specialize in modified bitumen roofing for commercial properties. This durable, high-performance roofing system is ideal for flat or low-slope roofs and provides excellent protection against weather, UV rays, and wear over time.",
  },
  {
    id: "tpo-roofing",
    title: "TPO Roofing (Thermoplastic Polyolefin)",
    description:
      "TPO roofs are durable, energy-efficient, and ideal for commercial buildings exposed to sunlight. They are heat-reflective, reducing energy costs while providing long-lasting protection.",
    bullets: [
      "Heat-reflective for energy savings",
      "Resistant to UV, chemical, and puncture damage",
      "Lightweight and flexible",
      "Long lifespan with minimal maintenance",
    ],
  },
  {
    id: "flat-roofing",
    title: "Flat Roofing",
    description:
      "Flat roofs are common on commercial buildings like warehouses and office complexes. We install, repair, and maintain flat roofs using high-quality materials for durability and longevity.",
    bullets: [
      "Ideal for large commercial buildings",
      "Easy to maintain and inspect",
      "Works with TPO, EPDM, or PVC membranes",
      "Efficient water drainage with proper slope",
    ],
  },
];
