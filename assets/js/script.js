let timeEl = document.getElementById("Time")

let startPage = document.getElementsByClassName("Zero")



let ulQuiestion = document.getElementById("Question");
let liFirst = document.getElementById("First");
let liSecond = document.getElementById("Second");
let liThird = document.getElementById("Third");
let liForth = document.getElementById("Forth");
let ulAnswer = document.getElementById("Answer")

let questionOne = document.getElementsByClassName("One")


let ulQuiestion2 = document.getElementById("Question2");
let liFirst2 = document.getElementById("First2");
let liSecond2 = document.getElementById("Second2");
let liThird2 = document.getElementById("Third2");
let liForth2 = document.getElementById("Forth2");
let ulAnswer2 = document.getElementById("Answer2")

let questionTwo = document.getElementsByClassName("Two")


let ulQuiestion3 = document.getElementById("Question3");
let liFirst3 = document.getElementById("First3");
let liSecond3 = document.getElementById("Second3");
let liThird3 = document.getElementById("Third3");
let liForth3 = document.getElementById("Forth3");
let ulAnswer3 = document.getElementById("Answer3")

let questionThree = document.getElementsByClassName("Three")


let ulQuiestion4 = document.getElementById("Question4");
let liFirst4 = document.getElementById("First4");
let liSecond4 = document.getElementById("Second4");
let liThird4 = document.getElementById("Third4");
let liForth4 = document.getElementById("Forth4");
let ulAnswer4 = document.getElementById("Answer4")

let questionFour = document.getElementsByClassName("Four")




let secondsLeft = 0
timeEl.textContent = "Time: " + secondsLeft;

function setTime() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    }, 1000);
}

let startTimer = document.getElementById("Start-button")

startTimer.addEventListener("click", function() {

    secondsLeft = 75
    timeEl.textContent = "Time: " + secondsLeft;


    for(let i = 0; i < startPage.length; i++) {
        startPage[i].textContent="";
        startPage[i].setAttribute("style", "margin: 0px;")
    }

// QUESTION #1

    ulQuiestion.textContent = "Commonly used data types DO NOT include";
    liFirst.textContent = "1. strings";
    liSecond.textContent = "2. booleans";
    liThird.textContent = "3. alerts";  // correct
    liForth.textContent = "4. numbers";

    
setTime()
});




// QUESTION #2

let wrongAnswers = [liFirst, liSecond, liForth];

for (let i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", function() {

        for(let i = 0; i < questionOne.length; i++) {
            questionOne[i].setAttribute("style", "display: none;")
        }
        secondsLeft = secondsLeft -10;
    
        ulQuiestion2.textContent = "The condition in an if / else statement is enclosed within ____.";
        liFirst2.textContent = "1. quotes";
        liSecond2.textContent = "2. curly brackets";
        liThird2.textContent = "3. parentheses";  // correct
        liForth2.textContent = "4. square brackets";
        ulAnswer2.textContent = "Wrong!"
        ulAnswer2.setAttribute("style", "border-top: 2px solid;")
    
    })
}

liThird.addEventListener("click", function() {

    for(let i = 0; i < questionOne.length; i++) {
        questionOne[i].setAttribute("style", "display: none;")
    }
    
    ulQuiestion2.textContent = "The condition in an if / else statement is enclosed within ____.";
    liFirst2.textContent = "1. quotes";
    liSecond2.textContent = "2. curly brackets";
    liThird2.textContent = "3. parentheses";  // correct
    liForth2.textContent = "4. square brackets";
    ulAnswer2.textContent = "Correct!"
    ulAnswer2.setAttribute("style", "border-top: 2px solid;")
})



// QUESTION #3

// wrongAnswers = [liFirst2, liSecond2, liForth2];

// for (let i = 0; i < wrongAnswers.length; i++) {
//     wrongAnswers[i].addEventListener("click", function() {

//         secondsLeft = secondsLeft -10;
    
//         ulQuiestion2.textContent = "Arrays in JavaScript can be used to store ____.";
//         liFirst2.textContent = "1. numbers amd strings";
//         liSecond2.textContent = "2. other arrays";
//         liThird2.textContent = "3. booleans"; // correct
//         liForth2.textContent = "4. all of the above";
//         ulAnswer2.textContent = "Wrong!"
//         ulAnswer2.setAttribute("style", "border-top: 2px solid;")
    
//     })
// }

// liThird2.addEventListener("click", function() {

//     ulQuiestion2.textContent = "Arrays in JavaScript can be used to store ____.";
//     liFirst2.textContent = "1. numbers amd strings";
//     liSecond2.textContent = "2. other arrays";
//     liThird2.textContent = "3. booleans"; // correct
//     liForth2.textContent = "4. all of the above";
//     ulAnswer2.textContent = "Correct!"
//     ulAnswer2.setAttribute("style", "border-top: 2px solid;")
// })