import type { IconType } from "react-icons";
import { FaMicrosoft, FaWindows } from "react-icons/fa";
import {
  SiSplunk,
  SiBurpsuite,
  SiWireshark,
  SiMetasploit,
  SiPython,
  SiGnubash,
  SiJavascript,
  SiC,
  SiAutocad,
  SiJira,
  SiSap,
} from "react-icons/si";

import wazuhLogo from "../assets/logos/wazuh.png";
import servicenowLogo from "../assets/logos/servicenow.png";
import caidoLogo from "../assets/logos/caido.png";
import nucleiLogo from "../assets/logos/nuclei.jpg";
import ffufLogo from "../assets/logos/ffuf.png";
import sqlmapLogo from "../assets/logos/sqlmap.png";
import nmapLogo from "../assets/logos/nmap.png";
import powershellLogo from "../assets/logos/powershell.png";
import ibmLogo from "../assets/logos/ibm.png";

export interface Tool {
  name: string;
  description: string;
  icon?: IconType;
  logoSrc?: string;
  /** No verified official logo exists for this tool — renders a neutral fallback icon, never a substitute brand mark. */
  fallback?: boolean;
}

export interface SkillCategory {
  category: string;
  tools: Tool[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Security Operations",
    tools: [
      { name: "Splunk", description: "SIEM platform used for log search, correlation, and detection dashboards.", icon: SiSplunk },
      { name: "Wazuh", description: "Open-source SIEM/XDR used for log analysis and threat detection in the home lab.", logoSrc: wazuhLogo },
      { name: "Microsoft Sentinel", description: "Cloud-native SIEM explored for security monitoring and investigation workflows.", icon: FaMicrosoft },
      { name: "Windows Event Viewer", description: "Reviewing Windows system, security, and application logs.", icon: FaWindows },
      { name: "ServiceNow", description: "Used at IBM for tracking and investigating service requests and alerts.", logoSrc: servicenowLogo },
    ],
  },
  {
    category: "Offensive Security / Bug Bounty",
    tools: [
      { name: "Burp Suite", description: "Web application security testing and bug bounty research.", icon: SiBurpsuite },
      { name: "Nmap", description: "Network scanning and host/service discovery.", logoSrc: nmapLogo },
      { name: "Nuclei", description: "Template-based vulnerability scanning for automated recon.", logoSrc: nucleiLogo },
      { name: "Nikto", description: "Web server scanner used to identify common misconfigurations.", fallback: true },
      { name: "Gobuster", description: "Directory and DNS brute-forcing during reconnaissance.", fallback: true },
      { name: "ffuf", description: "Fast web fuzzer used for content and parameter discovery.", logoSrc: ffufLogo },
      { name: "sqlmap", description: "Automated testing and validation of SQL injection.", logoSrc: sqlmapLogo },
      { name: "Metasploit", description: "Exploitation framework used in lab environments for testing.", icon: SiMetasploit },
      { name: "Wireshark", description: "Packet capture and network traffic analysis.", icon: SiWireshark },
      { name: "Caido", description: "Web proxy used for intercepting and analyzing HTTP traffic.", logoSrc: caidoLogo },
    ],
  },
  {
    category: "Programming",
    tools: [
      { name: "Python", description: "Primary scripting language for automation and tooling.", icon: SiPython },
      { name: "Bash", description: "Shell scripting for Linux automation and system tasks.", icon: SiGnubash },
      { name: "PowerShell", description: "Scripting on Windows systems and automation tasks.", logoSrc: powershellLogo },
      { name: "JavaScript", description: "Used for building this portfolio and general web scripting.", icon: SiJavascript },
      { name: "C", description: "Currently learning for reverse engineering fundamentals.", icon: SiC },
    ],
  },
  {
    category: "Enterprise Technologies",
    tools: [
      { name: "IBM", description: "Current employer — Technical Support Engineer role.", logoSrc: ibmLogo },
      { name: "SAP", description: "Enterprise software used for field data on the AusNet project.", icon: SiSap },
      { name: "SCADA", description: "Industrial control systems used in the AusNet energy & utility project.", fallback: true },
      { name: "Nexos", description: "Utility operations platform used on the AusNet project.", fallback: true },
      { name: "SDME", description: "Field data management tool used on the AusNet project.", fallback: true },
      { name: "AutoCAD", description: "Reviewing utility infrastructure drawings.", icon: SiAutocad },
      { name: "Jira", description: "Issue tracking for operational tickets and tasks.", icon: SiJira },
      { name: "IBM Watsonx", description: "IBM's AI platform used for GenAI-assisted workflows.", logoSrc: ibmLogo },
      { name: "IBM Consulting Advantage", description: "IBM's internal GenAI consulting platform.", logoSrc: ibmLogo },
      { name: "IBM BOB", description: "Internal IBM workflow and reporting tool.", logoSrc: ibmLogo },
    ],
  },
];
