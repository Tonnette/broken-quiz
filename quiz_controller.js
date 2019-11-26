function quiz (questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;


getQuestionIndex = function (){
    return this.questions[this.questionIndex];
}

isEnded = function(){
    return this.question.length === this.questionIndex;
}

guess = function (answer) {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++
    }
}


}

