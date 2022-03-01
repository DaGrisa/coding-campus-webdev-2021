function confetti(confettiCount) {
  const body = document.body;
  for (let i = 0; i < confettiCount; i++) {
    randomConfetti(body);
  }
}

const confettiColors = [
  "#E84FA9",
  "#6A737D",
  "#1369D3",
  "#30A64B",
  "#6F47BF",
  "#F46A23",
  "#FED24E",
  "#1369D3",
  "#E84FA9",
  "#6F47BF",
];

function randomConfetti(body) {
  const position = 100 * Math.random();
  const delayFall = 3 * Math.random();
  const delaySpin = Math.random();
  const randomColorIndex = Math.floor(confettiColors.length * Math.random());
  const color = confettiColors[randomColorIndex];

  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti-container";
  confettiContainer.style = `left: ${position}%; animation-delay: ${delayFall}s`;

  const confettiBody = document.createElement("div");
  confettiBody.className = "confetti-body";
  confettiBody.style = `background-color: ${color};; animation-delay: ${delaySpin}s`;

  confettiContainer.appendChild(confettiBody);
  body.appendChild(confettiContainer);
}
