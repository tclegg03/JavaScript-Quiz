var begin = document.getElementById("start");
var clock = document.getElementById("timer");
var questionArea = document.getElementById("question");
var answerArea = document.getElementsByClassName("answers");
var scoreArea = document.getElementById("score");
var score = document.getElementById("score")
var secondsLeft = 60

//questions for the quiz with answers
var questionAsked = [{
    problem: "Where is Javascript added in an HTML file?",
    solutions:[{Text: "At the begining in the HEADER"},
               { Text: "In the middle in the BODY"},
                { Text: "At the end."}]
},
{
    problem: "What is 2 plus 2?",
    solutions:[{Text: "3"},
                {Text: "4"},
                {Text: "1"},
                {Text: "6"},]
},
]
//add timer
function makeTime(){
    var timerInterval =  setInterval(function(){
       secondsLeft--;
        clock.textContent = secondsLeft;
        if(secondsLeft===0){
            clearInterval(timerInterval);
        }
    }, 1000)
}

// make question and answer area
function generateQuiz(){
    
    var question= questionArea;
    question.innerText = questionAsked.problem;

}
//start game
begin.addEventListener("click" , function(event){
    event.preventDefault()
    console.log(event);
    if(begin){
        makeTime();
        generateQuiz();
    }
})




//log wins vs losses