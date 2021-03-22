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

//funcion para reiniciar el contador
function scoreReset() {
    if (puntUser>puntPc){
        scoreBoard.innerHTML = `Ganaste ${puntUser} a ${puntPc}. Toca un botón para jugar otra partida.`
    } else if (puntPc>puntUser){
        scoreBoard.innerHTML = `Perdiste ${puntUser} a ${puntPc}. Toca un botón para jugar de nuevo.` 
    } else{
        scoreBoard.innerHTML = `Has empatado. Presiona un botón para jugar otra vez.`
    }
    puntPc = 0;
    puntUser = 0;
    rounds = 0;
}

let puntUser = 0;
let puntPc = 0;
let rounds = 0;


let scoreBoard = document.createElement('div');
scoreBoard.innerHTML = 'Toca un botón para empezar la partida.';
scoreBoard.style = `
font-size: 125px; 
text-align: center; 
color: blue;`;

//botones
const btns = document.getElementById('btns');
btns.style = 'text-align: center';

// funcionalidad del rockbtn
const rockBtn = document.getElementById('rock');
rockBtn.onclick = () => {
    let result = document.createElement('div');
    result.textContent = playRound('rock', pcPlay());
    btns.appendChild(result);
    rounds ++;
    if (puntUser === 5 || puntPc === 5){
        scoreReset()
    } else if (result.textContent.startsWith('ganaste')) {
        ++puntUser;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`;
    } else if (result.textContent.startsWith('perdiste')){
        ++puntPc;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    } else {
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    }
}

// funcionalidad del paperbtn    
const paperBtn = document.querySelector('#paper');
paperBtn.onclick = () => {
    let result = document.createElement('div');
    result.textContent = playRound('paper', pcPlay());
    btns.appendChild(result);
    rounds ++;
    if (puntUser === 5 || puntPc === 5){
        scoreReset()
    } else if (result.textContent.startsWith('ganaste')) {
        ++puntUser;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`;
    } else if (result.textContent.startsWith('perdiste')){
        ++puntPc;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    } else {
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    }
}

// funcionalidad del scissorsbtn
const sciBtn = document.querySelector('#scissors');
sciBtn.onclick = () =>  {
    let result = document.createElement('div');
    result.textContent = playRound('scissors', pcPlay());
    btns.appendChild(result);
    rounds ++;
    if (puntUser === 5 || puntPc === 5){
        scoreReset()
    } else if (result.textContent.startsWith('ganaste')) {
        ++puntUser;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`;
    } else if (result.textContent.startsWith('perdiste')){
        ++puntPc;
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    } else {
        scoreBoard.innerHTML = `${puntUser} a ${puntPc} en ${rounds} rondas jugadas.`
    }
}


//let score = `Vas ${puntUser} contra ${puntPc}.` 
document.body.prepend(scoreBoard);



// el programa que corra la ronda 5 veces. 

/*function game() {
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
    console.log('el resultado final es user: '+userCount+' pc: '+pcCount)
    userCount === pcCount? console.log('la partida termino en empate'):
    userCount > pcCount? console.log('ganaste la partida'):
    console.log('perdiste la partida')

}

//game()*/