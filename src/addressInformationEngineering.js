export const addressInformationEngineeringLayers = [
  {
    id: "mathematics-information-theory",
    japaneseTitle: "数学・情報理論",
    purpose: "Define the formal objects, relations, limits, and complexity of address information.",
    fields: [
      "address-set-theory",
      "address-equivalence-theory",
      "address-order-theory",
      "address-category-theory",
      "address-information-theory",
      "address-complexity-theory",
      "address-compression-theory",
      "address-redundancy-theory"
    ],
    coreQuestion: "What mathematical structure does an address have before it becomes a form field or database row?",
    firstDeliverable: "Formal glossary for set, equivalence, order, morphism, entropy, complexity, compression, and redundancy."
  },
  {
    id: "data-models",
    japaneseTitle: "データモデル",
    purpose: "Represent address meaning, metadata, schema, namespace, and reference behavior.",
    fields: [
      "address-ontology",
      "address-knowledge-representation",
      "address-semantic-model",
      "address-metadata-theory",
      "address-schema-theory",
      "address-namespace-theory",
      "address-reference-model"
    ],
    coreQuestion: "How should address knowledge be represented so systems can preserve meaning across countries and use cases?",
    firstDeliverable: "Canonical data-model note separating expression, referent, evidence, source, metadata, namespace, and schema."
  },
  {
    id: "spatial-theory",
    japaneseTitle: "空間理論",
    purpose: "Model addresses as spatial, regional, boundary-sensitive, and partitionable objects.",
    fields: [
      "address-space-theory",
      "address-neighborhood-theory",
      "address-boundary-theory",
      "address-containment-theory",
      "address-region-theory",
      "address-spatial-partition-theory"
    ],
    coreQuestion: "How does an address referent relate to space, neighborhoods, boundaries, containment, and regions?",
    firstDeliverable: "Geometry-free public model for containment, boundary uncertainty, and region partition."
  },
  {
    id: "temporal-theory",
    japaneseTitle: "時間",
    purpose: "Represent address history, administrative change, versioning, persistence, and evolution.",
    fields: [
      "address-time-series-theory",
      "address-history-theory",
      "address-evolution-theory",
      "address-version-theory",
      "address-persistence-theory"
    ],
    coreQuestion: "How can an address remain socially continuous while names, boundaries, and administrative structures change?",
    firstDeliverable: "Valid-time and transaction-time model for address lineage and successor relations."
  },
  {
    id: "quality-theory",
    japaneseTitle: "品質",
    purpose: "Measure completeness, uniqueness, consistency, missingness, ambiguity, and fitness for use.",
    fields: [
      "address-quality-theory",
      "address-completeness-theory",
      "address-uniqueness-theory",
      "address-consistency-theory",
      "address-missingness-theory",
      "address-ambiguity-theory"
    ],
    coreQuestion: "When is address information good enough for registration, delivery, proof, or automation?",
    firstDeliverable: "Quality-state taxonomy: verified, partial, manual required, ambiguous, unresolved, deprecated, and disputed."
  },
  {
    id: "computation-theory",
    japaneseTitle: "計算理論",
    purpose: "Define search, indexing, comparison, matching, inference, and optimization over address information.",
    fields: [
      "address-search-theory",
      "address-index-theory",
      "address-comparison-theory",
      "address-matching-theory",
      "address-inference-theory",
      "address-optimization-theory"
    ],
    coreQuestion: "Which computations over addresses are exact, approximate, probabilistic, expensive, or unsafe?",
    firstDeliverable: "Complexity and safety matrix for parsing, search, matching, inference, and optimization."
  },
  {
    id: "distributed-infrastructure",
    japaneseTitle: "分散基盤",
    purpose: "Synchronize, replicate, reach consensus, remain available, and tolerate failure across address systems.",
    fields: [
      "address-synchronization-theory",
      "address-replication-theory",
      "address-consensus-theory",
      "address-availability-theory",
      "address-fault-tolerance-theory"
    ],
    coreQuestion: "How should address information remain fresh, consistent enough, and available across local-first and global systems?",
    firstDeliverable: "Distributed address-state model with freshness roots, source versions, conflict states, and recovery policy."
  }
];

export function allAddressInformationFields(layers = addressInformationEngineeringLayers) {
  return layers.flatMap((layer) => layer.fields.map((field) => ({ field, layer: layer.id })));
}

export function validateAddressInformationEngineering(layers = addressInformationEngineeringLayers) {
  const errors = [];
  const layerIds = new Set();
  const fieldIds = new Set();

  for (const layer of layers) {
    if (!layer.id || layerIds.has(layer.id)) errors.push(`duplicate-layer:${layer.id}`);
    layerIds.add(layer.id);
    if (!layer.japaneseTitle || layer.japaneseTitle.length < 2) errors.push(`weak-japaneseTitle:${layer.id}`);
    for (const key of ["purpose", "coreQuestion", "firstDeliverable"]) {
      if (!layer[key] || layer[key].length < 6) errors.push(`weak-${key}:${layer.id}`);
    }
    if (!Array.isArray(layer.fields) || layer.fields.length < 5) errors.push(`too-few-fields:${layer.id}`);
    for (const field of layer.fields ?? []) {
      if (fieldIds.has(field)) errors.push(`duplicate-field:${field}`);
      fieldIds.add(field);
      if (!field.startsWith("address-")) errors.push(`non-address-field:${field}`);
    }
  }

  return errors;
}
