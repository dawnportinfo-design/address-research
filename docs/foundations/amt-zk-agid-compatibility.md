# AMT / ZK / AGID Compatibility

This document defines the relationship between the research umbrella, Address Morphism Theory, ZK Address Predicates, and the AGID implementation.

## Layering

```text
address-research
  -> field taxonomy, research roadmap, verification claims

address-morphism-theory
  -> referent, morphism, PID, quality, history, source policy

zk-address-predicates
  -> proof-only predicates over AMT-compatible commitments and verifier policy

Address-Grid-ID
  -> SDK, API, app surfaces, country packs, postal forge, demos
```

## Compatibility Contract

AMT may pass these classes of values to ZK-oriented layers:

- referent commitment
- PID commitment
- quality state
- lineage root
- freshness root
- revocation root
- allowed predicate list
- verifier policy scope

AMT must not pass these public values:

- raw address text
- recipient identity
- proof witness
- private key
- decrypted QR payload
- carrier-only delivery secret

## Non-Claims

ZK cannot fix bad resolution. If AMT resolves the wrong referent, a proof layer can hide that error but cannot make the referent correct.

AGID apps cannot make a weak source authoritative. They can show quality, provenance, and manual-required states.

Research taxonomy is not a production security audit. It defines what must be audited and tested elsewhere.

## Minimal Cross-Repository Fixture

The strongest shared fixture should be:

```json
{
  "surface": "synthetic-no-postcode-region",
  "countryClass": "no-postcode",
  "referentCommitment": "commitment_example_only",
  "qualityState": "partial",
  "allowedPredicates": ["within_delivery_zone", "freshness_ok"],
  "rawAddressReturned": false
}
```

The fixture must remain synthetic and non-reconstructable.

