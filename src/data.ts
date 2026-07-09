export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const typingRoles = [
  "Graphic Designer",
  "Visual Storyteller",
  "Brand Stylist",
  "Illustrator",
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Crafting" },
  { value: 15, suffix: "+", label: "Awards & Features" },
];

export const skillCategories = [
  {
    title: "Brand & Identity",
    icon: "🎨",
    accent: "from-purple-500 to-fuchsia-500",
    skills: [
      { name: "Logo Design", level: 96 },
      { name: "Brand Identity", level: 92 },
      { name: "Visual Systems", level: 88 },
    ],
  },
  {
    title: "Illustration",
    icon: "✏️",
    accent: "from-cyan-500 to-sky-500",
    skills: [
      { name: "Digital Illustration", level: 90 },
      { name: "Indian Motifs & Patterns", level: 94 },
      { name: "Character Art", level: 82 },
    ],
  },
  {
    title: "UI / UX Design",
    icon: "📱",
    accent: "from-amber-500 to-orange-500",
    skills: [
      { name: "Web & App UI", level: 87 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 80 },
    ],
  },
  {
    title: "Tools & Software",
    icon: "🧰",
    accent: "from-violet-500 to-cyan-500",
    skills: [
      { name: "Adobe Photoshop", level: 95 },
      { name: "Adobe Illustrator", level: 93 },
      { name: "Figma & Canva", level: 90 },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  tags: string[];
  desc: string;
};

export const projects: Project[] = [
  {
    title: "Divine Brand Identity",
    category: "Branding",
    image: "/images/project1.jpg",
    tags: ["Logo", "Identity", "Stationery"],
    desc: "A complete brand identity blending sacred Indian motifs with clean modern form.",
  },
  {
    title: "Leela Social Campaign",
    category: "Social",
    image: "/images/project2.jpg",
    tags: ["Instagram", "Templates", "Ad Set"],
    desc: "A vibrant social campaign inspired by the play of color and rhythm.",
  },
  {
    title: "Poster & Print Series",
    category: "Print",
    image: "/images/project3.jpg",
    tags: ["Poster", "Typography", "Print"],
    desc: "Traditional illustration meeting expressive modern typography.",
  },
  {
    title: "Mandala Packaging",
    category: "Branding",
    image: "/images/project4.jpg",
    tags: ["Packaging", "Foil", "Luxury"],
    desc: "Luxury packaging with intricate mandala detailing and gold foil.",
  },
  {
    title: "Bansuri Illustration",
    category: "Illustration",
    image: "/images/project5.jpg",
    tags: ["Digital Art", "Illustration"],
    desc: "A digital ode to the flute — where color becomes melody.",
  },
  {
    title: "Celebration Invites",
    category: "Print",
    image: "/images/project6.jpg",
    tags: ["Invitation", "Event", "Calligraphy"],
    desc: "Elegant event branding with modern calligraphy and Indian motifs.",
  },
];

export const projectFilters = ["All", "Branding", "Social", "Print", "Illustration"];

export const services = [
  {
    icon: "🪷",
    title: "Brand Identity Design",
    desc: "Logos, visual systems and brand guidelines that give your business a soul.",
  },
  {
    icon: "🖌️",
    title: "Illustration & Artwork",
    desc: "Custom digital illustrations rooted in Indian aesthetics and modern craft.",
  },
  {
    icon: "📲",
    title: "Social Media Design",
    desc: "Scroll-stopping campaigns, templates and ad creatives that convert.",
  },
  {
    icon: "🖼️",
    title: "Print & Packaging",
    desc: "Posters, invitations, packaging and print collateral, sketch to delivery.",
  },
];

export const timeline = [
  {
    year: "2024 — Present",
    title: "Independent Design Studio",
    place: "Aayushi Visuals",
    type: "Experience",
    desc: "Leading brand identity, illustration and campaign projects for clients across India.",
  },
  {
    year: "2022 — 2024",
    title: "Senior Graphic Designer",
    place: "Creative Agency",
    type: "Experience",
    desc: "Crafted visual identities and social campaigns for growing brands and startups.",
  },
  {
    year: "2020 — 2022",
    title: "Graphic Designer",
    place: "Design Firm, Chittorgarh",
    type: "Experience",
    desc: "Delivered print, digital and branding work with a focus on cultural storytelling.",
  },
  {
    year: "2017 — 2020",
    title: "Bachelor of Fine Arts",
    place: "Design & Visual Communication",
    type: "Education",
    desc: "Specialised in visual communication, illustration and traditional Indian art forms.",
  },
];

export const testimonials = [
  {
    name: "Riya Sharma",
    role: "Founder, Bloom Studio",
    quote:
      "Aayushi translated our vision into a brand that feels both sacred and modern. Every detail sings.",
  },
  {
    name: "Karan Mehta",
    role: "Marketing Lead, Nivaan",
    quote:
      "Her social campaigns doubled our engagement. The colors, the rhythm — pure magic.",
  },
  {
    name: "Ananya Verma",
    role: "Creative Director",
    quote:
      "Working with Aayushi feels like collaborating with an artist and a strategist at once.",
  },
  {
    name: "Dev Patel",
    role: "Owner, Terracotta Co.",
    quote:
      "The packaging she designed made our product stand out on every shelf. Truly premium work.",
  },
];

export const EMAIL = "aayushikeer65@gmail.com";
export const PHONE = "+91 82095 92268";

export const socials = [
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/designeraayushi9" },
  { label: "LinkedIn", short: "IN", href: "https://www.linkedin.com/in/aayushikeer" },
  { label: "Twitter", short: "X", href: "https://x.com/Aayushiaayu36" },
];

export const contactInfo = [
  { icon: "📍", label: "Location", value: "Chittorgarh, Rajasthan, India" },
  { icon: "✉️", label: "Email", value: EMAIL },
  { icon: "📞", label: "Phone", value: PHONE },
];
