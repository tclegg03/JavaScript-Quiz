var questionArea = document.getElementById("question");
var answerArea = document.getElementsByClassName("answers");
var scoreArea = document.getElementById("score");

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
//start game
var start = true;

function generateQuiz(){
    var question= questionArea;
    question.innerText = questionAsked[0].problem;

}
