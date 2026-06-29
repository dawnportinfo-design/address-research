export const congestionSurfaces = [
  {
    id: "address-api-congestion",
    title: "Address API Congestion",
    bottleneck: "request bursts, rate limits, load balancer saturation, cache bypass",
    example: "Large commerce event causes validation and autocomplete spikes.",
    primaryMetrics: ["ACI", "AT", "ART", "AQL", "ACHR"],
    mitigation: ["adaptive rate limits", "regional caching", "bulk prevalidation", "degraded-but-safe responses"]
  },
  {
    id: "address-input-congestion",
    title: "Address Input Congestion",
    bottleneck: "user hesitation, autocomplete delay, field ambiguity, cognitive overload",
    example: "Users stall at country-specific fields or ambiguous postal-code prompts.",
    primaryMetrics: ["ACI", "ART", "AQL"],
    mitigation: ["progressive disclosure", "country-aware forms", "partial save", "manual-required state"]
  },
  {
    id: "address-database-congestion",
    title: "Address Database Congestion",
    bottleneck: "hot indexes, write contention, lock wait, query fanout",
    example: "Administrative boundary update competes with validation reads.",
    primaryMetrics: ["ACI", "AT", "ART", "AQL"],
    mitigation: ["read replicas", "event sourcing", "partitioned indexes", "backpressure"]
  },
  {
    id: "address-namespace-congestion",
    title: "Address Namespace Congestion",
    bottleneck: "ID issuance bursts, collision checks, namespace scarcity, distributed ID conflict",
    example: "Batch onboarding issues many AGID/PID candidates in one region.",
    primaryMetrics: ["ACI", "AT", "ART"],
    mitigation: ["sharded namespaces", "reservation windows", "collision budgets", "delayed public issuance"]
  },
  {
    id: "address-morphism-congestion",
    title: "Address Morphism Congestion",
    bottleneck: "multi-stage conversion, candidate explosion, AI transformation queue",
    example: "International address conversion creates too many candidate paths.",
    primaryMetrics: ["ACI", "AMD", "ART", "AQL"],
    mitigation: ["beam search", "source-priority pruning", "memoized morphism chains", "manual review thresholds"]
  },
  {
    id: "address-cache-congestion",
    title: "Address Cache Congestion",
    bottleneck: "cache miss storms, regional skew, stale invalidation, CDN placement mismatch",
    example: "A popular region misses cache after source version rotation.",
    primaryMetrics: ["ACI", "ACHR", "ART", "AQL"],
    mitigation: ["prewarm by region", "freshness roots", "stale-safe metadata", "edge partitioning"]
  },
  {
    id: "address-distributed-system-congestion",
    title: "Address Distributed System Congestion",
    bottleneck: "node hot spots, replication lag, sync waits, consensus delay",
    example: "Multiple country packs update while clients require fresh validation state.",
    primaryMetrics: ["ACI", "AT", "ART", "AQL"],
    mitigation: ["event stream partitioning", "bounded staleness", "conflict states", "local-first queues"]
  },
  {
    id: "address-permission-congestion",
    title: "Address Permission Congestion",
    bottleneck: "auth checks, token issuance, verifier policy evaluation, ZKP generation",
    example: "POS handoff waits for proof generation or verifier policy lookup.",
    primaryMetrics: ["ACI", "ART", "AQL", "AMD"],
    mitigation: ["proof precomputation", "policy caches", "short-lived aliases", "offline receipts"]
  },
  {
    id: "address-update-congestion",
    title: "Address Update Congestion",
    bottleneck: "moving season, administrative changes, batch imports, version migrations",
    example: "A national boundary update triggers many dependent source and cache updates.",
    primaryMetrics: ["ACI", "AT", "ART", "AQL"],
    mitigation: ["staged migrations", "source version windows", "delta updates", "rollback-ready manifests"]
  },
  {
    id: "address-ai-inference-congestion",
    title: "Address AI Inference Congestion",
    bottleneck: "LLM parsing queues, OCR latency, embedding lookup, model rate limits",
    example: "Support workflow sends many unclear address images to OCR and LLM parsing.",
    primaryMetrics: ["ACI", "ART", "AQL", "AMD"],
    mitigation: ["small-model first pass", "rules before LLM", "batch inference", "confidence-based bypass"]
  }
];

export const congestionMetrics = [
  {
    id: "ACI",
    name: "Address Congestion Index",
    definition: "Normalized congestion score combining queue pressure, latency, saturation, and cache miss risk.",
    direction: "lower-is-better"
  },
  {
    id: "AT",
    name: "Address Throughput",
    definition: "Completed safe address operations per unit time.",
    direction: "higher-is-better"
  },
  {
    id: "ART",
    name: "Address Response Time",
    definition: "End-to-end latency for an address operation.",
    direction: "lower-is-better"
  },
  {
    id: "AQL",
    name: "Address Queue Length",
    definition: "Waiting operations for a surface, service, worker, or proof queue.",
    direction: "lower-is-better"
  },
  {
    id: "ACHR",
    name: "Address Cache Hit Rate",
    definition: "Share of requests resolved from safe cache without private payload exposure.",
    direction: "higher-is-better"
  },
  {
    id: "AMD",
    name: "Address Mapping Delay",
    definition: "Delay introduced by morphism chains, translation, proof preparation, or AI mapping.",
    direction: "lower-is-better"
  }
];

export function calculateAddressCongestionIndex({
  responseTimeMs,
  targetResponseTimeMs,
  queueLength,
  queueCapacity,
  utilization,
  cacheMissRate
}) {
  const latencyPressure = clamp01(responseTimeMs / Math.max(targetResponseTimeMs, 1));
  const queuePressure = clamp01(queueLength / Math.max(queueCapacity, 1));
  const utilizationPressure = clamp01(utilization);
  const cachePressure = clamp01(cacheMissRate);

  return round4((0.35 * latencyPressure) + (0.3 * queuePressure) + (0.25 * utilizationPressure) + (0.1 * cachePressure));
}

export function classifyCongestion(aci) {
  if (aci < 0.35) return "clear";
  if (aci < 0.65) return "watch";
  if (aci < 0.85) return "congested";
  return "critical";
}

export function validateAddressCongestionTheory() {
  const errors = [];
  const metricIds = new Set(congestionMetrics.map((metric) => metric.id));
  const surfaceIds = new Set();

  for (const surface of congestionSurfaces) {
    if (!surface.id || surfaceIds.has(surface.id)) errors.push(`duplicate-surface:${surface.id}`);
    surfaceIds.add(surface.id);
    if (!surface.bottleneck || surface.bottleneck.length < 20) errors.push(`weak-bottleneck:${surface.id}`);
    if (!Array.isArray(surface.primaryMetrics) || surface.primaryMetrics.length < 3) {
      errors.push(`weak-metrics:${surface.id}`);
    }
    for (const metric of surface.primaryMetrics ?? []) {
      if (!metricIds.has(metric)) errors.push(`unknown-metric:${surface.id}:${metric}`);
    }
    if (!Array.isArray(surface.mitigation) || surface.mitigation.length < 3) {
      errors.push(`weak-mitigation:${surface.id}`);
    }
  }

  for (const metric of congestionMetrics) {
    if (!["lower-is-better", "higher-is-better"].includes(metric.direction)) {
      errors.push(`invalid-direction:${metric.id}`);
    }
  }

  return errors;
}

function clamp01(value) {
  if (!Number.isFinite(value)) return 1;
  return Math.max(0, Math.min(1, value));
}

function round4(value) {
  return Math.round(value * 10000) / 10000;
}

