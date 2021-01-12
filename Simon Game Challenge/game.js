var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

// To check if the game has started or not
var status = false;

// keeps track of the players current level in the game
var level = 0;


// Start Game Section
$(document).keydown(function(){

    if (!status){
        
        $("#level-title").text("Level " + level);
        nextSequence();
        status = true;
    }
});


$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

});


function nextSequence(){
    // Increment level
    level++;

    // Heading for each level
    $("#level-title").text("Level " + level);

    var randonNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randonNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(userChosenColour);

}


function playSound(name) {

    var audio = new Audio("/sounds/" + name + ".mp3");
    audio.play();
}


// When a button is clicked, it will be outlined for 100 ms
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout( function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}