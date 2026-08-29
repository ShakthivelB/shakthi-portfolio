export interface Blog {
  title: string;
  description: string;
  publishedDate: string;
  tags: string[];
  url: string;
}

// Sourced from https://medium.com/feed/@shakthisv90 — newest first.
// Note: an earlier duplicate/draft of the "SSH Brute-Force" post (Jul 8, 2026) was
// dropped in favor of the Jul 9, 2026 republish, which appears to be the canonical one.
export const blogs: Blog[] = [
  {
    title: "How I Approach Finding GraphQL API Vulnerabilities",
    description:
      "A look at the approach used to find vulnerabilities in GraphQL APIs during bug bounty testing.",
    publishedDate: "2026-07-21",
    tags: ["bug-bounty"],
    url: "https://medium.com/@shakthisv90/how-i-approach-finding-graphql-api-vulnerabilities-621172e9dcf4",
  },
  {
    title: "Investigating an SSH Brute-Force Attack Using Splunk SIEM in a Home Lab",
    description:
      "Walking through the investigation of a simulated SSH brute-force attack detected using Splunk SIEM in a home SOC lab.",
    publishedDate: "2026-07-09",
    tags: ["soc"],
    url: "https://medium.com/@shakthisv90/investigating-an-ssh-brute-force-attack-using-splunk-siem-in-a-home-lab-793790312e2d",
  },
  {
    title: "From Linux Beginner to Security Mindset: My OverTheWire Bandit Journey",
    description:
      "Reflecting on how working through the OverTheWire Bandit wargame shaped a security-focused way of thinking about Linux.",
    publishedDate: "2026-07-08",
    tags: ["linux"],
    url: "https://infosecwriteups.com/from-linux-beginner-to-security-mindset-my-overthewire-bandit-journey-cdeafd8902a1",
  },
  {
    title: "Writing a YARA Rule From Malware IoCs (Short & Simple)",
    description:
      "A short, practical walkthrough of turning malware indicators of compromise into a working YARA rule.",
    publishedDate: "2025-12-17",
    tags: ["threat-intelligence"],
    url: "https://medium.com/@shakthisv90/writing-a-yara-rule-from-malware-iocs-short-simple-2aaac0b0a25b",
  },
  {
    title: "Splunk Security Use Cases: A Practical Guide for Real-World Threat Detection",
    description:
      "A practical guide covering real-world threat detection use cases built with Splunk.",
    publishedDate: "2025-12-17",
    tags: ["threat-intelligence", "cyber-security-awareness"],
    url: "https://medium.com/@shakthisv90/splunk-security-use-cases-a-practical-guide-for-real-world-threat-detection-a067fd6054a0",
  },
  {
    title: "How I do Recon on my target.com",
    description:
      "A breakdown of the reconnaissance process used on a bug bounty target, and how it led to a finding.",
    publishedDate: "2025-11-27",
    tags: ["bug-bounty", "cybersecurity", "programming"],
    url: "https://medium.com/@shakthisv90/how-i-do-recon-on-my-target-com-which-gave-me-walkthrough-to-the-bugbounty-880c07c3f07d",
  },
  {
    title: "INFORMATIONAL#3 Weak Password Policy",
    description: "A bug bounty write-up covering a weak password policy finding.",
    publishedDate: "2025-08-22",
    tags: ["bug-bounty"],
    url: "https://medium.com/@shakthisv90/informational-3-weak-password-policy-c3b90282be09",
  },
  {
    title: "INFORMATIONAL #2",
    description: "A bug bounty informational write-up.",
    publishedDate: "2025-08-15",
    tags: ["bug-bounty"],
    url: "https://medium.com/@shakthisv90/informational-2-6429709d466f",
  },
  {
    title: "Linux Update Automation Script",
    description:
      "Notes on building a Bash script to automate Linux system updates on Debian-based distributions.",
    publishedDate: "2025-08-15",
    tags: ["linuxworld"],
    url: "https://medium.com/@shakthisv90/linux-update-automation-script-0568e0b42ee8",
  },
];
