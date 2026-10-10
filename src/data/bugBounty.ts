export interface BugBountyReport {
  title: string;
  program?: string;
  vulnerabilityClass?: string;
  status: "Submitted" | "Triaged" | "Resolved" | "Informational";
  description: string;
  writeupUrl?: string;
}

// No individual report details confirmed yet — CLAUDE.md §14 forbids fabricating
// vulnerability names, programs, or statuses. Populate this array once Shakthivel
// supplies real report details; the component renders a pending state until then.
export const bugBountyReports: BugBountyReport[] = [];

export const bugBountyPending = {
  pending: true,
  note: "Individual report details (program, vulnerability class, disclosure status) pending confirmation — see profile metrics for the confirmed 4+ report count.",
};
