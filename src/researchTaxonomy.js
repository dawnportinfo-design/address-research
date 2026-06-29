export const researchAreas = [
  {
    id: "address-data-structure-theory",
    layer: "foundation",
    title: "Address Data Structure Theory",
    focus: ["tree", "graph", "hash-space", "namespace"],
    coreQuestion: "Which data structures preserve address hierarchy, aliasing, history, and lookup efficiency?",
    outputs: ["formal model", "complexity notes", "interoperability constraints"],
    safetyBoundary: "No raw personal address fixtures."
  },
  {
    id: "address-formal-language-theory",
    layer: "foundation",
    title: "Address Formal Language Theory",
    focus: ["grammar", "parser", "normalization", "error-model"],
    coreQuestion: "Can surface address expressions be parsed as country-relative formal languages?",
    outputs: ["grammar sketches", "parser contracts", "negative examples"],
    safetyBoundary: "Use synthetic strings and redacted components only."
  },
  {
    id: "address-morphism-theory",
    layer: "foundation",
    title: "Address Morphism Theory",
    focus: ["referent", "morphism", "PID", "history", "quality"],
    coreQuestion: "How can address forms map to stable referents without pretending every input is fully resolvable?",
    outputs: ["axioms", "theorem statements", "compatibility contracts"],
    safetyBoundary: "Do not publish resolvable household-level examples."
  },
  {
    id: "address-distributed-id-theory",
    layer: "foundation",
    title: "Address Distributed ID Theory",
    focus: ["DID", "unique-identifier", "namespace", "revocation"],
    coreQuestion: "How should address identifiers remain unique, portable, revocable, and governance-aware?",
    outputs: ["identifier profile", "revocation model", "namespace policy"],
    safetyBoundary: "Identifiers must be synthetic or commitment-based."
  },
  {
    id: "address-privacy-proof-theory",
    layer: "foundation",
    title: "Address Privacy Proof Theory",
    focus: ["ZKP", "commitment", "predicate", "consent", "inclusion"],
    coreQuestion: "What can be proven about an address without revealing the address?",
    outputs: ["predicate catalog", "threat model", "circuit-readiness matrix"],
    safetyBoundary: "No witnesses, proof secrets, private keys, or decrypted payloads."
  },
  {
    id: "international-address-structure-theory",
    layer: "foundation",
    title: "International Address Structure Theory",
    focus: ["country-model", "administrative-comparison", "geopolitics", "normalization"],
    coreQuestion: "Which abstractions survive across postal-rich, postal-weak, and no-postal-code countries?",
    outputs: ["country model taxonomy", "source policy", "edge-case catalog"],
    safetyBoundary: "Do not claim political sovereignty decisions; model technical addressing only."
  },
  {
    id: "address-ux-standard",
    layer: "application",
    title: "Address UX Standard",
    focus: ["form", "autocomplete", "error-recovery", "cognitive-load"],
    coreQuestion: "How should users register and correct addresses with minimal confusion and privacy exposure?",
    outputs: ["UX patterns", "validation states", "accessibility notes"],
    safetyBoundary: "Never expose raw address by default in demos."
  },
  {
    id: "address-logistics-protocol",
    layer: "application",
    title: "Address Logistics Protocol",
    focus: ["carrier", "EC", "WMS", "locker", "handoff"],
    coreQuestion: "How should delivery systems pass address capability without leaking unnecessary address text?",
    outputs: ["message contracts", "receipt model", "offline queue rules"],
    safetyBoundary: "Use alias, receipt, deliverability, and policy status instead of raw address."
  },
  {
    id: "international-schema-multilingual-standard",
    layer: "application",
    title: "International Address Schema and Multilingual Standard",
    focus: ["schema", "translation", "transliteration", "field-mapping"],
    coreQuestion: "How can address structure remain stable across languages and forms?",
    outputs: ["schema profile", "translation policy", "field mapping tests"],
    safetyBoundary: "Avoid real recipient examples."
  },
  {
    id: "trust-attack-permission-model",
    layer: "application",
    title: "Address Trust, Attack, and Permission Model",
    focus: ["threat-model", "access-control", "audit", "abuse"],
    coreQuestion: "Who may see, transform, prove, or revoke address-derived data?",
    outputs: ["threat model", "permission matrix", "abuse cases"],
    safetyBoundary: "No secrets or operational credentials."
  },
  {
    id: "address-infrastructure-economics",
    layer: "application",
    title: "Address Infrastructure Economics",
    focus: ["public-goods", "fee-model", "standards-competition", "adoption"],
    coreQuestion: "What incentives keep address infrastructure open, accurate, and useful?",
    outputs: ["adoption model", "funding map", "market failure notes"],
    safetyBoundary: "Keep claims as research hypotheses unless measured."
  },
  {
    id: "sdk-api-verification-engineering",
    layer: "implementation-science",
    title: "Address SDK/API Design and Verification Engineering",
    focus: ["SDK", "API", "conformance", "test-vector"],
    coreQuestion: "How can address theory become safe, testable developer interfaces?",
    outputs: ["API contract", "test vector profile", "release gates"],
    safetyBoundary: "Public tests must be raw-address free."
  },
  {
    id: "database-normalization-optimization",
    layer: "implementation-science",
    title: "Address Database Normalization and Optimization",
    focus: ["normal-form", "index", "history", "query-plan"],
    coreQuestion: "How should address databases separate referents, labels, history, and evidence?",
    outputs: ["schema sketches", "index strategy", "complexity notes"],
    safetyBoundary: "No private production data."
  },
  {
    id: "cache-network-distributed-delivery",
    layer: "implementation-science",
    title: "Address Cache Network and Distributed Delivery",
    focus: ["cache", "edge", "replication", "freshness"],
    coreQuestion: "How can address data be distributed without stale, unsafe, or overbroad disclosure?",
    outputs: ["cache policy", "freshness root model", "replication constraints"],
    safetyBoundary: "Cache metadata and public aggregates only."
  },
  {
    id: "universal-id-namespace",
    layer: "implementation-science",
    title: "Universal Address ID Namespace Design",
    focus: ["AGID", "PID", "AOID", "alias", "commitment"],
    coreQuestion: "Which identifiers should be global, local, private, revocable, or application-specific?",
    outputs: ["namespace registry", "collision policy", "lifecycle rules"],
    safetyBoundary: "Do not publish reversible identifiers for private locations."
  }
];

