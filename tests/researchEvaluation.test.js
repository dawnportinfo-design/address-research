import assert from "node:assert/strict";
import test from "node:test";
import { evaluateAddressResearch, strategicGoals, validateResearchEvaluation } from "../src/researchEvaluation.js";

test("research evaluation produces bounded scores and goals", () => {
  assert.equal(validateResearchEvaluation().length, 0);
  const evaluation = evaluateAddressResearch();
  assert.ok(evaluation.overall >= 0 && evaluation.overall <= 100);
  assert.ok(["A", "B", "C", "D", "E"].includes(evaluation.grade));
  assert.equal(evaluation.dimensions.length, 7);
  assert.equal(evaluation.goals.length, strategicGoals.length);
});

test("research evaluation identifies formal, empirical, and demo gaps", () => {
  const evaluation = evaluateAddressResearch();
  const gaps = new Map(evaluation.dimensions.map((dimension) => [dimension.id, dimension.gap]));
  assert.ok(gaps.get("formal-depth") > 0);
  assert.ok(gaps.get("empirical-readiness") > 0);
  assert.ok(gaps.get("demo-readiness") > 0);
});

test("strategic goals include P0 formal core and no-postcode demo work", () => {
  const p0 = strategicGoals.filter((goal) => goal.priority === "P0").map((goal) => goal.id);
  assert.ok(p0.includes("goal-formal-core"));
  assert.ok(p0.includes("goal-cross-repo-fixture"));
  assert.ok(p0.includes("goal-no-postcode-demo"));
});

