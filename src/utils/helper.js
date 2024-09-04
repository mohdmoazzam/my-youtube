import { firstNames, lastNames, messages } from "./mock";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomName() {
  const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
  const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
  return `${firstName} ${lastName}`;
}

export function generateRandomMessage() {
  return messages[getRandomInt(0, messages.length - 1)];
}
