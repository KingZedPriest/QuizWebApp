// Main Constants
const question = document.getElementById("question"); //Gets The HTML Elements We Need.
const choices = Array.from(document.getElementsByClassName("choice-text")); //Get An Array Of The Classes.

let currentQuestion = []; //Array For The Current Question.
let acceptingAnswers = true; //Boolean For The Answer Delay.
let score = 0; //Scoreboard
let questionCounter = 0; //Counter For The Questions.
let availableQuestions = []; //Array for The Available Questions.
let questions = [
  {
    question: "What is JavaScript?",
    choice1:
      " JavaScript is a scripting language used to make the website interactive",
    choice2:
      "JavaScript is an assembly language used to make the website interactive",
    choice3:
      "JavaScript is a compiled language used to make the website interactive",
    choice4: "None of the mentioned",
    answer: 1,
  },
  {
    question:
      "Among the given statements, which statement defines closures in JavaScript?",
    choice1:
      "JavaScript is a function that is enclosed with references to its inner function scope",
    choice2:
      "JavaScript is a function that is enclosed with references to its lexical environment",
    choice3:
      "JavaScript is a function that is enclosed with the object to its inner function scope",
    choice4: "JavaScript does not have anything such as closures.",
    answer: 2,
  },
  {
    question: " Which of the following is not javascript data types?",
    choice1: "Null type",
    choice2: "Undefined type",
    choice3: "Number type",
    choice4: "All of the mentioned",
    answer: 4,
  },
  {
    question:
      "Where is Client-side JavaScript code is embedded within HTML documents?",
    choice1: "A URL that uses the special javascript:code",
    choice2: "A URL that uses the special javascript:protocol",
    choice3: "A URL that uses the special javascript:encoding",
    choice4: "A URL that uses the special javascript:stack",
    answer: 2,
  },
  {
    question:
      "What happens in the following JavaScript code snippet? var js = 0; while (js < 10) { console.log(js); js++; }",
    choice1: "An exception is thrown",
    choice2:
      "The values of js are logged or stored in a particular location or storage",
    choice3: " The value of js from 0 to 9 is displayed in the console",
    choice4: "An error is displayed",
    answer: 3,
  },
  {
    question: " Which of the following scoping type does JavaScript use?",
    choice1: "Sequential",
    choice2: "Segmental",
    choice3: "Lexical",
    choice4: "Literal",
    answer: 3,
  },
  {
    question:
      "What will be the result or type of error if p is not defined in the following JavaScript code snippet? console.log(p)",
    choice1: "Value not found Error",
    choice2: "Reference Error",
    choice3: "Null",
    choice4: "Zero",
    answer: 2,
  },
  {
    question: "Which of the following is not a framework?",
    choice1: "JavaScript .NET",
    choice2: "JavaScript",
    choice3: "Cocoa JS",
    choice4: "jQuery",
    answer: 2,
  },
  {
    question:
      "Which of the following is the property that is triggered in response to JS errors?",
    choice1: "onclick",
    choice2: "onerror",
    choice3: "onmessage",
    choice4: "onexception",
    answer: 2,
  },
  {
    question:
      "What is the prototype represents in the following JavaScript code snippet? function javascript() {};",
    choice1: "Not valid",
    choice2: "Prototype of a function",
    choice3: "Function javascript",
    choice4: "A custom constructor",
    answer: 4,
  },
  {
    question: " Which of the following is correct about JavaScript?",
    choice1: "JavaScript is an Object-Based language",
    choice2: "JavaScript is Assembly-language",
    choice3: "JavaScript is an Object-Oriented language",
    choice4: "JavaScript is a High-level language",
    answer: 1,
  },
  {
    question: "Why are event handlers needed in JS?",
    choice1: "Allows JavaScript code to alter the behaviour of windows",
    choice2: "Adds innerHTML page to the code",
    choice3: "Change the server location",
    choice4: "Performs handling of exceptions and occurrences",
    answer: 1,
  },
  {
    question:
      "Which of the following methods/operation is advisable to use in javascript instead of == and !=?",
    choice1: "equalto()",
    choice2: "equals() and notequals()",
    choice3: "bitwise checking",
    choice4: " === and !==",
    answer: 4,
  },
  {
    question: "Length does not have () after it because it is a?",
    choice1: "Method",
    choice2: "Object",
    choice3: "Property",
    choice4: "Function",
    answer: 3,
  },
  {
    question: "Is the Interpolation Of Two Variables Possible In JavaScript?",
    choice1: "No",
    choice2: "Yes",
    choice3: "Interpolation is not a thing in JavaScript",
    choice4: "It can only happen in arrays",
    answer: 2,
  },
  {
    question: "Which of the following statements is True",
    choice1: "let and const are block scoped",
    choice2: "You can reassign a variable started with the keyword const",
    choice3: "parseInt() and Number.parseInt() are not the same",
    choice4: "The return keyword does not exit/quits a function",
    answer: 1,
  },
  {
    question: "Is a catch block is required after a try{}?",
    choice1: "None is required",
    choice2: "True",
    choice3: "False",
    choice4: "An If statement is ALWAYS required",
    answer: 3,
  },
  {
    question: "What will be the output of this code console.log(~8)",
    choice1: "Reference Error Message",
    choice2: "Null",
    choice3: "-9",
    choice4: "-4",
    answer: 3,
  },
  {
    question:
      "What will be the output of this code console.log(typeof (new String('hello')));",
    choice1: "Object",
    choice2: "String",
    choice3: "Null",
    choice4: "Function",
    answer: 1,
  },
  {
    question: "Was JavaScript created in Thirty(30) days?",
    choice1: "Who can believe such a Lie?",
    choice2: "Yes Brendan Eich is a genuis",
    choice3: "It was actually created in 10 days",
    choice4: "True",
    answer: 3,
  },
];
//Needed Constants
const CORRECT_BONUS = 10; //This is the worth of the Correct Answers if chosen.
const MAX_QUESTIONS = 3; //The Total number of Questions a user gets.

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};
getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  })
};
startGame();
