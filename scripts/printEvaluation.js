import { evaluateAddressResearch } from "../src/researchEvaluation.js";

const evaluation = evaluateAddressResearch();

console.log(JSON.stringify(evaluation, null, 2));

