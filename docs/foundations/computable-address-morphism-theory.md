# Computable Address Morphism Theory

This document records the six theory inputs that lift Address Morphism Theory from address-data organization into a foundation for treating addresses as computable objects.

## Core Claim

Address Morphism Theory becomes stronger when it is built from:

```text
Address Graph
+ Spatial Geometry
+ Search Algorithm
+ Optimization Objective
+ Information Measure
+ History / Governance
= Address Morphism Theory
```

In this form, an address is not merely a string or a row. It is a socially, spatially, historically, and computationally constrained referent that can be safely generated, mapped, compressed, verified, and updated.

## 1. Graph Theory

Graph theory lets AMT model addresses as graphs rather than trees.

Nodes can represent:

- administrative units
- roads
- buildings
- delivery points
- ports
- ocean regions
- historical names
- aliases
- sources
- claims

Edges can represent:

- containment
- aliasing
- historical succession
- delivery reachability
- conflict
- source support
- morphism output

Key concepts:

- address graph
- equivalence class
- shortest path
- connected component
- lineage graph
- conflict graph

Strengthens:

- history graph
- equivalence classes
- unresolved states
- social continuity

## 2. Information Theory

Information theory gives AMT a way to measure ambiguity, redundancy, compression, and identifier length.

Key concepts:

- entropy
- mutual information
- code length
- ambiguity reduction
- error-correcting code
- compression ratio

Important questions:

- How much information is required to identify a referent?
- How much ambiguity remains after a morphism?
- How short can an AGID or PID be without unsafe collision?
- How much redundancy exists in a country-specific address format?

Strengthens:

- address compression
- address entropy
- postal-code information optimization
- typo tolerance
- AGID / PID length design

## 3. Computational Geometry

Computational geometry lets AMT treat addresses as points, cells, regions, boundaries, and containment relationships.

Key concepts:

- Voronoi diagram
- Delaunay triangulation
- polygon containment
- spatial index
- boundary stability
- Hausdorff distance

Strengthens:

- natural geography
- cultural geography
- vertical reference
- candidate generation
- postal zone generation
- deliverability

Safety boundary: public examples should use generalized cells and abstract boundaries rather than precise private coordinates.

## 4. Operations Research

Operations research treats postal zones, delivery areas, service coverage, and address systems as optimization problems.

Key concepts:

- facility location
- vehicle routing
- load balancing
- minimum cut
- assignment problem
- multi-objective optimization

Possible objectives:

- delivery time minimization
- cost minimization
- delivery load balance
- postal-code count minimization
- disaster reconfiguration
- administrative-change robustness

Strengthens:

- evaluation functions
- quality and reputation
- postal-code minimum count
- disaster recovery
- postal forge design

## 5. Game-Tree Search

Candidate generation and resolution can be treated as a search problem.

Pipeline:

```text
surface expression
  -> candidate generation
  -> candidate pruning
  -> trust and quality scoring
  -> counterexample check
  -> PID issuance or manual review
```

Useful concepts:

- beam search
- alpha-beta pruning
- Monte Carlo Tree Search
- transposition table
- policy and value scoring
- iterative deepening

This helps AMT avoid exhaustive candidate expansion while preserving uncertainty. The safe result is not always one winner. Sometimes the correct output is `manual_required`.

## 6. Thomson-Style Spherical Reference Placement

The Thomson problem is useful as an analogy and modeling tool for balanced point placement on a sphere.

It should not be used as a direct claim about real addresses. It can be used as a reference distribution model for places where formal postal systems are absent or weak.

Applications:

- no-postcode regions
- islands
- ocean AGID
- deserts
- mountains
- natural geography
- virtual towns
- global fallback grid

Strengthens:

- no-postcode country theory
- virtual town theory
- ocean and natural-geography repositories
- global fallback grid design

## Safe PID Gate

The integrated theory requires a safe final gate:

```text
candidate set
  -> evidence and quality state
  -> ambiguity reduction
  -> counterexample check
  -> PID issuance or manual review
```

PID issuance is allowed only when the system has enough evidence and the remaining ambiguity is acceptable for the declared purpose.

## First Formal Deliverables

1. Address graph definition.
2. Candidate-set entropy definition.
3. Spatial containment and boundary-state contract.
4. Postal-equivalent optimization objective.
5. Candidate search and pruning algorithm.
6. Thomson-style fallback placement policy.
7. Counterexample catalog for each model.

## Non-Claims

- This does not prove every global address can be resolved.
- This does not replace official postal systems.
- This does not make private coordinates public.
- This does not allow PID issuance when ambiguity remains unsafe.
- This does not claim Thomson-style points are real addresses.

