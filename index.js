
// Alert For Player Names.


var playerOne = prompt("Who Is The First Player?");
var playerTwo = prompt("Who Is The Second Player?");


// A Function Which Rolls The Dice. 


function randomDice(){


    // Random Number Generator For The First Die.


    var randomNumOne = Math.ceil(Math.random() * 6);


    // Random Number Generator For The Second Die.


    var randomNumTwo = Math.ceil(Math.random() * 6);


    // Picking A Random Die In The First Div.


    if (randomNumOne === 1) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die1.png")
    } else if (randomNumOne === 2) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die2.png")
    } else if (randomNumOne === 3) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die3.png")
    } else if (randomNumOne === 4) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die4.png")
    } else if (randomNumOne === 5) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die5.png")
    } else if (randomNumOne === 6) {
        document.querySelector(".playerOne img").setAttribute("src", "images/die6.png")
    }


    // Putting A Random Die In The Second Div


    if (randomNumTwo === 1) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die1.png")
    } else if (randomNumTwo === 2) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die2.png")
    } else if (randomNumTwo === 3) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die3.png")
    } else if (randomNumTwo === 4) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die4.png")
    } else if (randomNumTwo === 5) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die5.png")
    } else if (randomNumTwo === 6) {
        document.querySelector(".playerTwo img").setAttribute("src", "images/die6.png")
    }


    // Display The Winner.


    if (randomNumOne > randomNumTwo) {
        document.querySelector(".container h1").innerHTML = playerOne + " Wins &#128513"
    } else if (randomNumOne < randomNumTwo) {
        document.querySelector(".container h1").innerHTML = playerTwo + " Wins &#128513"
    } else if (randomNumOne === randomNumTwo) {
        document.querySelector(".container h1").innerHTML = "&#128517 Its A Draw!"
    }
}
randomDice();
document.querySelector(".buttonOne").addEventListener("click", randomDice);
function reloadPage(){
    location.reload();
}
document.querySelector(".buttonTwo").addEventListener("click", reloadPage);