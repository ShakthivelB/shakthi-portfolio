export interface SocialLink {
  label: string;
  url: string;
}

export const profile = {
  name: "Shakthivel B",
  careerGoal: "Aspiring SOC Analyst",
  currentRole: "Technical Support Engineer",
  currentCompany: "IBM",
  currentProject: "AusNet Energy & Utility",
  location: "Bangalore, India",
  yearsOfExperience: "1.5 Years",
  availability: "Open to SOC Analyst Opportunities",
  heroTagline: "Security Researcher • Bug Bounty • OSINT • Reverse Engineering",
  focusAreas: [
    "Security Operations",
    "Bug Bounty",
    "OSINT",
    "Reverse Engineering",
  ],
  email: "shakthisv90@gmail.com",
  links: {
    github: "https://github.com/ShakthivelB",
    linkedin: "https://www.linkedin.com/in/shakthi-vel-b-5507ba306/",
    medium: "https://medium.com/@shakthisv90",
  },
} as const;

export const metrics = [
  { label: "Professional Experience", value: "1.5", suffix: " Years" },
  { label: "SOC Labs", value: "3", suffix: "+", note: "Ongoing" },
  { label: "TryHackMe Rooms", value: "90", suffix: "+", note: "Incl. SOC Simulator" },
  { label: "PortSwigger Labs", value: "93", suffix: "+" },
  { label: "Bug Bounty Reports", value: "4", suffix: "+" },
  { label: "Technical Blogs", value: "7", suffix: "+" },
  { label: "GitHub Repositories", value: "17", suffix: "+" },
  { label: "CTFs", value: "4", suffix: "" },
] as const;
