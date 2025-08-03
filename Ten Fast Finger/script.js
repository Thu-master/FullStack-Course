const wordDisplay = document.getElementById("word-display");
const inputBox = document.getElementById("input-box");
const timeSpan = document.getElementById("time");
const correctCountSpan = document.getElementById("correct-count");
const wpmSpan = document.getElementById("wpm");
const startButton = document.getElementById("start-button");

let words = [
  "xin",
  "chào",
  "bạn",
  "đang",
  "gõ",
  "văn",
  "bản",
  "trên",
  "mạng",
  "máy",
  "tính",
  "nhanh",
  "luyện",
  "tập",
  "bàn",
  "phím",
  "tốc",
  "độ",
  "chính",
  "xác",
  "của",
  "chúng",
  "ta",
  "bắt",
  "đầu",
  "ngày",
  "tháng",
  "học",
  "việc",
  "sinh",
  "viên",
  "thầy",
  "cô",
  "ngôn",
  "ngữ",
  "bài",
  "thi",
];

let currentWordIndex = 0;
let correctCount = 0;
let timeLeft = 60;
let timer = null;
let testStarted = false;

// Tạo văn bản từ danh sách
function generateWords() {
  let html = "";
  for (let i = 0; i < 60; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    html += `<span>${randomWord}</span> `;
  }
  wordDisplay.innerHTML = html.trim();
}

// Bắt đầu test
function startTest() {
  generateWords();
  currentWordIndex = 0;
  correctCount = 0;
  timeLeft = 60;
  testStarted = true;
  correctCountSpan.textContent = 0;
  wpmSpan.textContent = 0;
  timeSpan.textContent = timeLeft;
  inputBox.disabled = false;
  inputBox.focus();

  highlightCurrentWord();

  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}

// Kết thúc test
function endTest() {
  inputBox.disabled = true;
  testStarted = false;
  inputBox.value = "";
}

// Bôi đậm từ hiện tại
function highlightCurrentWord() {
  const spans = wordDisplay.querySelectorAll("span");
  spans.forEach((span) => span.classList.remove("highlight"));
  if (spans[currentWordIndex]) {
    spans[currentWordIndex].classList.add("highlight");
  }
}

// Khi người dùng gõ
inputBox.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault(); // Không tạo dấu cách
    checkWord();
  }
});

function checkWord() {
  const spans = wordDisplay.querySelectorAll("span");
  const typedWord = inputBox.value.trim();
  const targetWord = spans[currentWordIndex]?.textContent;

  if (typedWord === targetWord) {
    correctCount++;
    spans[currentWordIndex].classList.add("correct");
  } else {
    spans[currentWordIndex].classList.add("incorrect");
  }

  currentWordIndex++;
  inputBox.value = "";
  highlightCurrentWord();
  correctCountSpan.textContent = correctCount;
  wpmSpan.textContent = Math.round((correctCount / (60 - timeLeft)) * 60) || 0;
}

// Khi nhấn nút "Bắt đầu"
startButton.addEventListener("click", startTest);
