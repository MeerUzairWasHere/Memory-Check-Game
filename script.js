const cards = document.querySelectorAll(".card");
const resetBtn = document.querySelector(".resetGame");
const text = document.getElementById("text");

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var isRevealed = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  // console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  isRevealed += 1;
  console.log(isRevealed);
  if (isRevealed === 8) {
    text.innerHTML = "YOU WON! 🙌🎉";
    // test
    setTimeout(() => {
      cards.forEach((card) => card.classList.remove("flip"));
      shuffle();
      text.innerText = "How is your memory?";
      cards.forEach((card) => card.addEventListener("click", flip));
      isRevealed = 0

    }, 3000);
    // text.innerHTML = "YOU WON! 🙌🎉"
    // // test
    // cards.forEach((card) => card.classList.remove("flip"));
    // shuffle();
    // cards.forEach((card) => card.addEventListener("click", flip));

    // test
  }
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
}

resetBtn.addEventListener("click", () => {
  cards.forEach((card) => card.classList.remove("flip"));
  shuffle();
  // text.innerText = "How is your memory?";
  cards.forEach((card) => card.addEventListener("click", flip));
});
