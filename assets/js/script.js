let timeEl = document.getElementById("Time")

let startPage = document.getElementsByClassName("Zero")


let ulQuiestion = document.getElementById("Question");
let liFirst = document.getElementById("First");
let liSecond = document.getElementById("Second");
let liThird = document.getElementById("Third");
let liForth = document.getElementById("Forth");
let ulAnswer = document.getElementById("Answer")

let questionOne = document.getElementById("One")


let ulQuiestion2 = document.getElementById("Question2");
let liFirst2 = document.getElementById("First2");
let liSecond2 = document.getElementById("Second2");
let liThird2 = document.getElementById("Third2");
let liForth2 = document.getElementById("Forth2");
let ulAnswer2 = document.getElementById("Answer2")

let questionTwo = document.getElementById("Two")


let ulQuiestion3 = document.getElementById("Question3");
let liFirst3 = document.getElementById("First3");
let liSecond3 = document.getElementById("Second3");
let liThird3 = document.getElementById("Third3");
let liForth3 = document.getElementById("Forth3");
let ulAnswer3 = document.getElementById("Answer3")

let questionThree = document.getElementById("Three")


let ulQuiestion4 = document.getElementById("Question4");
let liFirst4 = document.getElementById("First4");
let liSecond4 = document.getElementById("Second4");
let liThird4 = document.getElementById("Third4");
let liForth4 = document.getElementById("Forth4");
let ulAnswer4 = document.getElementById("Answer4")

let questionFour = document.getElementById("Four")


let ulQuiestion5 = document.getElementById("Question5");
let liFirst5 = document.getElementById("First5");
let liSecond5 = document.getElementById("Second5");
let liThird5 = document.getElementById("Third5");
let liForth5 = document.getElementById("Forth5");
let ulAnswer5 = document.getElementById("Answer5")

let questionFive = document.getElementById("Five")

let h2Done = document.getElementById("Done")
let h3Score = document.getElementById("Score")
let h3Answer6 = document.getElementById("Answer6")
let h3StartOver = document.getElementById("Start-over")

let allQuistions = [questionOne, questionTwo, questionThree, questionFour, questionFive];


// TIMER

let secondsLeft = 0
timeEl.textContent = "Time: " + secondsLeft;
let intervalId;

function setTime() {
    intervalId = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(intervalId);
            timeEl.textContent = "Time: 0"

            for(let i = 0; i < allQuistions.length; i++) {
                allQuistions[i].setAttribute("style", "display: none;");
                h2Done.textContent = "Time is up!";
                timeEl.textContent = "Time: 0";
                h3Score.textContent = "You final score is 0";
                h3StartOver.textContent = "Start Over"
                h3StartOver.addEventListener("click", function() {
                    location.reload();
                });
            }

          }
    }, 1000);
}

let startTimer = document.getElementById("Start-button")

