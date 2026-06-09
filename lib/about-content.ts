export type AboutSection = {
  id: string;
  title?: string;
  paragraphs: string[];
};

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    id: "mission",
    paragraphs: [
      "At Universal Roofing & Restoration, we believe every homeowner deserves a contractor they can trust.",
      "Built on a foundation of integrity, craftsmanship, and genuine care for the communities we serve, our mission is simple: protect homes and provide peace of mind. From roofing and restoration to siding and gutters, our team delivers dependable solutions designed to withstand the unique demands of Texas weather.",
      "We approach every project with the same commitment that inspired our company from the beginning — treating homeowners the way we would want our own families to be treated: with honesty, transparency, and respect.",
    ],
  },
  {
    id: "trusted-quality",
    title: "Trusted Quality Roofing Contractors Serving Local Homeowners",
    paragraphs: [
      "As a locally trusted roofing and restoration company, we understand the unique challenges Texas homeowners face. From intense summer heat to severe storms and heavy rainfall, your home needs more than a roof — it needs a complete protection system.",
      "Our experienced team combines proven craftsmanship with premium materials to deliver roofing solutions built for durability, performance, and lasting value. Every inspection, repair, and installation is completed with attention to detail and a commitment to doing the job right the first time.",
      "Because protecting your home isn't just our profession — it's our responsibility.",
    ],
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction & Reliability",
    paragraphs: [
      "We understand that inviting a contractor to work on your home requires trust. That's why we prioritize communication, transparency, and reliability at every stage of the process.",
      "From your initial consultation to the final walkthrough, our team is committed to delivering an experience that is professional, responsive, and stress-free. We provide clear recommendations, honest estimates, and dependable service so you can make informed decisions with confidence.",
      "Our success is measured by more than completed projects — it's reflected in the relationships we build and the homeowners who continue to trust Universal Roofing & Restoration to protect what matters most.",
    ],
  },
];
