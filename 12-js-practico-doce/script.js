// Palabras para el juego
const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 'peppers', 
    'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 'quixoticelixer', 'quarter', 
    'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];

  let randomWord;
  let time = 10;
  let score = 0;
  let timeInterval;
  let isPlaying = true;

  const randomWordElement = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreSpan = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');

  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function addToDOM() {
    randomWord = randomWords();
    randomWordElement.innerHTML = randomWord;
  }

  function checkInput(e) {
    const inputText = e.target.value;
  
    if (inputText === randomWord) {
      score++;
      updateScore();
      time += 3;
      addToDOM();
      e.target.value = '';
    }
  }

  function updateScore() {
    scoreSpan.innerHTML = score;
  }

  function updateTime() {
    time--;
    timeSpan.innerHTML = `${time}s`;
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  function gameOver() {
    isPlaying = false;
    endGameContainer.innerHTML = `
      <h1>Se acabó el tiempo</h1>
      <p>Tu puntaje final es ${score}</p>
      <button onclick="window.location.reload()">Volver a jugar</button>
    `;
    document.querySelector('.main').style.display = 'none'; // Esconde el juego
  }

  function startGame() {
    addToDOM();
    textInput.addEventListener('input', checkInput);
    timeInterval = setInterval(updateTime, 1000);
  }

  startGame();  