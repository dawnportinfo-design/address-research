# Verification Claims

Address research must distinguish verified structure, policy, prototype metrics, partial theory, and unverified ambition.

## Claim Statuses

- `verified-in-repo`: checked by tests in this repository.
- `policy-defined`: documented as a rule but requiring downstream enforcement.
- `partially-specified`: written as theory but not fully formalized.
- `planned`: required for the roadmap but not implemented.
- `prototype`: implemented as an initial model requiring calibration.
- `unverified`: idea only.

## Current Claims

### Taxonomy Integrity

Status: `verified-in-repo`.

The research taxonomy has explicit layers, field ownership, and tests.

Limitation: this proves structure, not academic completeness.

### Raw-Address-Free Policy

Status: `policy-defined`.

Public examples should not include raw personal addresses, recipients, witnesses, private keys, or proof secrets.

Limitation: downstream repositories need release scans and fixture gates.

### AMT Core Theory

Status: `partially-specified`.

Address Morphism Theory is the core transformation and referent-resolution theory.

Limitation: full axioms, proof appendices, and counterexample catalog belong in `address-morphism-theory`.

### ZK Proof Boundary

Status: `planned`.

ZK address predicates should prove properties over AMT-compatible commitments and policy signals.

Limitation: real circuits, audits, and witness-safe tooling are out of scope here.

### Congestion Metrics

Status: `prototype`.

Address congestion can be measured with ACI, AT, ART, AQL, ACHR, and AMD.

Limitation: metric weights are an initial operational model and need empirical calibration.

