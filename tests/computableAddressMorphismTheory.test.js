import assert from "node:assert/strict";
import test from "node:test";
import {
  ambiguityReduction,
  computableAMTFoundations,
  computableAMTIntegratedModel,
  rankComputableAMTFoundations,
  validateComputableAMTFoundations
} from "../src/computableAddressMorphismTheory.js";

test("computable AMT foundations define the six requested theory inputs", () => {
  assert.equal(validateComputableAMTFoundations().length, 0);
  assert.deepEqual(rankComputableAMTFoundations().map((field) => field.id), [
    "graph-theory",
    "information-theory",
    "computational-geometry",
    "operations-research",
    "game-tree-search",
    "thomson-problem"
  ]);
  assert.equal(computableAMTFoundations.length, 6);
});

test("integrated model elevates AMT into a computable foundation theory", () => {
  assert.deepEqual(computableAMTIntegratedModel.equation, [
    "Address Graph",
    "Spatial Geometry",
    "Search Algorithm",
    "Optimization Objective",
    "Information Measure",
    "History and Governance"
  ]);
  assert.match(computableAMTIntegratedModel.definition, /safely generated, mapped, compressed, verified, and updated/);
  assert.equal(computableAMTIntegratedModel.pipeline.at(-1), "PID issuance or manual review");
});

test("ambiguity reduction is measurable without raw address data", () => {
  assert.equal(ambiguityReduction(16, 4), 0.5);
  assert.equal(ambiguityReduction(8, 1), 1);
  assert.equal(ambiguityReduction(4, 8), 0);
});

