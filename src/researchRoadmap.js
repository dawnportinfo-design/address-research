export const researchMilestones = [
  {
    id: "m0-taxonomy",
    horizon: "now",
    title: "Research taxonomy and safety boundary",
    deliverables: ["field registry", "layer model", "raw-address-free publication rule"],
    exitCriteria: ["all fields have an owner layer", "tests verify taxonomy integrity", "README explains repository role"]
  },
  {
    id: "m1-formal-core",
    horizon: "30-days",
    title: "Formal AMT core dependencies",
    deliverables: ["set/equivalence/order notes", "morphism compatibility contract", "quality-state vocabulary"],
    exitCriteria: ["AMT dependencies are mapped to address information engineering layers", "unverified claims are labeled"]
  },
  {
    id: "m2-privacy-and-proof-boundary",
    horizon: "60-days",
    title: "Privacy proof boundary",
    deliverables: ["proof predicate registry", "public signal safety notes", "ZK-readiness matrix"],
    exitCriteria: ["AMT-to-ZK data boundary is explicit", "witness and proof-secret material are excluded from fixtures"]
  },
  {
    id: "m3-demo-vertical",
    horizon: "90-days",
    title: "One strong demo vertical",
    deliverables: ["no-postcode flow", "postal-equivalent validation", "proof-only handoff", "congestion metrics"],
    exitCriteria: [
      "one fixture passes AMT, validation, ZK boundary, SDK contract, and congestion metrics",
      "demo fixtures remain synthetic and raw-address-free"
    ]
  },
  {
    id: "m4-benchmark-program",
    horizon: "180-days",
    title: "Benchmark and empirical program",
    deliverables: ["synthetic corpus", "country-model benchmark", "API latency benchmark", "morphism accuracy report"],
    exitCriteria: ["benchmarks avoid raw addresses", "verified claims are separated from hypotheses"]
  }
];

export const repositoryCompatibilityContracts = [
  {
    source: "address-research",
    target: "address-morphism-theory",
    contract: "Research fields become formal definitions, axioms, theorem statements, and counterexamples."
  },
  {
    source: "address-morphism-theory",
    target: "zk-address-predicates",
    contract: "AMT outputs only commitments, quality states, lineage roots, and allowed predicates to proof layers."
  },
  {
    source: "zk-address-predicates",
    target: "Address-Grid-ID",
    contract: "Proof predicates are exposed as SDK/API-ready fixtures without witnesses, private keys, or raw addresses."
  },
  {
    source: "address-research",
    target: "Address-Grid-ID",
    contract: "Research metrics and safety rules become app, SDK, country-pack, and postal-forge verification gates."
  }
];

export function validateResearchRoadmap() {
  const errors = [];
  const milestoneIds = new Set();

  for (const milestone of researchMilestones) {
    if (!milestone.id || milestoneIds.has(milestone.id)) errors.push(`duplicate-milestone:${milestone.id}`);
    milestoneIds.add(milestone.id);
    if (!Array.isArray(milestone.deliverables) || milestone.deliverables.length < 3) {
      errors.push(`weak-deliverables:${milestone.id}`);
    }
    if (!Array.isArray(milestone.exitCriteria) || milestone.exitCriteria.length < 2) {
      errors.push(`weak-exit-criteria:${milestone.id}`);
    }
  }

  for (const contract of repositoryCompatibilityContracts) {
    if (!contract.source || !contract.target || !contract.contract) {
      errors.push(`weak-contract:${contract.source}:${contract.target}`);
    }
  }

  return errors;
}
