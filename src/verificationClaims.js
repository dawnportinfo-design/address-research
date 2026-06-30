export const verificationClaims = [
  {
    id: "taxonomy-integrity",
    status: "verified-in-repo",
    claim: "The research taxonomy has explicit layers, field ownership, and tests.",
    evidence: ["researchTaxonomy.test.js", "addressInformationEngineering.test.js"],
    limitation: "The tests verify structure, not academic completeness."
  },
  {
    id: "raw-address-free-policy",
    status: "policy-defined",
    claim: "Public examples should not include raw personal addresses, recipients, witnesses, private keys, or proof secrets.",
    evidence: ["README.md", "docs/foundations/address-information-engineering.md"],
    limitation: "This repository states the policy; downstream repositories need release scans."
  },
  {
    id: "amt-core-theory",
    status: "partially-specified",
    claim: "Address Morphism Theory is the core transformation and referent-resolution theory.",
    evidence: ["docs/foundations/address-morphism-theory.md", "docs/foundations/address-morphism-expansion-program.md"],
    limitation: "Full axioms, proof appendices, and counterexample catalog belong in address-morphism-theory."
  },
  {
    id: "zk-proof-boundary",
    status: "planned",
    claim: "ZK address predicates should prove properties over AMT-compatible commitments and policy signals.",
    evidence: ["docs/foundations/address-privacy-proof-theory.md"],
    limitation: "Real circuits, audits, and witness-safe tooling are out of scope here."
  },
  {
    id: "congestion-metrics",
    status: "prototype",
    claim: "Address congestion can be measured with ACI, AT, ART, AQL, ACHR, and AMD.",
    evidence: ["addressCongestionTheory.test.js"],
    limitation: "Metric weights are an initial operational model and need empirical calibration."
  }
];

export function claimsByStatus(status) {
  return verificationClaims.filter((claim) => claim.status === status);
}

export function validateVerificationClaims() {
  const errors = [];
  const allowed = new Set(["verified-in-repo", "policy-defined", "partially-specified", "planned", "prototype", "unverified"]);
  const ids = new Set();

  for (const claim of verificationClaims) {
    if (!claim.id || ids.has(claim.id)) errors.push(`duplicate-claim:${claim.id}`);
    ids.add(claim.id);
    if (!allowed.has(claim.status)) errors.push(`unknown-status:${claim.id}`);
    for (const key of ["claim", "limitation"]) {
      if (!claim[key] || claim[key].length < 20) errors.push(`weak-${key}:${claim.id}`);
    }
    if (!Array.isArray(claim.evidence) || claim.evidence.length < 1) errors.push(`missing-evidence:${claim.id}`);
  }

  return errors;
}

