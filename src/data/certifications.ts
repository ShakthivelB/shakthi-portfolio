export interface Certification {
  title: string;
  issuer: string;
  status: "Completed" | "Candidate" | "Currently Pursuing";
  logo?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "ISC2 CC — Certified in Cybersecurity",
    issuer: "ISC2",
    status: "Candidate",
  },
  {
    title: "Cybersecurity Certification Course",
    issuer: "TODO — issuer not specified",
    status: "Completed",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    status: "Completed",
  },
  {
    title: "Tata Cybersecurity Security Analyst Job Simulation",
    issuer: "Tata",
    status: "Completed",
  },
  {
    title: "Advent of Cyber",
    issuer: "TryHackMe",
    status: "Completed",
  },
  {
    title: "OWASP Overview",
    issuer: "TODO — issuer not specified",
    status: "Completed",
  },
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    status: "Completed",
  },
];

export const currentlyPursuing: Certification = {
  title: "Microsoft SC-200 — Microsoft Certified: Security Operations Analyst Associate",
  issuer: "Microsoft",
  status: "Currently Pursuing",
};