export function areasByLayer(layer) {
  return researchAreas.filter((area) => area.layer === layer);
}

export function validateResearchTaxonomy(areas = researchAreas) {
  const ids = new Set();
  const errors = [];

  for (const area of areas) {
    if (!area.id || ids.has(area.id)) errors.push(`invalid-or-duplicate-id:${area.id}`);
    ids.add(area.id);
    if (!["foundation", "application", "implementation-science"].includes(area.layer)) {
      errors.push(`invalid-layer:${area.id}`);
    }
    for (const field of ["title", "coreQuestion", "safetyBoundary"]) {
      if (!area[field] || area[field].trim().length < 12) errors.push(`weak-${field}:${area.id}`);
    }
    if (!Array.isArray(area.focus) || area.focus.length < 3) errors.push(`weak-focus:${area.id}`);
    if (!Array.isArray(area.outputs) || area.outputs.length < 2) errors.push(`weak-outputs:${area.id}`);
  }

  return errors;
}

export function crossRepositoryRoles() {
  return {
    "address-research": "umbrella research map and terminology coordination",
    "address-morphism-theory": "formal address referent, morphism, PID, history, and quality theory",
    "zk-address-predicates": "privacy-preserving proofs over AMT-compatible commitments and verifier policy",
    "Address-Grid-ID": "application, SDK, country packs, postal forge, and demos"
  };
}

