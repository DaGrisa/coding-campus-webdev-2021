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

function caesar() {
  const inputText = normalizeText(document.getElementById("text-input").value);
  const textOutput = inputText;
  document.getElementById("text-output").value = textOutput;
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
