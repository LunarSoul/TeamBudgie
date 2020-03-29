function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
 
 
   
        var choices = quiz.getQuestionIndex().choices;
       
       
 
       
        for (var i= 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i);//choice 0
            element.innerHTML = choices[i]; //set choice 0 innerhtml to slytherin
            guess("btn" + i, choices[i]);
 
        }
 
        showProgress();
    }
}
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 
}
 
 
 
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
 
}
 
 
 
 
var questions = [
    new Question("Where do budgies come from?", ["India", "Africa", "South America", "Australia"], "Australia"),
    new Question("The word Budgie actually used to mean?", ["Good", "Happy", "Little", "Good to eat"], "Good to eat"),
    new Question("What color is the cere (the area above the beak) of most male budgies?", ["Blue", "Pink", "Yellow", "Brown"], "Blue"),
    new Question("When a budgie shudders and shakes its feathers, what emotion does this signify?", ["Fear", "Relaxation", "Excitemnent", "Sadness"], "Relaxation"),
    new Question("Which one of these is not a health disorder of budgies?", ["Mycosis", "Psitacossis", "Egg-binding", "Molting"], "Molting") 
];
 
 
 
 
 
 
 
//slot in the quiz object instance
 
var quiz = new Quiz(questions);
 
populate();
 