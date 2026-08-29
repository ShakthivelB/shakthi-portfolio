export interface ExperienceEntry {
  role: string;
  company: string;
  project?: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Technical Support Engineer",
    company: "IBM",
    project: "AusNet Energy & Utility",
    startDate: "March 2025",
    endDate: "Present",
    location: "Bangalore, India",
    responsibilities: [
      "Managing and analyzing energy and utility field data",
      "Investigating system alerts and service requests",
      "Supporting log analysis and root cause identification",
      "Maintaining operational reliability and data accuracy",
      "Working across SAP, SDME, Nexos, AutoCAD, and SCADA systems",
      "Tracking and resolving requests via ServiceNow and Jira",
    ],
    technologies: [
      "SAP",
      "SCADA",
      "SDME",
      "Nexos",
      "AutoCAD",
      "ServiceNow",
      "Jira",
      "IBM Watsonx",
      "IBM Consulting Advantage (ICA GenAI)",
      "IBM BOB",
    ],
  },
];