startTimer.addEventListener("click", function() {

    secondsLeft = 75
    timeEl.textContent = "Time: " + secondsLeft;


    for(let i = 0; i < startPage.length; i++) {
        startPage[i].textContent="";
        startPage[i].setAttribute("style", "display: none;")
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

        questionOne.setAttribute("style", "display: none;")

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

    questionOne.setAttribute("style", "display: none;")
    
    ulQuiestion2.textContent = "The condition in an if / else statement is enclosed within ____.";
    liFirst2.textContent = "1. quotes";
    liSecond2.textContent = "2. curly brackets";
    liThird2.textContent = "3. parentheses";  // correct
    liForth2.textContent = "4. square brackets";
    ulAnswer2.textContent = "Correct!"
    ulAnswer2.setAttribute("style", "border-top: 2px solid;")
})



// QUESTION #3

let wrongAnswers2 = [liFirst2, liSecond2, liForth2];

for (let i = 0; i < wrongAnswers2.length; i++) {
    wrongAnswers2[i].addEventListener("click", function() {

        questionTwo.setAttribute("style", "display: none;")

        secondsLeft = secondsLeft -10;
    
        ulQuiestion3.textContent = "Arrays in JavaScript can be used to store ____.";
        liFirst3.textContent = "1. numbers amd strings";
        liSecond3.textContent = "2. other arrays";
        liThird3.textContent = "3. booleans"; 
        liForth3.textContent = "4. all of the above"; // correct
        ulAnswer3.textContent = "Wrong!"
        ulAnswer3.setAttribute("style", "border-top: 2px solid;")
    
    })
}

liThird2.addEventListener("click", function() {

    questionTwo.setAttribute("style", "display: none;")

    ulQuiestion3.textContent = "Arrays in JavaScript can be used to store ____.";
    liFirst3.textContent = "1. numbers amd strings";
    liSecond3.textContent = "2. other arrays";
    liThird3.textContent = "3. booleans"; 
    liForth3.textContent = "4. all of the above"; // correct
    ulAnswer3.textContent = "Correct!"
    ulAnswer3.setAttribute("style", "border-top: 2px solid;")
})




// QUESTION #4

let wrongAnswers3 = [liFirst3, liSecond3, liThird3];

for (let i = 0; i < wrongAnswers3.length; i++) {
    wrongAnswers3[i].addEventListener("click", function() {

        questionThree.setAttribute("style", "display: none;")

        secondsLeft = secondsLeft -10;
    
        ulQuiestion4.textContent = "String values must be enclosed within ____ when being assigned to variables";
        liFirst4.textContent = "1. commas";
        liSecond4.textContent = "2. curly brackets";
        liThird4.textContent = "3. quotes"; // correct
        liForth4.textContent = "4. parantheses";
        ulAnswer4.textContent = "Wrong!"
        ulAnswer4.setAttribute("style", "border-top: 2px solid;")
    
    })
}

liForth3.addEventListener("click", function() {

    questionThree.setAttribute("style", "display: none;")

    ulQuiestion4.textContent = "String values must be enclosed within ____ when being assigned to variables";
    liFirst4.textContent = "1. commas";
    liSecond4.textContent = "2. curly brackets";
    liThird4.textContent = "3. quotes"; // correct
    liForth4.textContent = "4. parantheses";
    ulAnswer4.textContent = "Correct!"
    ulAnswer4.setAttribute("style", "border-top: 2px solid;")
})



// QUESTION #5

let wrongAnswers4 = [liFirst4, liSecond4, liForth4];

for (let i = 0; i < wrongAnswers4.length; i++) {
    wrongAnswers4[i].addEventListener("click", function() {

        questionFour.setAttribute("style", "display: none;")

        secondsLeft = secondsLeft -10;
    
        ulQuiestion5.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
        liFirst5.textContent = "1. JavaScript";
        liSecond5.textContent = "2. terminal/bash";
        liThird5.textContent = "3. for loops"; 
        liForth5.textContent = "4. console.log";// correct
        ulAnswer5.textContent = "Wrong!"
        ulAnswer5.setAttribute("style", "border-top: 2px solid;")
    
    })
}

liThird4.addEventListener("click", function() {

    questionFour.setAttribute("style", "display: none;")

    ulQuiestion5.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    liFirst5.textContent = "1. JavaScript";
    liSecond5.textContent = "2. terminal/bash";
    liThird5.textContent = "3. for loops"; 
    liForth5.textContent = "4. console.log";// correct
    ulAnswer5.textContent = "Correct!"
    ulAnswer5.setAttribute("style", "border-top: 2px solid;")
})


// SUBMIT PAGE

let wrongAnswers5 = [liFirst5, liSecond5, liThird5];

for (let i = 0; i < wrongAnswers5.length; i++) {
    wrongAnswers5[i].addEventListener("click", function() {

        secondsLeft = secondsLeft -10;

        clearInterval(intervalId);
        timeEl.textContent = "Time: " + secondsLeft;

        questionFive.setAttribute("style", "display: none;")
        
        h2Done.textContent = "All done!";
        h3Score.textContent = "You final score is " + secondsLeft;
        h3Answer6.textContent = "Wrong!"
        h3Answer6.setAttribute("style", "border-top: 2px solid;")
    
    })
}

liForth5.addEventListener("click", function() {

    clearInterval(intervalId);
    timeEl.textContent = "Time: " + secondsLeft;

    questionFive.setAttribute("style", "display: none;")

    h2Done.textContent = "All done!";
    h3Score.textContent = "You final score is " + secondsLeft;
    h3Answer6.textContent = "Correct!"
    h3Answer6.setAttribute("style", "border-top: 2px solid;")
})

