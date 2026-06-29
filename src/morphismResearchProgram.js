export const morphismResearchFields = [
  {
    id: "address-topology",
    priority: 1,
    group: "mathematics",
    title: "Address Topology",
    japaneseTitle: "住所位相論",
    strengthens: ["boundary", "continuity", "neighborhood", "connectedness"],
    coreQuestion: "What does continuity mean when an address referent changes across boundaries, aliases, and history?",
    reasonForAMT: "AMT needs a way to describe stable neighborhoods, boundary crossings, and discontinuities in resolution.",
    firstDeliverable: "Define open neighborhoods, boundary-sensitive continuity, and counterexamples for address referents."
  },
  {
    id: "address-semantics",
    priority: 2,
    group: "mathematics",
    title: "Address Semantics",
    japaneseTitle: "住所意味論",
    strengthens: ["meaning", "equivalence", "containment", "reference"],
    coreQuestion: "When do two different address expressions mean the same referent, and when is one contained in another?",
    reasonForAMT: "AMT cannot rely on string similarity alone; it needs meaning-preserving mappings.",
    firstDeliverable: "Define referential meaning, containment semantics, and semantic equivalence classes."
  },
  {
    id: "address-algebra",
    priority: 3,
    group: "mathematics",
    title: "Address Algebra",
    japaneseTitle: "住所代数論",
    strengthens: ["composition", "inverse", "merge", "restriction"],
    coreQuestion: "Which address operations can be composed, inverted, restricted, or safely merged?",
    reasonForAMT: "Morphism chains need algebraic laws so transformations can be checked rather than trusted.",
    firstDeliverable: "Define identity morphism, composition, partial inverse, restriction, and failure elements."
  },
  {
    id: "address-information-theory",
    priority: 4,
    group: "mathematics",
    title: "Address Information Theory",
    japaneseTitle: "住所情報量理論",
    strengthens: ["entropy", "redundancy", "compression", "ambiguity"],
    coreQuestion: "How much information is required to identify a referent under a country model and source policy?",
    reasonForAMT: "AGID, postal-equivalent regions, and aliases need measurable ambiguity and compression limits.",
    firstDeliverable: "Define address entropy, ambiguity reduction, and safe compression bounds."
  },
  {
    id: "address-metric-space",
    priority: 5,
    group: "mathematics",
    title: "Address Metric Space",
    japaneseTitle: "住所距離空間論",
    strengthens: ["distance", "similarity", "routing", "candidate-ranking"],
    coreQuestion: "What distance should be used between address referents, expressions, and delivery capabilities?",
    reasonForAMT: "AMT candidate ranking, delivery feasibility, and typo recovery require explicit distance definitions.",
    firstDeliverable: "Compare textual, graph, spatial, administrative, and logistics distance functions."
  },
  {
    id: "reversible-address-morphism",
    priority: 6,
    group: "morphism",
    title: "Reversible Address Morphism",
    japaneseTitle: "可逆住所写像論",
    strengthens: ["round-trip", "losslessness", "format-conversion", "auditability"],
    coreQuestion: "Which address transformations can be reversed without loss, and how is loss detected?",
    reasonForAMT: "International formatting and schema conversion need round-trip guarantees where possible.",
    firstDeliverable: "Define reversible morphism, round-trip test vectors, and loss certificates."
  },
  {
    id: "probabilistic-address-morphism",
    priority: 7,
    group: "morphism",
    title: "Probabilistic Address Morphism",
    japaneseTitle: "確率的住所写像論",
    strengthens: ["ambiguity", "confidence", "candidate-set", "risk"],
    coreQuestion: "How should AMT represent uncertain mappings without hiding uncertainty?",
    reasonForAMT: "Incomplete, multilingual, or postal-weak inputs produce candidate distributions, not single answers.",
    firstDeliverable: "Define candidate probability distributions, confidence calibration, and manual-review thresholds."
  },
  {
    id: "address-machine-translation",
    priority: 8,
    group: "ai",
    title: "Address Machine Translation",
    japaneseTitle: "住所機械翻訳理論",
    strengthens: ["translation", "transliteration", "schema-transfer", "purpose-specific-format"],
    coreQuestion: "How can address translation preserve structure, deliverability, and verification status?",
    reasonForAMT: "Address translation is morphism across language, country model, and purpose, not ordinary sentence translation.",
    firstDeliverable: "Define purpose-aware translation contracts and no-raw-public-fixture test vectors."
  },
  {
    id: "address-knowledge-graph",
    priority: 9,
    group: "ai",
    title: "Address Knowledge Graph",
    japaneseTitle: "住所知識グラフ論",
    strengthens: ["entity-linking", "source-evidence", "alias", "reasoning"],
    coreQuestion: "How should evidence, names, regions, routes, and referents be linked for machine reasoning?",
    reasonForAMT: "A graph representation makes source policy, equivalence, history, and conflict explicit.",
    firstDeliverable: "Define node and edge types for referents, expressions, sources, claims, and morphisms."
  },
  {
    id: "address-temporal-theory",
    priority: 10,
    group: "gis",
    title: "Address Temporal Theory",
    japaneseTitle: "住所時系列論",
    strengthens: ["history", "versioning", "administrative-change", "lineage"],
    coreQuestion: "How does an address remain socially continuous while names, boundaries, and routes change?",
    reasonForAMT: "PID issuance, successor relationships, and historical reconstruction depend on temporal semantics.",
    firstDeliverable: "Define valid-time, transaction-time, lineage roots, and successor/predecessor relations."
  },
  {
    id: "address-category-theory",
    priority: 20,
    group: "mathematics",
    title: "Address Category Theory",
    japaneseTitle: "住所圏論",
    strengthens: ["unified-morphism", "commutative-diagram", "functor", "composition"],
    coreQuestion: "Can country models, schemas, and proof layers be treated as categories and functors?",
    reasonForAMT: "Category language can unify morphism chains, schema evolution, and ZK boundary diagrams.",
    firstDeliverable: "Sketch categories for surface expressions, referents, schemas, and proof predicates."
  },
  {
    id: "address-cryptography",
    priority: 21,
    group: "security",
    title: "Address Cryptography",
    japaneseTitle: "住所暗号論",
    strengthens: ["commitment", "encryption", "secret-sharing", "authenticity"],
    coreQuestion: "Which cryptographic primitives are appropriate for address commitments, credentials, and handoff?",
    reasonForAMT: "Address privacy proofs and secure QR require explicit cryptographic boundaries.",
    firstDeliverable: "Map commitments, signatures, encryption, nullifiers, and revocation to address use cases."
  },
  {
    id: "address-replication-sync",
    priority: 22,
    group: "distributed-systems",
    title: "Address Replication and Synchronization Theory",
    japaneseTitle: "住所レプリケーション・同期理論",
    strengthens: ["consensus", "replication", "event-stream", "versioning"],
    coreQuestion: "How should address source updates propagate across local-first, regional, and global systems?",
    reasonForAMT: "History and evidence roots need synchronization rules that preserve trust and freshness.",
    firstDeliverable: "Define event types, conflict handling, stale-read policy, and source-version clocks."
  },
  {
    id: "address-spatial-information",
    priority: 23,
    group: "gis",
    title: "Address Spatial Information Theory",
    japaneseTitle: "住所空間情報論",
    strengthens: ["geohash", "feature-linking", "administrative-change", "spatial-index"],
    coreQuestion: "How should address referents relate to spatial cells, landforms, routes, and administrative polygons?",
    reasonForAMT: "AGID, postal forge, natural geography, and delivery reachability depend on spatial constraints.",
    firstDeliverable: "Define spatial reference levels and geometry-free public metadata contracts."
  },
  {
    id: "address-benchmark-engineering",
    priority: 24,
    group: "evaluation",
    title: "Address Benchmark Engineering",
    japaneseTitle: "住所ベンチマーク工学",
    strengthens: ["quality", "test-vector", "corpus", "performance"],
    coreQuestion: "How can address parsers, morphisms, validators, and proof layers be compared fairly?",
    reasonForAMT: "Research credibility requires reproducible tests and clear verified versus unverified claims.",
    firstDeliverable: "Define public synthetic corpora, country-model fixtures, and no-raw-address benchmark rules."
  }
];

