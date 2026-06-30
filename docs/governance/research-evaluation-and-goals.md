# Research Evaluation and Goals

This document evaluates the repository as a research program rather than as a software product.

## Current Evaluation

The repository is strong as a taxonomy and research map. It now has:

- address information engineering layers
- address morphism expansion fields
- address congestion theory
- verification claims
- roadmap milestones
- AMT / ZK / AGID compatibility notes
- tests for registry integrity

The main weakness is not breadth. The main weakness is depth: formal axioms, theorem statements, counterexamples, empirical benchmarks, and one strong demo vertical are still early.

## Evaluation Dimensions

The code evaluates seven dimensions:

1. Taxonomy coverage.
2. Formal depth.
3. Verification maturity.
4. Interoperability readiness.
5. Empirical readiness.
6. Privacy and safety.
7. Demo readiness.

Run:

```bash
npm run evaluate
```

## Near-Term Goals

### P0: Formalize the AMT Core Dependency Set

Owner: `address-morphism-theory`.

Acceptance criteria:

- define set, equivalence, order, morphism, quality state, and history graph primitives
- add theorem statements and at least one counterexample for each primitive family
- keep examples synthetic and non-reconstructable

### P0: Create One Shared Synthetic Fixture

Owner: `Address-Grid-ID`.

Acceptance criteria:

- fixture passes AMT state guard
- fixture exposes proof-safe commitments and no raw address
- fixture is referenced from `address-research` as the canonical demo seed

### P0: Run the No-Postcode Vertical End To End

Owner: `Address-Grid-ID`.

Acceptance criteria:

- AGID region to postal-equivalent candidate
- validation state to proof-only predicate
- receipt or handoff output without raw address

### P1: Turn the ZK Boundary Into a Circuit-Readiness Matrix

Owner: `zk-address-predicates`.

Acceptance criteria:

- list public inputs, private witnesses, nullifier scope, and revocation roots
- classify predicates as ready, blocked, or research-only
- document non-claims and audit boundary

### P1: Create a Raw-Address-Free Benchmark Corpus Policy

Owner: `address-research`.

Acceptance criteria:

- define synthetic country-model fixtures
- define parser, matching, morphism, congestion, and proof-readiness benchmarks
- separate measured results from hypotheses

### P2: Calibrate Address Congestion Index

Owner: `address-research`.

Acceptance criteria:

- simulate sale burst, moving season, source rotation, and proof queue scenarios
- publish ACI sensitivity analysis
- define safe degradation thresholds

## Evaluation Rule

The repository should improve only when one of these becomes stronger:

- a claim moves from planned to prototype or verified
- a formal model gains examples and counterexamples
- a goal receives measurable acceptance criteria
- a cross-repository fixture becomes safer or more reusable
- a benchmark becomes reproducible without raw address data

