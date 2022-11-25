// Main Constants
const question = document.getElementById("question"); //Gets The HTML Elements We Need.
const choices = Array.from(document.getElementsByClassName("choice-text")); //Get An Array Of The Classes.
const progressText = document.getElementById("progressText"); //Gets the question counter text.
const scoreText = document.getElementById("score"); //Gets the score text.
const progressBarFull = document.getElementById("progressBarFull"); //Gets the progress bar.
const loader = document.getElementById("loading"); //Gets the Loader.
const gameStart = document.getElementById("start");
setTimeout(() => {
  loader.classList.add("hidden");
  gameStart.classList.remove("hidden");
}, 3000);//Add the loading display. It basically, doesn't do anything😩
//Global Lets
let currentQuestion = []; //Array For The Current Question.
let acceptingAnswers = false; //Boolean For The Answer Delay.
let score = 0; //Scoreboard
let questionCounter = 0; //Counter For The Questions.
let availableQuestions = []; //Array for The Available Questions.
let questions = []; //The Array for Questions, as we will be getting the Questions from the local JSON File using the Fetch API
fetch("questions.json") //Fetching the Questions
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  })
  .catch((err) => {
    console.error(err); // For best practices after using a fetch that returned promises.
  });

//Needed Constants
const CORRECT_BONUS = 10; //This is the worth of the Correct Answers if chosen.
const MAX_QUESTIONS = 10; //The Total number of Questions a user gets.

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score); //Saves the high scores to local storage.
    return window.location.assign("end.html"); //Brings up the High score/end of the game page.
  } //The function gets a new Question, and the if statement checks if the Question should end, and the end page coming up.
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`; //This counts and shows the user how many question is remaining, in reference to the Maximum question.
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; //This updates the progress bar according to the question.
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); //Gets Random Question Index.
  currentQuestion = availableQuestions[questionIndex]; //Gets the Random Question, using the random Question index.
  question.innerText = currentQuestion.question; //Writes the question.
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number]; //Writes the Choices.
  });
  availableQuestions.splice(questionIndex, 1); //Cuts out answered questions.
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target; //Gets the whole div.
    const selectedAnswer = selectedChoice.dataset["number"]; //Gets the number attribute; Data number.
    const checkAnswer =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; //This checks if the answer clicked is true or false.
    if (checkAnswer === "correct") {
      incrementScore(CORRECT_BONUS); //This calls the score increment when the answer is correct.
    }
    selectedChoice.parentElement.classList.add(checkAnswer); //Adds the class, if correct and incorrect.
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(checkAnswer); //Adds the delay after adding the class before removing it.
      getNewQuestion(); //Gets a new question.
    }, 1000);
  });
});
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score; //This updates the score.
};
