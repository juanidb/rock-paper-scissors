// crear una funcion para simular el juego de la pc
// y que elija uno de los 3

function pcPlay () {
    let options = ['paper', 'rock', 'scissors'];
    let choice = Math.floor(Math.random()*options.length);
    return options[choice];
}

/* funcion que sirva para simular una ronda del juego*/

function gameRound(userInput, pcPlay()) {

}

// prompt que pida al user que elija

userInput = prompt('choose paper, rock, or scissors')