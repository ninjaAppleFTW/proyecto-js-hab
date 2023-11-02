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
// Asigna emoji aleatorio a cada tarjeta
function assignRandomEmojis() {
  shuffleArray(emojis);
  cards.forEach((card, index) => {
    card.querySelector(".back").textContent = emojis[index];
  });
}

// Llamada a la funcion aleatoria al principio del juego
assignRandomEmojis();

const reveal = (e) => {
  const currentCard = e.currentTarget;

  // Evita decubrir dos tarjetas a la vez
  if (flippedCards.length >= 2) {
    return;
  }

  // Agrega emojis a las cartas boca abajo
  flippedCards.push(currentCard);

  // flipped para girar las tarjetas
  currentCard.classList.add("flipped");

  // Incrementa del contador de movimientos
  totalMovimientos += 0.5;
  contadorMovimientos.textContent = `Movimientos: ${totalMovimientos} `;

  // Revisa si las dos tarjetas son iguales
  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    const emoji1 = card1.querySelector(".back").textContent;
    const emoji2 = card2.querySelector(".back").textContent;

    // Si los emojis son iguales las deja cara arriba
    if (emoji1 === emoji2) {
      cartasEmparejadas++;
      flippedCards = [];
      if (cartasEmparejadas === cards.length / 2) {
        // Incrementa el contador de partidas
        partidasGanadas++;
        // Incrementa el número de intentos
        totalIntentos++;
        contadorIntentos.textContent = `Intentos: ${totalIntentos}`;
      }
    } else {
      // Si no son iguales, esperar un segundo antes de girar las tarjetas
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
      }, 1000);
    }
  }
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}

function resetGame() {
  totalMovimientos = 0;
  cartasEmparejadas = 0;
  assignRandomEmojis();

  cards.forEach((card) => {
    card.classList.remove("flipped");
  });
  contadorMovimientos.textContent = `Movimientos: ${totalMovimientos}`;
}

// botón de reinicio
resetButton.addEventListener("click", resetGame);