const username = document.getElementById("username"); //Gets the form input.
const saveScoreBtn = document.getElementById("saveScoreBtn");//Gets the Button.
const finalScore = document.getElementById("finalScore");//Gets the final score.
const mostRecentScore = localStorage.getItem("mostRecentScore");//Gets the recent scores from the Local storage.
finalScore.innerText = mostRecentScore; //Shows the final score.

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; //This makes the button disabled if there is nothing in the username section or no value.
});
saveHighScore = (e) => {
  console.log("I clicked On The Save Button");
  e.preventDefault(); //Stops the normal default thing a submit button does.
};
