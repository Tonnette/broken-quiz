
function populate() {

    var myQuestions = [("what colour is the sky?"), ("what is a dog?"), ("what colour is banana?"), ("what is my name"), ("what does HTML stand for?")];
    var choicesOne = [("blue"), ("green"), ("purple"), ("orange")];
    var choicesTwo = [("a fish"), ("a reptile"), ("a bird"), ("a mammal")]
    var choicesThree = [("black"), ("orange"), ("yellow"), ("magenta")]
    var choicesFour = [("Tonnette"), ("Mandy"), ("Mo"), ("Zayn")]
    var choicesFive = [("Hyper Text Markup Language"), ("Have tea mark lane"), ("Hate Trees Media Loop"), ("Hang Tight Mellow Lad")]
    var answers = [("blue"), ("animal"), ("yellow")];
    answersIndex = 0;
    myQuestionsNum = 0;
    score = 0;

    for (var i = 0; i < myQuestions.length; i++) {
        var myQuestionsNum = myQuestions[i];
        console.log(myQuestionsNum);
        var myQuestionsGoHere = document.getElementById("question");
        myQuestionsGoHere.textContent = myQuestions[0];
    }
    $("#btn1").html(choicesOne[0]);
    $("#btn2").html(choicesOne[1]);
    $("#btn3").html(choicesOne[2]);
    $("#btn4").html(choicesOne[3]);
    $("#btn5").html(choicesTwo[0]);
    $("#btn6").html(choicesTwo[1]);
    $("#btn7").html(choicesTwo[2]);
    $("#btn8").html(choicesTwo[3]);
    $("#btn9").html(choicesThree[0]);
    $("#btn10").html(choicesThree[1]);
    $("#btn11").html(choicesThree[2]);
    $("#btn12").html(choicesThree[3]);
    $("#btn13").html(choicesFour[0]);
    $("#btn14").html(choicesFour[1]);
    $("#btn15").html(choicesFour[2]);
    $("#btn16").html(choicesFour[3]);
    $("#btn17").html(choicesFive[0]);
    $("#btn18").html(choicesFive[1]);
    $("#btn19").html(choicesFive[2]);
    $("#btn20").html(choicesFive[3]);

    // User Answers Round-1
    $(".btn-choice").on("click", function () {
        $(".btn-choice").hide();
        $(".btn-choice-round-2").show();
        myQuestionsGoHere.textContent = myQuestions[1];

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If user picks matched the right answer
        if (parseInt(userPick) === 1) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/" + myQuestions.length);
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })
// User Answers Round-2
    $(".btn-choice-round-2").on("click", function () {
        $(".btn-choice-round-2").hide();
        $(".btn-choice-round-3").show();
        myQuestionsGoHere.textContent = myQuestions[2];

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If your pick matched the computer's pick you let them know.
        if (parseInt(userPick) === 4) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/" + myQuestions.length);
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })
    // User Answers Round-3
    $(".btn-choice-round-3").on("click", function () {
        $(".btn-choice-round-3").hide();
        $(".btn-choice-round-4").show();
        myQuestionsGoHere.textContent = myQuestions[3];

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If your pick matched the computer's pick you let them know.
        if (parseInt(userPick) === 3) {
            $("#progress").text("correct.");
            score++;

            $(".score").text("score = " + score + "/" + myQuestions.length);
            console.log(score);
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }
    })

        // User Answers Round-4
        $(".btn-choice-round-4").on("click", function () {
            $(".btn-choice-round-4").hide();
            $(".btn-choice-round-5").show();
            myQuestionsGoHere.textContent = myQuestions[4];
    
            // We get the value associated with the button the user picked from here
            var userPick = $(this).val();
            console.log("user Pick: " + userPick);
    
            // If your pick matched the computer's pick you let them know.
            if (parseInt(userPick) === 1) {
                $("#progress").text("correct.");
                score++;
    
                $(".score").text("score = " + score + "/" + myQuestions.length);
                console.log(score);
            }
            // If the numbers did not match. You also let them know
            else {
                $("#progress").text("wrong!");
            }
        })

        // User Answers Round-5
        $(".btn-choice-round-5").on("click", function () {
            $(".btn-choice-round-5").hide();
            $("#progress").hide();
            
    
            // We get the value associated with the button the user picked from here
            var userPick = $(this).val();
            console.log("user Pick: " + userPick);
    
            // If your pick matched the computer's pick you let them know.
            if (parseInt(userPick) === 1) {
                
                score++;
    
                $(".score").text("score = " + score + "/" + myQuestions.length);
                console.log(score);
                $("#question").text("GAME OVER");
            }
          
        })
};

populate()

