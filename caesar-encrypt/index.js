const supportedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
  ".",
  "!",
  "?",
];

function caesar(encrypt) {
  const inputText = normalizeText(document.getElementById("text-input").value);
  const key = parseInt(document.getElementById("key").value);

  let textOutput = "";
  for (const character of inputText) {
    if (encrypt) {
      textOutput += encryptCharacter(character, key);
    } else {
      textOutput += decryptCharacter(character, key);
    }
  }

  document.getElementById("text-output").value = textOutput;
}

function encryptCharacter(character, key) {
  if (character === "�") {
    return "�";
  }

  const index = supportedCharacters.indexOf(character);
  const encryptIndex = (index + key) % supportedCharacters.length;
  return supportedCharacters[encryptIndex];
}

function decryptCharacter(character, key) {
  if (character === "�") {
    return "�";
  }

  const index = supportedCharacters.indexOf(character);
  let decryptIndex = (index - key) % supportedCharacters.length;
  if (decryptIndex < 0) {
    decryptIndex = supportedCharacters.length + decryptIndex;
  }
  return supportedCharacters[decryptIndex];
}

function normalizeText(text) {
  let normalizedText = "";

  for (let character of text.toLowerCase()) {
    if (supportedCharacters.includes(character)) {
      normalizedText += character;
    } else {
      normalizedText += "�";
    }
  }

  return normalizedText;
}
