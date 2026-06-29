# Address Research

Address Research is a research map for treating addresses as computable, verifiable, privacy-aware infrastructure.

The repository is intentionally broader than a single paper. It organizes foundational theories, applied protocols, implementation science, and governance questions around address data, address identifiers, postal systems, logistics, privacy proofs, and international interoperability.

## Why This Exists

Addresses are often treated as text fields. That is too weak for global delivery, public infrastructure, identity proofing, privacy-preserving sharing, postal-code design, machine handoff, and cross-border commerce.

This repository studies addresses as:

- structured data
- graphs and grammars
- identifiers and commitments
- logistics protocol messages
- privacy-preserving claims
- mutable historical records
- public-interest infrastructure

## Research Areas

### Foundations

- Address data structure theory: trees, graphs, hash spaces, and namespace design.
- Address formal language theory: grammars, parsers, normalization, and error models.
- Address morphism theory: mapping between surface forms, country models, IDs, and referents.
- Address distributed ID theory: DID-compatible address identifiers and unique namespaces.
- Address privacy proof theory: zero-knowledge predicates for existence, inclusion, consent, and validity.
- International address structure theory: country models, administrative hierarchy, geopolitical constraints, logistics data engineering, normalization, and database foundations.

### Applications

- Address UX standard design: forms, autocomplete, error recovery, and cognitive load.
- Address logistics protocol: carrier, EC, WMS, locker, POS, field, and machine handoff.
- International address schema and multilingual standardization.
- Address trust, attack model, and permission control.
- Address infrastructure economics: protocol use, fee models, public goods, and standards competition.

### Implementation Science

- Address SDK/API design and verification engineering.
- Address database normalization and optimization.
- Address cache networks and distributed delivery.
- Universal address ID namespace design.

## Relationship To Other Repositories

This repository is the research umbrella. More specialized repositories should remain separate:

- `address-morphism-theory`: formal referent, morphism, PID, history, and quality theory.
- `zk-address-predicates`: proof-only address predicates over commitments and verifier policy.
- `Address-Grid-ID`: application, SDK, country packs, postal forge, and demo implementation.
- future country-pack repositories: jurisdiction-specific data policy and fixtures.

## Safety Boundary

Do not store raw personal addresses, recipient data, private keys, ZK witnesses, decrypted QR payloads, or proof secrets in this repository. Examples must use synthetic referents, commitments, aliases, abstract regions, or redacted fixtures.

## Quick Start

```bash
npm test
```

The initial tests verify that every research area has an owner layer, publication role, safety boundary, and relationship to the wider AGID ecosystem.

