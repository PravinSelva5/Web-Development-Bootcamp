var randomNumber1 = Math.floor(Math.random() * 5 + 1);
var newDice = "./images/dice" + randomNumber1 + ".png";
document.getElementById('player1').setAttribute("src", newDice);


var randomNumber2 = Math.floor(Math.random() * 5 + 1);
var newDice2 = "./images/dice" + randomNumber2 + ".png";
document.getElementById('player2').setAttribute("src", newDice2);

if ( randomNumber1 > randomNumber2) {
    var title = document.querySelector("h1");
    title.innerHTML = "Player 1 Wins! 🚩";
}

else if (randomNumber1 < randomNumber2){
    var title = document.querySelector("h1");
    title.innerHTML = "Player 2 Wins! 🚩";
}
else {
    var title = document.querySelector("h1");
    title.innerHTML = "Draw!";
}