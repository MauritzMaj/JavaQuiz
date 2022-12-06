// define variables
var StartBtn = document.querySelector("#start-button")
var ScoreBtn = document.querySelector('#score-button')
var questionContainer = document.querySelector(".questions")
var options = document.querySelectorAll(".option")
var countdown = document.querySelector("#countdown")
var result = document.getElementById("isTrue")
var form = document.getElementById("name")
var label = document.getElementById("label")
var submitBtn = document.getElementById("submit-button")
var scoreReport = document.querySelector("#score-report")
var nameInput = document.querySelector("#name")
var report = {
    name:nameInput.value.trim(),
    score: score
}

var timer;
var timerCount;
var counter =0;
var score = 0;




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
    a: [{ text: "js", isCorrect: false},
        { text: "script", isCorrect: true },
        { text: "style", isCorrect: false },
        { text: "javascript", isCorrect: false }
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

//var start = true

// Iterate
function iterate() {

 //Getting the question
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

if (questionContainer.style.display === "none") { 
    questionContainer.style.display = "block"  
}
}


//answer question correctly

function pickAnswer(){

    options.forEach(option => 
        option.addEventListener("click", function(event) {
        var element = event.target;
      
        if (element.matches(".option")) {
          var value = element.getAttribute("value");
    

    //add time for correct answer
    if (value == "true" && timerCount > 0) {
        timerCount +=5;
        score +=10;
        result.innerHTML = "Correct!";
        result.style.color = "green";
    }

// subtract time for wrong answer
    if (value == "false" && timerCount > 0) {
    timerCount -=5;
    result.innerHTML= "Incorrect!";
    result.style.color = "red";
    }

if(counter<=1){
    iterate(counter+=1);
}

else {clearInterval(timer);
    result.innerHTML = ("Your Score is " + score);
    result.style.color = "black";
    label.style.display= "block";
    form.style.display = "block";
    submitBtn.style.display = "block";
    localStorage.setItem("score", score);

}



}}))}


function Submit(event){
    event.preventDefault();
    localStorage.setItem("", nameInput.value);
    
}



function ShowScore(){

    var Player = localStorage.getItem("name")
    var Finalscore = localStorage.getItem("score");
    scoreReport.innerHTML = ("Player:" + Player +" Score:" + Finalscore);


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
    pickAnswer()


}

//add eventlisterner to start button
StartBtn.addEventListener("click", startGame);
ScoreBtn.addEventListener("click", ShowScore);
submitBtn.addEventListener("click", Submit);



