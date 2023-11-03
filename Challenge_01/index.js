import { encryptedMessage } from "./encryptedData.js";

function decodeMessage(encryptedMessage) {
  const messageArray = encryptedMessage.split(" ");
  const decodedMessageArray = [];
  let result = "";

  for (let item = 0; item < messageArray.length; item++) {
    const indexElement = decodedMessageArray.findIndex((element) => element.name === messageArray[item].toLowerCase());

    if (indexElement !== -1) {
      decodedMessageArray[indexElement].counter++;
    } else {
      const newElement = {
        name: messageArray[item],
        counter: 1,
      };
      decodedMessageArray.push(newElement);
    }
  }

  for (let item = 0; item < decodedMessageArray.length; item++) {
    result += decodedMessageArray[item].name + decodedMessageArray[item].counter;
  }

  return result;
}

const decode = decodeMessage(encryptedMessage);
console.log(decode);
