export const computableAMTFoundations = [
  {
    id: "graph-theory",
    priority: 1,
    title: "Graph Theory",
    role: "Model addresses as graphs rather than only as trees.",
    concepts: [
      "address graph",
      "equivalence class",
      "shortest path",
      "connected component",
      "lineage graph",
      "conflict graph"
    ],
    strengthensChapters: [
      "history graph",
      "equivalence classes",
      "unresolved states",
      "social continuity"
    ],
    firstModels: [
      "referent-expression-source graph",
      "alias and historical name edges",
      "conflict component detection"
    ],
    safetyRule: "Graph examples use synthetic nodes, commitments, and abstract regions only."
  },
  {
    id: "information-theory",
    priority: 2,
    title: "Information Theory",
    role: "Measure ambiguity, redundancy, compression, and identifier length.",
    concepts: [
      "entropy",
      "mutual information",
      "code length",
      "ambiguity reduction",
      "error-correcting code",
      "compression ratio"
    ],
    strengthensChapters: [
      "address compression",
      "address entropy",
      "postal code information optimization",
      "AGID and PID length design"
    ],
    firstModels: [
      "candidate-set entropy",
      "ambiguity reduction score",
      "lossless identifier compression bound"
    ],
    safetyRule: "Information metrics operate on candidate counts and synthetic distributions, not raw addresses."
  },
  {
    id: "computational-geometry",
    priority: 3,
    title: "Computational Geometry",
    role: "Represent address referents as points, regions, boundaries, cells, and containment relations.",
    concepts: [
      "Voronoi diagram",
      "Delaunay triangulation",
      "polygon containment",
      "spatial index",
      "boundary stability",
      "Hausdorff distance"
    ],
    strengthensChapters: [
      "natural and cultural geography",
      "candidate generation",
      "postal zone generation",
      "deliverability"
    ],
    firstModels: [
      "geometry-free containment contract",
      "boundary uncertainty state",
      "spatial stability score"
    ],
    safetyRule: "Public fixtures should use generalized cells and abstract boundaries, not precise private coordinates."
  },
  {
    id: "operations-research",
    priority: 4,
    title: "Operations Research",
    role: "Treat postal zones, delivery areas, and address services as optimization problems.",
    concepts: [
      "facility location",
      "vehicle routing",
      "load balancing",
      "minimum cut",
      "assignment problem",
      "multi-objective optimization"
    ],
    strengthensChapters: [
      "evaluation functions",
      "quality and reputation",
      "minimum postal code count",
      "delivery time minimization",
      "disaster reconfiguration"
    ],
    firstModels: [
      "postal-equivalent optimization objective",
      "delivery load balancing constraint",
      "safe reconfiguration objective"
    ],
    safetyRule: "Optimization examples use aggregate demand and synthetic zones, not delivery recipient data."
  },
  {
    id: "game-tree-search",
    priority: 5,
    title: "Game-Tree Search",
    role: "Resolve ambiguous address candidates with search, pruning, policy, and value scoring.",
    concepts: [
      "beam search",
      "alpha-beta pruning",
      "Monte Carlo Tree Search",
      "transposition table",
      "policy and value scoring",
      "iterative deepening"
    ],
    strengthensChapters: [
      "candidate generation",
      "source policy",
      "manual review",
      "PID issuance"
    ],
    firstModels: [
      "candidate search pipeline",
      "source-priority pruning",
      "counterexample-aware PID gate"
    ],
    safetyRule: "Search must preserve uncertainty and may return manual required instead of forcing a winner."
  },
  {
    id: "thomson-problem",
    priority: 6,
    title: "Thomson-Style Spherical Reference Placement",
    role: "Create balanced reference points on the sphere for no-postcode, island, ocean, desert, mountain, and fallback-grid regions.",
    concepts: [
      "spherical energy minimization",
      "balanced point distribution",
      "global fallback grid",
      "island representative point",
      "ocean reference cell",
      "natural geography seed"
    ],
    strengthensChapters: [
      "no-postcode countries",
      "virtual towns",
      "ocean AGID",
      "natural geography",
      "global fallback grid"
    ],
    firstModels: [
      "balanced fallback reference set",
      "island and ocean seed policy",
      "non-addressed region placement rule"
    ],
    safetyRule: "Use Thomson-style placement as a reference distribution model, not as a claim about real addresses."
  }
];

export const computableAMTIntegratedModel = {
  equation: [
    "Address Graph",
    "Spatial Geometry",
    "Search Algorithm",
    "Optimization Objective",
    "Information Measure",
    "History and Governance"
  ],
  definition:
    "Address Morphism Theory treats addresses as socially, spatially, historically, and computationally constrained referents that can be safely generated, mapped, compressed, verified, and updated.",
  pipeline: [
    "surface expression",
    "candidate generation",
    "candidate pruning",
    "trust and quality scoring",
    "counterexample check",
    "PID issuance or manual review"
  ]
};

export function ambiguityReduction(beforeCandidateCount, afterCandidateCount) {
  if (beforeCandidateCount <= 0 || afterCandidateCount <= 0) return 0;
  if (afterCandidateCount > beforeCandidateCount) return 0;
  const beforeEntropy = Math.log2(beforeCandidateCount);
  const afterEntropy = Math.log2(afterCandidateCount);
  if (beforeEntropy === 0) return 1;
  return round4((beforeEntropy - afterEntropy) / beforeEntropy);
}

export function rankComputableAMTFoundations() {
  return [...computableAMTFoundations].sort((a, b) => a.priority - b.priority);
}

export function validateComputableAMTFoundations(fields = computableAMTFoundations) {
  const errors = [];
  const ids = new Set();

  for (const field of fields) {
    if (!field.id || ids.has(field.id)) errors.push(`duplicate-foundation:${field.id}`);
    ids.add(field.id);
    if (!Number.isInteger(field.priority) || field.priority < 1) errors.push(`invalid-priority:${field.id}`);
    if (!field.title || field.title.length < 6) errors.push(`weak-title:${field.id}`);
    for (const key of ["role", "safetyRule"]) {
      if (!field[key] || field[key].length < 20) errors.push(`weak-${key}:${field.id}`);
    }
    for (const key of ["concepts", "strengthensChapters", "firstModels"]) {
      if (!Array.isArray(field[key]) || field[key].length < 3) errors.push(`weak-${key}:${field.id}`);
    }
  }

  for (const required of ["Address Graph", "Spatial Geometry", "Search Algorithm", "Optimization Objective", "Information Measure", "History and Governance"]) {
    if (!computableAMTIntegratedModel.equation.includes(required)) errors.push(`missing-equation-part:${required}`);
  }

  if (computableAMTIntegratedModel.pipeline.at(-1) !== "PID issuance or manual review") {
    errors.push("pipeline-must-end-with-safe-gate");
  }

  return errors;
}

function round4(value) {
  return Math.round(value * 10000) / 10000;
}
