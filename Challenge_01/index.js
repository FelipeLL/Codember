import { encryptedMessage } from "./encryptedData.js";
import { decodeMessage } from "./firstSolution.js";

const decode = decodeMessage(encryptedMessage);
console.log(decode);
