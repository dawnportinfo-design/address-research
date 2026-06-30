import assert from "node:assert/strict";
import test from "node:test";
import { claimsByStatus, validateVerificationClaims, verificationClaims } from "../src/verificationClaims.js";

test("verification claims separate verified, planned, prototype, and partial claims", () => {
  assert.equal(validateVerificationClaims().length, 0);
  assert.ok(verificationClaims.length >= 5);
  assert.equal(claimsByStatus("verified-in-repo").length, 1);
  assert.equal(claimsByStatus("planned").length, 1);
  assert.equal(claimsByStatus("prototype").length, 1);
});

test("every verification claim has evidence and limitation text", () => {
  for (const claim of verificationClaims) {
    assert.ok(claim.evidence.length > 0);
    assert.ok(claim.limitation.length > 20);
  }
});

