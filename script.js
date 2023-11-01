const cards = document.querySelectorAll(".card");
const button = document.querySelector("button");
const contadorIntentos = document.getElementById("contador-intentos");
const contadorMovimientos = document.getElementById("contador-movimientos");
const resetButton = document.getElementById("restart-button");

let totalMovimientos = 0;
let totalIntentos = 0;
let flippedCards = [];
let cartasEmparejadas = 0;
let partidasGanadas = 0;

// emojis para el juego
const emojis = [
  "👻",
  "🤓",
  "🥳",
  "🎃",
  "😱",
  "🤡",
  "🥸",
  "☠️",
  "👻",
  "🤓",
  "🥳",
  "🎃",
  "😱",
  "🤡",
  "🥸",
  "☠️",
];

// Mezcla las tarjetas aleatoriamente
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
