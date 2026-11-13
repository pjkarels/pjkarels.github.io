/** The one place to edit personal details. Empty strings hide that link. */
export const site = {
  url: "https://pjkarels.github.io",
  name: "Paul Karels",
  role: "Senior Android Engineer",
  headline: "Senior Android Engineer · 16 years",
  pitch:
    "I design and build native Android apps for banking, healthcare and safety inspection: offline-first sync, native code integration and secure release pipelines for regulated industries.",
  email: "paul.j.karels@gmail.com",
  github: "pjkarels",
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile"
  resume: "/Paul_Karels_Resume.pdf",
} as const;

export const githubUrl = (path = "") => `https://github.com/${site.github}${path ? `/${path}` : ""}`;
