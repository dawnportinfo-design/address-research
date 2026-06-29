import assert from "node:assert/strict";
import test from "node:test";
import {
  expansionGroups,
  morphismResearchFields,
  topMorphismPriorities,
  validateMorphismResearchProgram
} from "../src/morphismResearchProgram.js";

test("morphism expansion program is publication-ready as a structured registry", () => {
  assert.equal(validateMorphismResearchProgram().length, 0);
  assert.ok(morphismResearchFields.length >= 15);
  assert.ok(expansionGroups.includes("mathematics"));
  assert.ok(expansionGroups.includes("ai"));
  assert.ok(expansionGroups.includes("gis"));
});

test("top ten fields match the core AMT strengthening plan", () => {
  const topTen = topMorphismPriorities(10).map((field) => field.japaneseTitle);
  assert.deepEqual(topTen, [
    "住所位相論",
    "住所意味論",
    "住所代数論",
    "住所情報量理論",
    "住所距離空間論",
    "可逆住所写像論",
    "確率的住所写像論",
    "住所機械翻訳理論",
    "住所知識グラフ論",
    "住所時系列論"
  ]);
});

test("every morphism research field explains why it strengthens AMT", () => {
  for (const field of morphismResearchFields) {
    assert.ok(field.reasonForAMT.length > 40);
    assert.ok(field.strengthens.length >= 3);
    assert.ok(field.firstDeliverable.length > 20);
  }
});
