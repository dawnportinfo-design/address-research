# Address Cache Network and Distributed Delivery

Global address infrastructure needs low-latency access, but caching address-derived data can create privacy and freshness risk.

## Research Tasks

1. Define cacheable public metadata and non-cacheable private payloads.
2. Model freshness roots, source versions, revocation roots, and stale-data handling.
3. Compare CDN, edge compute, regional replica, and offline-first patterns.
4. Specify safe invalidation and audit behavior.

## Safety Boundary

Cache metadata and public aggregates only. Do not cache raw personal address material.

