import assert from "node:assert/strict";
import test from "node:test";
import {
  repositoryCompatibilityContracts,
  researchMilestones,
  validateResearchRoadmap
} from "../src/researchRoadmap.js";

test("research roadmap has milestones with exit criteria", () => {
  assert.equal(validateResearchRoadmap().length, 0);
  assert.equal(researchMilestones.length, 5);
  assert.equal(researchMilestones[0].id, "m0-taxonomy");
  assert.equal(researchMilestones.at(-1).id, "m4-benchmark-program");
});

test("repository compatibility contracts connect research, AMT, ZK, and AGID", () => {
  const edges = repositoryCompatibilityContracts.map((contract) => `${contract.source}->${contract.target}`);
  assert.ok(edges.includes("address-research->address-morphism-theory"));
  assert.ok(edges.includes("address-morphism-theory->zk-address-predicates"));
  assert.ok(edges.includes("zk-address-predicates->Address-Grid-ID"));
});

