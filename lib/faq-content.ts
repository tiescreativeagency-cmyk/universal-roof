export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "free-inspection-obligation",
    question: "Is there any obligation or commitment to this free roof inspection?",
    answer:
      "No, there is not at all, rather if we find an absence of damage or plenty of damage for your roof to be insurance worthy.",
  },
  {
    id: "insurance-adjustment",
    question: "Will you be here during the insurance adjustment?",
    answer:
      "Yes, we will be in attendance during the insurance adjustment on the roof to work with your insurance to make sure everything is accounted for.",
  },
  {
    id: "storm-damage-claim",
    question: "What do I do if I want to file an insurance claim for storm damage?",
    answer:
      "It is vital you contact us prior to filing the insurance claim to inspect the roof damage if any. If any damage worthy of an insurance claim. We will file the insurance claim with you in order to make sure the insurance receives all the correct information and details pulled from our reports in order to higher the chance of approval. We will meet with your insurance adjuster on the roof to make sure everything is accounted for and not passed up accidentally or intentionally.",
  },
  {
    id: "hoa-notification",
    question: "Do we have to notify my neighborhood HOA?",
    answer:
      "As a part of our service we reach out to your HOA. It is best to notify and submit samples to the HOA so they approve the change to your property to prevent friction in the future for you as our client.",
  },
  {
    id: "insurance-deductible",
    question: "Do I have to pay my home insurance deductible?",
    answer:
      "Yes, your home insurance deductible legally by Texas law has to be collected or otherwise is insurance fraud. When a company doesn't charge the deductible this means the contractor has to submit a false invoice to your insurance company in order to recover the depreciation (the final insurance check) which is illegal and both contractor and policy holder can be responsible to serve jail time and or fees.",
  },
  {
    id: "insurance-rate-increase",
    question:
      "Will my insurance rate increase when I make this roof claim with my insurance company?",
    answer:
      "When a policy holder individually make a claim due to weather for their home, their insurance rate cannot increase due to the claim deriving from weather. This is referred to as an act of nature or act of God. The TDI (Texas Department of Insurance) regulates the insurance companies with this particular policy.",
  },
];
