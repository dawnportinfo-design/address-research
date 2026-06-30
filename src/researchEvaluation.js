import { congestionSurfaces } from "./addressCongestionTheory.js";
import { addressInformationEngineeringLayers, allAddressInformationFields } from "./addressInformationEngineering.js";
import { morphismResearchFields } from "./morphismResearchProgram.js";
import { repositoryCompatibilityContracts, researchMilestones } from "./researchRoadmap.js";
import { researchAreas } from "./researchTaxonomy.js";
import { verificationClaims } from "./verificationClaims.js";

const claimWeights = {
  "verified-in-repo": 1,
  "policy-defined": 0.72,
  "prototype": 0.58,
  "partially-specified": 0.5,
  "planned": 0.24,
  "unverified": 0
};

export const evaluationDimensions = [
  {
    id: "taxonomy-coverage",
    title: "Taxonomy Coverage",
    target: 90,
    score: () => scoreFromThresholds([
      [addressInformationEngineeringLayers.length, 8, 25],
      [allAddressInformationFields().length, 40, 25],
      [researchAreas.length, 15, 20],
      [morphismResearchFields.length, 15, 20],
      [congestionSurfaces.length, 10, 10]
    ]),
    diagnosis: "The field map is broad and already test-backed."
  },
  {
    id: "formal-depth",
    title: "Formal Depth",
    target: 85,
    score: () => 58,
    diagnosis: "The repo now defines a computable AMT foundation, but axioms, theorem statements, proofs, and counterexamples mostly belong in specialist repositories."
  },
  {
    id: "verification-maturity",
    title: "Verification Maturity",
    target: 82,
    score: () => {
      const total = verificationClaims.reduce((sum, claim) => sum + (claimWeights[claim.status] ?? 0), 0);
      return Math.round((total / verificationClaims.length) * 100);
    },
    diagnosis: "Structural tests are strong; empirical and cryptographic verification remain early."
  },
  {
    id: "interop-readiness",
    title: "Interoperability Readiness",
    target: 88,
    score: () => scoreFromThresholds([
      [repositoryCompatibilityContracts.length, 4, 55],
      [researchMilestones.length, 5, 25],
      [verificationClaims.length, 5, 20]
    ]),
    diagnosis: "The repo now states how research, AMT, ZK, and AGID connect."
  },
  {
    id: "empirical-readiness",
    title: "Empirical Readiness",
    target: 75,
    score: () => 38,
    diagnosis: "Benchmark design exists, but no synthetic corpus, measured latency, or calibrated congestion dataset exists yet."
  },
  {
    id: "privacy-safety",
    title: "Privacy and Safety",
    target: 92,
    score: () => 78,
    diagnosis: "The policy is explicit and raw-address-free by design; downstream release scans need to enforce it."
  },
  {
    id: "demo-readiness",
    title: "Demo Readiness",
    target: 80,
    score: () => 42,
    diagnosis: "The no-postcode vertical is defined but not yet implemented as a shared fixture across AMT, ZK, validation, and SDK layers."
  }
];

