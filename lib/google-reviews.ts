export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Universal+Restoration/@29.7331222,-95.5238279,17z/data=!3m1!5s0x8640c308bfadb3b7:0xc49efefdc06ace85!4m16!1m9!3m8!1s0x8640d98a09c73d65:0x81defde7b46b6755!2sUniversal+Restoration!8m2!3d29.7331222!4d-95.5238279!9m1!1b1!16s%2Fg%2F11g10fq4l4!3m5!1s0x8640d98a09c73d65:0x81defde7b46b6755!8m2!3d29.7331222!4d-95.5238279!16s%2Fg%2F11g10fq4l4?entry=ttu";

export const REVIEWS_PER_SLIDE = 4;

export const GOOGLE_BUSINESS_RATING = 4.8;
export const GOOGLE_REVIEW_COUNT = 209;

export type GoogleReview = {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "sade-gambrell",
    author: "Sade Gambrell",
    date: "April 2026",
    rating: 5,
    text: "Universal Roofing & Restoration demonstrated exceptional professionalism from start to finish. Brandon was on time, efficient, and very knowledgeable. He inspected the entire roof thoroughly. I highly recommend them to anyone in need of reliable, high-quality roofing services.",
  },
  {
    id: "hamza-yilmaz",
    author: "Hamza Yilmaz",
    date: "January 2026",
    rating: 5,
    text: "I called for an urgent gutter repair the day before New Year's Eve. Jennifer explained everything clearly. Alejandro and his team were punctual, professional, and completed the repair in less than 24 hours. A stress-free experience.",
  },
  {
    id: "roger-m",
    author: "Roger M",
    date: "December 2025",
    rating: 5,
    text: "Universal Roofing and Restoration did an excellent job on my roof replacement. The team was on time, very professional from start to finish, and kept everything clean throughout the process. I definitely recommend them to anyone in Houston.",
  },
  {
    id: "maureen-dexter",
    author: "Maureen Dexter",
    date: "December 2025",
    rating: 5,
    text: "I cannot say enough about this company. They tarped my roof on a rainy Sunday, handled mold remediation, restored my closet, and installed a new roof in a day. Jennifer checked in daily. Truly a 5-star plus company.",
  },
  {
    id: "kimberely-young",
    author: "Kimberely Young",
    date: "January 2026",
    rating: 5,
    text: "Got a new roof finished in one day and it looks great. Replaced siding and new gutters. Everything looks good and the customer service was wonderful. Thank you for a great experience.",
  },
  {
    id: "rich-pinkston",
    author: "Rich Pinkston",
    date: "January 2026",
    rating: 5,
    text: "My experience with Universal Roofing was great. They kept me informed of all aspects of my roof repair and replacement. A+. Would recommend highly.",
  },
  {
    id: "billy-prophet",
    author: "Billy Prophet",
    date: "December 2025",
    rating: 5,
    text: "Universal Roofing and Restoration did a great job on my roof. Everything from the inspection to the replacement was great. They were on time and professional. Robert stayed in communication at all times.",
  },
  {
    id: "michael-l",
    author: "Michael L.",
    date: "February 2026",
    rating: 5,
    text: "Had a replacement downspout job done that was so fast and clean, we had a hard time finding the one replaced because it matched so well. Super nice and knowledgeable. Definitely recommend.",
  },
  {
    id: "gerald-cooley",
    author: "Gerald Cooley",
    date: "September 2025",
    rating: 5,
    text: "Universal Roofing & Restoration's team were great to work with on my needed roof replacement. The quality of the work is outstanding, and at a competitive cost. I would recommend them to anyone.",
  },
  {
    id: "kellie-martin",
    author: "Kellie Martin",
    date: "November 2025",
    rating: 5,
    text: "Great service, very communicative. They were very thorough when explaining the different options we had for roofing and siding.",
  },
  {
    id: "osaro-aifuwa",
    author: "Osaro Aifuwa",
    date: "October 2025",
    rating: 5,
    text: "Very seamless experience. The quote was thorough and they explained additional questions over the phone. The job was done on time and I would recommend.",
  },
  {
    id: "ryan-kinnear",
    author: "Ryan Kinnear",
    date: "September 2025",
    rating: 5,
    text: "Excellent work and also cleaned up during and after. The crew was professional and left the property spotless.",
  },
  {
    id: "gabby-michael-cortez",
    author: "Gabby Michael-Cortez",
    date: "December 2025",
    rating: 5,
    text: "Professional, timely, and well priced. Their service exceeded my expectations. I highly recommend.",
  },
  {
    id: "jan-erik-johansson",
    author: "Jan Erik Johansson",
    date: "January 2026",
    rating: 5,
    text: "Replaced old siding with Hardie plank. Very efficient and properly performed job. Will use them again when it is time to do the other siding.",
  },
  {
    id: "chris-j",
    author: "Chris J",
    date: "November 2025",
    rating: 5,
    text: "Hard working crew. They were very friendly and very clean. I recommend highly.",
  },
  {
    id: "josiah-johnston",
    author: "Josiah Johnston",
    date: "May 2026",
    rating: 5,
    text: "John explained warranty coverage clearly so I knew what was protected and for how long. Great communication throughout the process.",
  },
];
