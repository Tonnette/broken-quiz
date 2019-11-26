
function populate() {

    var question = [("what colour is the sky?"), ("what colour is blue?"), ("what colour is banana?")];
    var choicesOne = [("blue"), ("green"), ("purple"), ("orange")];
    var answers = [("blue"), ("blue"), ("yellow")];
    var answersIndex = 0;
    score =0;

/*for (var i = 0; i < answers.length; i++){
var answersIndex = answers[i];
}

    /*new question("what colour is a banana?", ["blue", "green", "yellow", "black"], "yellow"),
    new question("what sound do dog's make?", ["meow", "bark", "moo", "quack"], "bark"),
    new question("what does HTML stand for?", ["html", "css", "moo", "quack"], "html"),
    new question("what does CSS stand for?", ["html", "css", "moo", "quack"], "css"),*/

    var myQuestion = document.getElementById("question");
    var myButton = document.getElementById("myButtonInvention");
    myQuestion.innerHTML = question[1];

    //for (var i = 0; i < choicesOne.length; i++){
    //var FirstChoices = document.getElementById("btn1");
    //FirstChoices.innerHTML = choicesOne[i]
    $("#btn1").html(choicesOne[0]);
    $("#btn2").html(choicesOne[1]);
    $("#btn3").html(choicesOne[2]);
    $("#btn4").html(choicesOne[3]);

    // Here we create the on click event that gets the user"s pick
    $(".btn-choice").on("click", function () {
        $(".btn-choice").hide()

        // We get the value associated with the button the user picked from here
        var userPick = $(this).val();
        console.log("user Pick: " + userPick);

        // If your pick matched the computer's pick you let them know.
        if (parseInt(userPick) === 1) {
            $("#progress").text("correct.");
            score++;
            $(".score").text("score = " + score);
            console.log(score); 
           
           
        }
        // If the numbers did not match. You also let them know
        else {
            $("#progress").text("wrong!");
        }

     

    }


        /*var newButtons = document.createElement("button");
        newButtons.textContent = choicesOne[i];
        myButton.appendChild(newButtons);*/ 

    )};

populate()

