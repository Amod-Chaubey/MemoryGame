const cards = document.querySelectorAll(".card");
console.log(cards);
//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  //console.log("Card flipped");
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  //console.log("Checking...");
  firstCard.dataset.image == secondCard.dataset.image ? success() : fail();
}

function success() {
  //console.log("Successed");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
  alert("Congrats..You Win");
}

function fail() {
  //console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 800);
}

function reset(params) {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//Todo: shuffle
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
