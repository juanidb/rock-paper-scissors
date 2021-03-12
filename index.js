// crear una funcion para simular el juego de la pc
// y que elija uno de los 3

function pcPlay () {
    let options = ['paper', 'rock', 'scissors'];
    let choice = Math.floor(Math.random()*options.length);
    return options[choice];
}

// funcion o prompt que pida al user que elija
function userPlay(){
    return (prompt('choose paper, rock, or scissors')).toLowerCase()
}


//funcion que sirva para simular una ronda del juego

function playRound(user, pc) {
    if (user === pc){
        console.log('empate')
    } else if (user === 'paper' && pc === 'rock'){
        console.log('ganaste, papel le gana a roca')
    } else if (user === 'paper' && pc === 'scissors'){
        console.log('perdiste, papel pierde con tijera')
    } else if (user === 'rock' && pc === 'paper'){
        console.log('perdiste, roca pierde contra papel')
    } else if (user === 'rock' && pc === 'scissors'){
        console.log('ganaste, roca le gana a tijeras')
    } else if (user === 'scissors' && pc === 'rock'){
        console.log('perdiste, tijeras pierde contra roca')
    } else {
        console.log('ganaste, tijeras le gana a papel')
    }
}

// el programa que corra la ronda 5 veces. 

function game() {
    let userCount = 0;
    let pcCount = 0;
    
    for (let round = 0; round < 5; round++){
        if (userCount < 4 && pcCount < 4){
           let result = playRound(userPlay(), pcPlay());
           console.log(result);
           
           /*if (result.indexOf('ganaste') >= 0){
               ++userCount
               console.log('el score es user: '+userCount+ ' pc: '+ pcCount)
           } else{
               ++pcCount
               console.log('el score es user: '+userCount+ ' pc: '+ pcCount)
           }

        } else {
            console.log('termino, el score es user: '+userCount+ ' pc: '+ pcCount)
        }*/
    } 
}

}