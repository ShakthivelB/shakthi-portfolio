export interface Project {
  title: string;
  category: string;
  description: string;
  purpose: string;
  approach: string;
  securityRelevance: string;
  technologies: string[];
  keyLearning: string;
  githubUrl: string;
  featured: boolean;
  large?: boolean;
  todo?: string;
}

export const projects: Project[] = [
  {
    title: "OverTheWire Bandit Challenge",
    category: "Linux Fundamentals",
    securityRelevance:
      "Linux privilege-escalation and file-permission fundamentals that underpin both offensive testing and SOC-side triage.",
    description:
      "A complete walkthrough of the OverTheWire Bandit wargame — personal notes covering all 33 levels of the beginner-friendly Linux and security training platform.",
    purpose:
      "Build fundamental Linux, networking, and shell scripting skills essential for penetration testing and defensive security.",
    approach:
      "Documented each level (01–33) as an individual note covering the objective, commands used, and the underlying concept — spanning file permissions, SSH, encoding (Base64/Hex/ROT13), SUID exploitation, restricted shell escapes, and Git fundamentals.",
    technologies: ["Linux", "Bash", "SSH", "Git", "Netcat", "OpenSSL"],
    keyLearning:
      "Strengthened core Linux command-line fluency and an intuition for privilege escalation and file-permission edge cases used throughout offensive security work.",
    githubUrl: "https://github.com/ShakthivelB/over-the-wire-bandit-challange",
    featured: true,
  },
  {
    title: "Linux Update Automation",
    category: "Security Automation",
    securityRelevance:
      "Keeping systems patched is a baseline defensive control — this script reduces the manual effort of staying current on Debian-based hosts.",
    description:
      "A Bash script that automates system updates on Debian-based Linux distributions, including Kali Linux and Ubuntu.",
    purpose:
      "Reduce manual, repetitive system maintenance by automating apt-based update workflows across Debian-based systems.",
    approach:
      "Detects the underlying OS (Kali or Ubuntu), then runs a sequence of update commands (`apt update`, `apt upgrade`, `apt-get upgrade`, `dist-upgrade`). Installable to `/usr/local/bin` for system-wide access and can be scheduled via cron for hands-off automation.",
    technologies: ["Bash", "Linux", "cron"],
    keyLearning:
      "Practical experience writing portable shell automation and thinking about maintainability for system administration tasks.",
    githubUrl: "https://github.com/ShakthivelB/Linux_update_Automation",
    featured: true,
  },
  {
    title: "Splunk SOC Home Lab — SSH Brute-Force Detection",
    category: "Security Operations",
    large: true,
    securityRelevance:
      "End-to-end SOC detection workflow — log collection, SPL-based correlation, dashboarding, and a basic response action — mirroring how SSH brute-force attacks are triaged in a real SOC.",
    description:
      "A home-lab SOC setup using Splunk to detect SSH brute-force attacks in near real time, built across attacker, target, and SIEM virtual machines.",
    purpose:
      "Get hands-on experience with the full SOC detection lifecycle — log collection, forwarding, correlation, and dashboarding — using a realistic attack scenario.",
    approach:
      "Simulated a brute-force attack from a Kali Linux attacker VM against a Linux Mint target using Hydra. Authentication logs were shipped via Splunk Universal Forwarder to a Splunk Enterprise instance, where an SPL query (`\"Failed password\" | stats count by src_ip | where count > 10`) flagged repeated failed logins, visualized on a dashboard, with detected IPs blocked via UFW.",
    technologies: [
      "Splunk Enterprise",
      "Splunk Universal Forwarder",
      "Kali Linux",
      "Linux Mint",
      "Hydra",
      "UFW",
      "VirtualBox",
    ],
    keyLearning:
      "Direct, hands-on exposure to the SOC investigation workflow: collecting logs, writing detection queries, building dashboards, and taking a basic response action.",
    githubUrl: "https://github.com/ShakthivelB/splunk-soc-home-lab",
    featured: true,
  },
  {
    title: "Caesar Cipher Tool",
    category: "Cryptography",
    securityRelevance:
      "Classical cipher analysis and brute-force logic that show up repeatedly in CTF crypto challenges.",
    description:
      "A command-line Python tool implementing the Caesar Cipher for encryption, decryption, and brute-force cryptanalysis.",
    purpose:
      "Practice core cryptography and programming fundamentals applicable to CTF cipher-analysis challenges.",
    approach:
      "Menu-driven CLI supporting shift-based encryption/decryption plus a brute-force mode that tests all 25 possible shifts automatically, while preserving character case and leaving non-alphabetic characters unchanged.",
    technologies: ["Python"],
    keyLearning:
      "Reinforced string manipulation, modular arithmetic, and basic brute-force cryptanalysis logic — foundational concepts for CTF and cipher-analysis work.",
    githubUrl: "https://github.com/ShakthivelB/Caesar-Cipher-Tool",
    featured: true,
  },
  {
    title: "TODO — 5th Featured Project",
    category: "TODO",
    securityRelevance: "",
    description: "Pending confirmed details from Shakthivel before publishing.",
    purpose: "",
    approach: "",
    technologies: [],
    keyLearning: "",
    githubUrl: "",
    featured: false,
    todo: "CLAUDE.md originally listed a 'network-scanning' repo, but it 404s and isn't in the current GitHub repo list. Awaiting correct project details.",
  },
];
