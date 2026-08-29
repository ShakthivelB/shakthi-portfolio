export interface JourneyNode {
  title: string;
  date: string;
  description: string;
}

// Dates marked "TODO" are unconfirmed — CLAUDE.md §20 explicitly forbids inventing
// dates for events that haven't been provided. Only the IBM start date is confirmed.
export const journey: JourneyNode[] = [
  {
    title: "BCA",
    date: "TODO",
    description: "Bachelor of Computer Applications.",
  },
  {
    title: "Cybersecurity Discovery",
    date: "TODO",
    description: "Started exploring cybersecurity as a field of interest.",
  },
  {
    title: "Hands-on Labs",
    date: "TODO",
    description: "Began working through TryHackMe rooms, PortSwigger labs, and CTFs.",
  },
  {
    title: "Bug Bounty",
    date: "TODO",
    description: "Started submitting bug bounty reports on live targets.",
  },
  {
    title: "Technical Blogging",
    date: "TODO",
    description: "Started writing technical write-ups on Medium.",
  },
  {
    title: "IBM",
    date: "March 2025",
    description: "Joined IBM as a Technical Support Engineer on the AusNet Energy & Utility project.",
  },
  {
    title: "SOC Home Lab",
    date: "TODO",
    description: "Built a Splunk-based home SOC lab to practice SSH brute-force detection.",
  },
  {
    title: "Current SOC Analyst Journey",
    date: "Present",
    description: "Continuing to build toward a SOC Analyst role through labs, certifications, and hands-on practice.",
  },
];
