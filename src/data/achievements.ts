export interface Achievement {
  title: string;
  category: string;
  description: string;
  context: string;
}

export const achievements: Achievement[] = [
  {
    title: "Innovation Project — BOB-N-THON",
    category: "Innovation / Hackathon",
    description:
      "Built a centralized web application to improve the quality-check workflow between the operations team and QA team, replacing an Excel-based ticket tracking and review process.",
    context:
      "Developed during BOB-N-THON to give the operations and QA teams a shared, centralized place to interact around ticket quality review instead of manual spreadsheet tracking.",
  },
];

export interface CtfEntry {
  count: number;
  label: string;
  status: string;
}

export const ctfSummary: CtfEntry = {
  count: 4,
  label: "CTFs",
  status: "Ongoing hands-on practice",
};
