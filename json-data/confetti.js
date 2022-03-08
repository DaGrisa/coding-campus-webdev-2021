function confetti(confettiCount) {
  const body = document.body;
  for (let i = 0; i < confettiCount; i++) {
    randomConfetti(body);
  }
}

function setConfettiCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes confetti-fall {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
  
    50% {
      opacity: 1;
    }
  
    100% {
      transform: translateY(110vh);
      opacity: 0;
    }
  }
  
  @keyframes confetti-spin {
    0% {
      transform: rotate3d(0, 1, 1, 360deg);
    }
  
    50% {
      transform: rotate3d(0, 1, 1, 180deg);
    }
  
    100% {
      transform: rotate3d(0, 0, 0, 0);
    }
  }
  
  .confetti-container {
    position: fixed;
    top: -30px;
    width: 20px;
    height: 20px;
    animation: confetti-fall 5s ease-out;
  }
  
  .confetti-body {
    width: 100%;
    height: 100%;
    animation: confetti-spin 1s linear infinite;
  }`;
  document.head.appendChild(style);
}
setConfettiCSS();

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
  confettiBody.style = `background-color: ${color}; animation-delay: ${delaySpin}s`;

  confettiContainer.appendChild(confettiBody);
  body.appendChild(confettiContainer);
}
