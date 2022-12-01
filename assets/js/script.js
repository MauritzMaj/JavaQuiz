// define variables
var StartBtn = document.querySelector("#start-button")
var Question = document.querySelector(".questions")
var options = document.querySelector(".option")
var countdown = document.querySelector("#countdown")
var timer;
var timerCount;

// store Questions in array
var myQuestions = [{
    id: 0,
    q: "What is Javascript?",
    a: [{ text: "coffee", isCorrect: false },
        { text: "an OS", isCorrect: false },
        { text: "a programming language", isCorrect: true },
        { text: "a webbrowser", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "<js>", isCorrect: false},
        { text: "<script>", isCorrect: true },
        { text: "<style>", isCorrect: false },
        { text: "<javascript>", isCorrect: false }
    ]

},
{
    id: 2,
    q: "How do you create a function in JavaScript?",
    a: [{ text: "function:myFunction()", isCorrect: false },
        { text: "function; function()", isCorrect: false },
        { text: "function myFunction()", isCorrect: true },
        { text: "function = myFunction()", isCorrect: false }
    ]

}
]

var start = true

// Iterate
function iterate() {



// Getting the question
var Question = document.getElementById('question')


// Setting the question text
for (var i = 0; i < myQuestions.length; i++) {
    var x = myQuestions[i];

Question.innerHTML = x.q;

// Getting the options
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


// Providing option text
op1.innerHTML = x.a[0].text;
op2.innerHTML = x.a[1].text;
op3.innerHTML = x.a[2].text;
op4.innerHTML = x.a[3].text;

// Providing the true or false value to the options
op1.value = x.a[0].isCorrect;
op2.value = x.a[1].isCorrect;
op3.value = x.a[2].isCorrect;
op4.value = x.a[3].isCorrect;


}

if (start) {
    iterate("0");
    }
}

// function to start timer
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      countdown.innerHTML = timerCount;
      if (timerCount >= 0) {
        
      // Tests if time has run out
      if (timerCount === 0) {
        //stop counting down
        clearInterval(timer);
        // display Game Over
        countdown.innerHTML = "Game Over";
      }
    
    }}, 1000);
  }
  


//display the next question
function showQuestion(){

if (Question.style.display === "none") { 
    Question.style.display = "block"  
}
}


//answer question correctly
var answer = document.getElementById("isTrue");
var choice = document.getElementsByClassName("option");


function Answer(){

    //add time for correct answer
    if (isCorrect === true && timerCount > 0) {
        timerCount +2;
        answer.innerHTML = "Correct!";
        answer.style.color = "green";
    }

// subtract time for wrong answer
    if (isCorrect === false && timerCount > 0) {
    timerCount -2;
    answer.innerHTML= "Incorrect!";
        answer.style.color = "red";
    }

}


//StartGame function, called when "start" is clicked.
function startGame() {
    timerCount = 30;
    // Prevents start button from being clicked and hides button
    StartBtn.disabled = true;
    StartBtn.style.display ="none";

    showQuestion()
    startTimer()
    iterate() 
  }

//add eventlistener to option button

choice[i].addEventListener("click", Answer);

//add eventlisterner to start button
StartBtn.addEventListener("click", startGame);