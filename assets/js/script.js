// a button to start the quiz
var startBtn = document.querySelector("#startBtn");

var introSection = document.querySelector(".intro-section");
var mainSection = document.querySelector(".main-section");
//Time variable
var timer = document.querySelector("#timer");
//choice variable
var choiceBtn = document.querySelectorAll(".choiceBtn");
//save variable
var saveBtn = document.querySelector("#saveBtn");
var myClock;
//high score variable
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
//star buttton cunction
startBtn.addEventListener("click", startGame);
//save button function
saveBtn.addEventListener("click", saveInitials);
var secondsLeft = 75;
//save initials function
function saveInitials() {
    var initials = document.querySelector("#initials").value;
    highScore.push({ initials: initials, highScore: secondsLeft });
    localStorage.setItem("highScore", JSON.stringify(highScore));
}
//start game function
function startGame() {
    introSection.classList.add("hide");
    mainSection.classList.remove("hide");

    for (var i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].addEventListener("click", nextQuestion);
    }
    myClock = setInterval(startTimer, 1000);
}
//next question function
function nextQuestion() {
    var currentArticle = this.getAttribute("data-article");
    var nextArticle = this.getAttribute("data-nextArticle");
    document.querySelector("." + currentArticle).classList.add("hide");
    if (nextArticle !== "end") {
        document.querySelector("." + nextArticle).classList.remove("hide");
    }

    if (nextArticle === "end") {
        clearInterval(myClock);
        document.querySelector(".initials-section").classList.remove("hide");
    }
}
//timer function
function startTimer() {
    secondsLeft = secondsLeft - 1;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(myClock);
    }
}