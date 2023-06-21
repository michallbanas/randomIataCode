import { data } from "../data/iata.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", showRandomCity);

function showRandomCity() {
  const iataContainer = document.getElementById("iata-container");
  const iataNameElement = document.getElementById("iata-name");
  const randomData = getRandomIata(data, 5);
  let currentIndex = 0;
  const interval = setInterval(() => {
    btn.setAttribute("disabled", true);
    iataNameElement.textContent = randomData[currentIndex].Code;
    currentIndex++;

    if (currentIndex === randomData.length) {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * randomData.length);
      iataNameElement.textContent = `${randomData[randomIndex].Code} - ${randomData[randomIndex].Airport} - ${randomData[randomIndex].Country}`;
      iataContainer.classList.add("animate");
      btn.removeAttribute("disabled");
    }
  }, 200);
}

function getRandomIata(array, num) {
  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, num);
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