export const strategicGoals = [
  {
    id: "goal-formal-core",
    priority: "P0",
    horizon: "10-days",
    title: "Formalize the AMT core dependency set",
    ownerRepo: "address-morphism-theory",
    raises: ["formal-depth", "verification-maturity"],
    acceptanceCriteria: [
      "define set, equivalence, order, morphism, quality state, and history graph primitives",
      "add theorem statements and at least one counterexample for each primitive family",
      "keep examples synthetic and non-reconstructable"
    ]
  },
  {
    id: "goal-cross-repo-fixture",
    priority: "P0",
    horizon: "14-days",
    title: "Create one shared synthetic fixture across research, AMT, ZK, and AGID",
    ownerRepo: "Address-Grid-ID",
    raises: ["interop-readiness", "demo-readiness", "privacy-safety"],
    acceptanceCriteria: [
      "fixture passes AMT state guard",
      "fixture exposes proof-safe commitments and no raw address",
      "fixture is referenced from address-research as the canonical demo seed"
    ]
  },
  {
    id: "goal-no-postcode-demo",
    priority: "P0",
    horizon: "21-days",
    title: "Run the no-postcode vertical end to end",
    ownerRepo: "Address-Grid-ID",
    raises: ["demo-readiness", "empirical-readiness"],
    acceptanceCriteria: [
      "AGID region to postal-equivalent candidate",
      "validation state to proof-only predicate",
      "receipt or handoff output without raw address"
    ]
  },
  {
    id: "goal-zk-boundary",
    priority: "P1",
    horizon: "30-days",
    title: "Turn the ZK boundary into a circuit-readiness matrix",
    ownerRepo: "zk-address-predicates",
    raises: ["formal-depth", "verification-maturity", "privacy-safety"],
    acceptanceCriteria: [
      "list public inputs, private witnesses, nullifier scope, and revocation roots",
      "classify predicates as ready, blocked, or research-only",
      "document non-claims and audit boundary"
    ]
  },
  {
    id: "goal-benchmark-corpus",
    priority: "P1",
    horizon: "45-days",
    title: "Create a raw-address-free benchmark corpus policy",
    ownerRepo: "address-research",
    raises: ["empirical-readiness", "verification-maturity"],
    acceptanceCriteria: [
      "define synthetic country-model fixtures",
      "define parser, matching, morphism, congestion, and proof-readiness benchmarks",
      "separate measured results from hypotheses"
    ]
  },
  {
    id: "goal-congestion-calibration",
    priority: "P2",
    horizon: "60-days",
    title: "Calibrate Address Congestion Index against synthetic load scenarios",
    ownerRepo: "address-research",
    raises: ["empirical-readiness"],
    acceptanceCriteria: [
      "simulate sale burst, moving season, source rotation, and proof queue scenarios",
      "publish ACI sensitivity analysis",
      "define safe degradation thresholds"
    ]
  }
];

export function evaluateAddressResearch() {
  const dimensions = evaluationDimensions.map((dimension) => ({
    id: dimension.id,
    title: dimension.title,
    score: dimension.score(),
    target: dimension.target,
    gap: Math.max(0, dimension.target - dimension.score()),
    diagnosis: dimension.diagnosis
  }));
  const overall = Math.round(dimensions.reduce((sum, dimension) => sum + dimension.score, 0) / dimensions.length);

  return {
    overall,
    grade: gradeForScore(overall),
    dimensions,
    goals: strategicGoals,
    summary: summarizeEvaluation(overall)
  };
}

export function validateResearchEvaluation() {
  const errors = [];
  const dimensionIds = new Set(evaluationDimensions.map((dimension) => dimension.id));
  const goalIds = new Set();

  for (const dimension of evaluationDimensions) {
    const score = dimension.score();
    if (!Number.isInteger(score) || score < 0 || score > 100) errors.push(`invalid-score:${dimension.id}`);
    if (!dimension.diagnosis || dimension.diagnosis.length < 20) errors.push(`weak-diagnosis:${dimension.id}`);
  }

  for (const goal of strategicGoals) {
    if (!goal.id || goalIds.has(goal.id)) errors.push(`duplicate-goal:${goal.id}`);
    goalIds.add(goal.id);
    if (!["P0", "P1", "P2"].includes(goal.priority)) errors.push(`invalid-priority:${goal.id}`);
    if (!Array.isArray(goal.acceptanceCriteria) || goal.acceptanceCriteria.length < 3) {
      errors.push(`weak-acceptance:${goal.id}`);
    }
    for (const raised of goal.raises ?? []) {
      if (!dimensionIds.has(raised)) errors.push(`unknown-raised-dimension:${goal.id}:${raised}`);
    }
  }

  return errors;
}

function scoreFromThresholds(parts) {
  return Math.min(100, Math.round(parts.reduce((sum, [actual, expected, weight]) => {
    return sum + Math.min(1, actual / expected) * weight;
  }, 0)));
}

function gradeForScore(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 65) return "C";
  if (score >= 50) return "D";
  return "E";
}

function summarizeEvaluation(overall) {
  if (overall >= 80) return "Strong research program; focus on proofs and empirical evidence.";
  if (overall >= 65) return "Credible research scaffold; next work should formalize and demonstrate.";
  return "Promising taxonomy; needs formal claims, fixtures, and empirical validation.";
}
