# SDK/API Design and Verification Engineering

Address theory needs developer interfaces that are safe, testable, and hard to misuse.

## Research Tasks

1. Define API contracts for resolve, validate, translate, prove, revoke, and handoff.
2. Build conformance tests and fixture policies.
3. Separate public examples from private operational payloads.
4. Maintain compatibility with AMT, ZK predicates, and country packs.

## Safety Boundary

Public SDK examples must be raw-address free unless explicitly marked as local-only private fixtures.

