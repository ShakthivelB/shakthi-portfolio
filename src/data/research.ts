export interface WorkflowStep {
  step: string;
}

export interface Methodology {
  title: string;
  description: string;
  steps: WorkflowStep[];
}

export const methodologies: Methodology[] = [
  {
    title: "SOC Investigation Workflow",
    description:
      "The methodology followed when investigating alerts in the Splunk SOC home lab.",
    steps: [
      { step: "Alert" },
      { step: "Triage" },
      { step: "Investigation" },
      { step: "Correlation" },
      { step: "Root Cause" },
      { step: "Response" },
      { step: "Lessons Learned" },
    ],
  },
  {
    title: "Bug Bounty Workflow",
    description: "The methodology followed when testing bug bounty targets.",
    steps: [
      { step: "Recon" },
      { step: "Enumeration" },
      { step: "Validation" },
      { step: "Testing" },
      { step: "Documentation" },
      { step: "Responsible Disclosure" },
    ],
  },
];

export const focusAreas = [
  {
    title: "Security Operations",
    description: "Hands-on practice with SIEM tooling and alert investigation through home-lab work.",
  },
  {
    title: "Threat Hunting",
    description: "Exploring proactive detection techniques, including writing YARA rules from malware IoCs.",
  },
  {
    title: "Bug Bounty",
    description: "Active bug bounty testing across web applications, focused on responsible reporting.",
  },
  {
    title: "Security Research",
    description: "Documenting hands-on learning through technical write-ups and lab reports.",
  },
  {
    title: "OSINT",
    description: "Reconnaissance techniques applied during bug bounty target research.",
  },
  {
    title: "Reverse Engineering",
    description: "Currently learning C to build a foundation for reverse engineering work.",
  },
  {
    title: "Security Automation",
    description: "Building scripts to automate repetitive security and system-administration tasks.",
  },
] as const;