export const expansionGroups = [
  "mathematics",
  "morphism",
  "security",
  "ai",
  "distributed-systems",
  "gis",
  "standardization",
  "evaluation",
  "applications"
];

export function topMorphismPriorities(limit = 10) {
  return [...morphismResearchFields]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);
}

export function validateMorphismResearchProgram(fields = morphismResearchFields) {
  const errors = [];
  const ids = new Set();

  for (const field of fields) {
    if (!field.id || ids.has(field.id)) errors.push(`duplicate-or-missing-id:${field.id}`);
    ids.add(field.id);
    if (!expansionGroups.includes(field.group)) errors.push(`unknown-group:${field.id}`);
    if (!field.japaneseTitle || field.japaneseTitle.length < 4) errors.push(`weak-japaneseTitle:${field.id}`);
    for (const key of ["title", "coreQuestion", "reasonForAMT", "firstDeliverable"]) {
      if (!field[key] || field[key].length < 10) errors.push(`weak-${key}:${field.id}`);
    }
    if (!Array.isArray(field.strengthens) || field.strengthens.length < 3) {
      errors.push(`weak-strengthens:${field.id}`);
    }
  }

  const topTen = topMorphismPriorities(10).map((field) => field.id);
  for (const required of [
    "address-topology",
    "address-semantics",
    "address-algebra",
    "address-information-theory",
    "address-metric-space",
    "reversible-address-morphism",
    "probabilistic-address-morphism",
    "address-machine-translation",
    "address-knowledge-graph",
    "address-temporal-theory"
  ]) {
    if (!topTen.includes(required)) errors.push(`missing-top-priority:${required}`);
  }

  return errors;
}
