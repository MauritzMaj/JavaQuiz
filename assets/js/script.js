// define variables
var StartBtn = document.querySelector("#start-button")
var Question = document.querySelector(".questions")
var options = document.querySelectorAll(".option")
var countdown = document.querySelector("#countdown")
var timer;
var timerCount;
var counter = 0;

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

Question.innerHTML = myQuestions[counter].q;

// Getting the options
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


// Providing option text
op1.innerHTML = myQuestions[counter].a[0].text;
op2.innerHTML = myQuestions[counter].a[1].text;
op3.innerHTML = myQuestions[counter].a[2].text;
op4.innerHTML = myQuestions[counter].a[3].text;

// Providing the true or false value to the options
op1.value = myQuestions[counter].a[0].isCorrect;
op2.value = myQuestions[counter].a[1].isCorrect;
op3.value = myQuestions[counter].a[2].isCorrect;
op4.value = myQuestions[counter].a[3].isCorrect;


}

if (startGame) {
    iterate("0");
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
var choice = myQuestions[counter].a.isCorrect;

function NextQuestion(){
    Question.textContent = myQuestions[counter++]
}

function pickAnswer(){

    //add time for correct answer
    if (choice === true && timerCount > 0) {
        timerCount +2;
        answer.innerHTML = "Correct!";
        answer.style.color = "green";
    }

// subtract time for wrong answer
    if (choice === false && timerCount > 0) {
    timerCount -2;
    answer.innerHTML= "Incorrect!";
        answer.style.color = "red";

    }

NextQuestion();
   
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

     //add eventlistener to option button
options.forEach(option =>
    option.addEventListener("click", pickAnswer))
  }



//add eventlisterner to start button
StartBtn.addEventListener("click", startGame);



