var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

// To check if the game has started or not
var started = false;

// keeps track of the players current level in the game
var level = 0;


// Start Game Section
$(document).keydown(function(){

    if (!started){
        
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

/**********************************************************/

$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(level - 1);

});

/**********************************************************/

function nextSequence(){

    // Reset user clicked pattern when next sequence function is called
    userClickedPattern = [];

    // Increment level
    level++;

    // Heading for each level
    $("#level-title").text("Level " + level);

    var randonNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randonNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    //animatePress(userChosenColour);

}

/**********************************************************/

function playSound(name) {

    var audio = new Audio("/sounds/" + name + ".mp3");
    audio.play();
}

/**********************************************************/

// When a button is clicked, it will be outlined for 100 ms
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout( function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

/**********************************************************/

// Checking the User's Answer
function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout( function() {
                nextSequence();
            }, 1000);
        }
    }
    

    else {
        console.log("wrong");
        var gameOverSound = new Audio("/sounds/wrong.mp3");
        gameOverSound.play();
        $("body").addClass("game-over");
        setTimeout( function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


/**********************************************************/

// Start the Game over
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
