const username = document.getElementById("username"); //Gets the form input.
const saveScoreBtn = document.getElementById("saveScoreBtn");//Gets the Button.
const finalScore = document.getElementById("finalScore");//Gets the final score.
const mostRecentScore = localStorage.getItem("mostRecentScore");//Gets the recent scores from the Local storage.
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];//This gets the high score or an empty array if there is no high score.
const MAX_HIGH_SCORES = 5;//This is the number of highscores to show.
finalScore.innerText = mostRecentScore; //Shows the final score.



username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; //This makes the button disabled if there is nothing in the username section or no value.
});
saveHighScore = (e) => {
  console.log("I clicked On The Save Button");
  e.preventDefault(); //Stops the normal default thing a submit button does.
  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);//Pushes the score into the High scores array.
  highScores.sort((a,b) => b.sort - a.score)//Sorts the Array in ascending order.
  highScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(highScores));//Adds the highscores to the local storage, as a string, cause local storage only accepts strings.
  window.location.assign("index.html");//Takes us back to home, after the button is clicked.
};
