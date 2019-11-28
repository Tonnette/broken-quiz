$(".startQuizButton").on("click", function () {
    $(".my-starter-page").hide();
    $(".quiz-has-started").show();

})
var questionAnswerRoundOne = [
    {
        "question": "Commonly used data types DO NOT inlcude:",
        "choices": ["strings", "booleans", "alerts", "numbers"],
        "answer": 2
    }];
var questionAnswerRoundTwo = [
    {
        "question": "What is a communication device?",
        "choices": ["door", "hat", "dest", "phone"],
        "answer": 3
    }];
var questionAnswerRoundThree = [
    {
        "question": "What do phones do?",
        "choices": ["make calls", "eat pasta", "drink wine", "vacuum"],
        "answer": 0
    }];
var questionAnswerRoundFour = [
    {
        "question": "What do you find at the beach?",
        "choices": ["fix cars", "make pies", "learn code", "sand"],
        "answer": 3
    }];
var questionAnswerRoundFive = [{
    "question": "Inside which HTML element do we put the JavaScript?",
    "choices": ["<javascript>", "<html>", "<script>", "<js>"],
    "answer": 2
}];

score = 0;
let counter = 0;
$(".first-question").text(questionAnswerRoundOne[0].question);
$("#btn1").text(questionAnswerRoundOne[0].choices[0]);
$("#btn2").text(questionAnswerRoundOne[0].choices[1]);
$("#btn3").text(questionAnswerRoundOne[0].choices[2]);
$("#btn4").text(questionAnswerRoundOne[0].choices[3]);

$(".second-question").text(questionAnswerRoundTwo[0].question);
$("#btn5").text(questionAnswerRoundTwo[0].choices[0]);
$("#btn6").text(questionAnswerRoundTwo[0].choices[1]);
$("#btn7").text(questionAnswerRoundTwo[0].choices[2]);
$("#btn8").text(questionAnswerRoundTwo[0].choices[3]);

$(".third-question").text(questionAnswerRoundThree[0].question);
$("#btn9").text(questionAnswerRoundThree[0].choices[0]);
$("#btn10").text(questionAnswerRoundThree[0].choices[1]);
$("#btn11").text(questionAnswerRoundThree[0].choices[2]);
$("#btn12").text(questionAnswerRoundThree[0].choices[3]);

$(".forth-question").text(questionAnswerRoundFour[0].question);
$("#btn13").text(questionAnswerRoundFour[0].choices[0]);
$("#btn14").text(questionAnswerRoundFour[0].choices[1]);
$("#btn15").text(questionAnswerRoundFour[0].choices[2]);
$("#btn16").text(questionAnswerRoundFour[0].choices[3]);

$(".fifth-question").text(questionAnswerRoundFive[0].question);
$("#btn17").text(questionAnswerRoundFive[0].choices[0]);
$("#btn18").text(questionAnswerRoundFive[0].choices[1]);
$("#btn19").text(questionAnswerRoundFive[0].choices[2]);
$("#btn20").text(questionAnswerRoundFive[0].choices[3]);

//timer
$(document).ready(function () {
    var timer = setInterval(function () {
        var count = parseInt($('.quiz-timer').html());
        if (count !== 0) {
            $('.quiz-timer').html(count - 1);
        } else {
            clearInterval(timer);
        }
    }, 1000);
    

    // User Answers Round-1
    $(".btn-choice").on("click", function () {
        $("#first").hide();
        $(".first-question").hide();
        $(".btn-choice-round-2").show();
        $(".second-question").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundOne[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/5");
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })

    // User Answers Round-2
    $(".btn-choice-round-2").on("click", function () {
        $("#second").hide();
        $(".second-question").hide();
        $(".btn-choice-round-3").show();
        $(".third-question").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundTwo[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/5");
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })

    // User Answers Round-3
    $(".btn-choice-round-3").on("click", function () {
        $("#third").hide();
        $(".third-question").hide();
        $(".btn-choice-round-4").show();
        $(".forth-question").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundThree[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/5");
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })

    // User Answers Round-4
    $(".btn-choice-round-4").on("click", function () {
        $("#forth").hide();
        $(".forth-question").hide();
        $(".btn-choice-round-5").show();
        $(".fifth-question").show();

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundFour[0].answer) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/5");
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })
    // User Answers Round-5
    $(".btn-choice-round-5").on("click", function () {
        $(".buttons").hide();
        $(".quiz-is-over").show();
        $("#progress").hide();
        $(".quiz-title").text("Quiz is over!");


        clearInterval(timer);

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === questionAnswerRoundFive[0].answer) {
            $("#progress").text("correct.");
            score++;
            $(".quizFinalScore").text("Your final score is " + score + " /5" + " + " + timer);

            $(".score").text("score = " + score + "/5");
            console.log(score);
        }

        $(".userSubmit").on("click", function (event) {
            event.preventDefault();
            var userInitials = $(".myInitials").value;
            $(".quiz-is-over").hide();
            $(".quiz-timer").hide();
            $(".score").hide();
            $(".timerEquals").hide();
            $(".highscores").show();
            $(".quiz-title").text("Quiz");
            localStorage.setItem("userInitials", userInitials);
        });

});
});

