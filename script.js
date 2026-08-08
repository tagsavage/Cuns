const WORD_COUNT = 5;
const wordListEl = document.getElementById("word-list");
const regenerateBtn = document.getElementById("regenerate-btn");

function pickRandomWords(bank, count) {
  const pool = [...bank];
  const picked = [];

  for (let i = 0; i < count && pool.length > 0; i++) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool[index]);
    pool.splice(index, 1);
  }

  return picked;
}

function renderWords(words) {
  wordListEl.innerHTML = "";

  words.forEach((word) => {
    const li = document.createElement("li");
    li.textContent = word;
    wordListEl.appendChild(li);
  });
}

function generateWords() {
  const words = pickRandomWords(WORD_BANK, WORD_COUNT);
  renderWords(words);
}

regenerateBtn.addEventListener("click", generateWords);

generateWords();
