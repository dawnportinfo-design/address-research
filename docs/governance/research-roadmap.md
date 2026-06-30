# Research Roadmap

This roadmap turns the repository from a taxonomy into a research program.

## M0: Research Taxonomy and Safety Boundary

Status: current foundation.

Deliverables:

- field registry
- layer model
- raw-address-free publication rule

Exit criteria:

- every field has an owner layer
- tests verify taxonomy integrity
- README explains repository role

## M1: Formal AMT Core Dependencies

Horizon: 30 days.

Deliverables:

- set, equivalence, and order notes
- morphism compatibility contract
- quality-state vocabulary

Exit criteria:

- AMT dependencies are mapped to Address Information Engineering layers
- unverified claims are labeled

## M2: Privacy and Proof Boundary

Horizon: 60 days.

Deliverables:

- proof predicate registry
- public signal safety notes
- ZK-readiness matrix

Exit criteria:

- AMT-to-ZK data boundary is explicit
- witness and proof-secret material are excluded from fixtures

## M3: One Strong Demo Vertical

Horizon: 90 days.

The best demo is a no-postcode or weak-postcode flow:

```text
AGID region
  -> postal-equivalent candidate
  -> validation state
  -> AMT-compatible referent
  -> proof-only claim
  -> receipt or handoff
```

Exit criteria:

- one fixture passes AMT, validation, ZK boundary, SDK contract, and congestion metrics
- no raw address, recipient, witness, private key, or proof secret appears in public fixtures

## M4: Benchmark and Empirical Program

Horizon: 180 days.

Deliverables:

- synthetic corpus
- country-model benchmark
- API latency benchmark
- morphism accuracy report

Exit criteria:

- benchmarks avoid raw addresses
- verified claims are separated from hypotheses

