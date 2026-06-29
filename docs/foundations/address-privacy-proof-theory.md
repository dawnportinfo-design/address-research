# Address Privacy Proof Theory

Address Privacy Proof Theory asks what can be proven about an address without revealing the address itself.

## Core Question

What can be proven about an address without revealing the address?

## Predicate Families

- Region membership.
- Delivery-zone inclusion.
- Quality threshold.
- Consent scope.
- Freshness.
- Non-revocation.
- Duplicate-resistant nullifier.

## Research Tasks

1. Define the boundary between AMT resolution and proof-only claims.
2. Build a circuit-readiness matrix for each predicate.
3. Specify public signals that do not leak address material.
4. Document threat models and non-claims.

## Safety Boundary

Do not store witnesses, proof secrets, private keys, decrypted QR payloads, or recipient data.

