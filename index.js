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
    let result;
    if (user === pc){
        result = 'empate'
       // console.log(result)
        return result
    } else if (user === 'paper' && pc === 'rock'){
        result = 'ganaste, papel le gana a roca'
        //console.log(result)
        return result
    } else if (user === 'paper' && pc === 'scissors'){
        result = 'perdiste, papel pierde con tijera'
        //console.log(result)
        return result
    } else if (user === 'rock' && pc === 'paper'){
        result = 'perdiste, roca pierde contra papel'
        //console.log(result)
        return result
    } else if (user === 'rock' && pc === 'scissors'){
        result = 'ganaste, roca le gana a tijeras'
       // console.log(result)
        return result
    } else if (user === 'scissors' && pc === 'rock'){
        result = 'perdiste, tijeras pierde contra roca'
       // console.log(result)
        return result
    } else {
        result = 'ganaste, tijeras le gana a papel'
        //console.log(result)
        return result
    }
    
}

// el programa que corra la ronda 5 veces. 

function game() {
    let userCount = 0;
    let pcCount = 0;
    
    for (let round = 0; round < 5; round++){
        if (userCount < 4 && pcCount < 4){
           let resultado = playRound(userPlay(), pcPlay());
           console.log(resultado);
           if (resultado.startsWith('ganaste')){
                ++userCount
                console.log('el score es user: '+userCount+ ' pc: '+ pcCount)
           } else if (resultado.startsWith('perdiste')){
                ++pcCount
                console.log('el score es user: '+userCount+ ' pc: '+ pcCount)
           } else{
            console.log('el score es user: '+userCount+ ' pc: '+ pcCount)
           }
        } 
    }

}

//game()