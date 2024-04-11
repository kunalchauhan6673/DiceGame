var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];   // targets first img

image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  document.querySelector("p").innerHTML = "Player 1 😂";
  document.querySelectorAll("p")[1].innerHTML = "Player 2 🥹";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("p").innerHTML = "Player 1 🥹";
  document.querySelectorAll("p")[1].innerHTML = "Player 2 😂";

}
else {
  document.querySelector("h1").innerHTML = "Its A Draw!";
  document.querySelector("p").innerHTML = "Player 1 🥰";
  document.querySelectorAll("p")[1].innerHTML = "Player 2 🥰";
}
