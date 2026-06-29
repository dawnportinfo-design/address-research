import assert from "node:assert/strict";
import test from "node:test";
import { areasByLayer, crossRepositoryRoles, researchAreas, validateResearchTaxonomy } from "../src/researchTaxonomy.js";

test("research taxonomy is complete enough to publish", () => {
  assert.equal(validateResearchTaxonomy().length, 0);
  assert.equal(researchAreas.length, 15);
});

test("research layers separate foundations, applications, and implementation science", () => {
  assert.equal(areasByLayer("foundation").length, 6);
  assert.equal(areasByLayer("application").length, 5);
  assert.equal(areasByLayer("implementation-science").length, 4);
});

test("every area has an explicit privacy or safety boundary", () => {
  for (const area of researchAreas) {
    assert.match(area.safetyBoundary, /(No|Do not|Never|Avoid|Keep|Use|Cache|Identifiers|Public)/);
  }
});

test("cross repository roles keep address research as the umbrella layer", () => {
  const roles = crossRepositoryRoles();
  assert.match(roles["address-research"], /umbrella research/);
  assert.match(roles["address-morphism-theory"], /formal address referent/);
  assert.match(roles["zk-address-predicates"], /privacy-preserving proofs/);
});

