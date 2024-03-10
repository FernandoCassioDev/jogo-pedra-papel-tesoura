const choiceOne = document.getElementById("player__choice-one");
const choiceTwo = document.getElementById("player__choice-two");
const choiceThree = document.getElementById("player__choice-three");

const messageInHTML = document.getElementById("message");
const playerNickName = document.getElementById("player__name");

const computerChoice = choose(1, 3);
var playerChoice;

function showName(name){
  playerNickName.innerHTML = name;
}

//exibe mensagem
function message(text){
  messageInHTML.innerHTML = text;
}

//sorteia entre dois números
function choose(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calcula o vencedor
//0 - empate
//1 - jogador venceu
//2 - computador venceu
function calcWinner(player, computer) {
  if (player === 1 && computer === 1) {
    return 0;
  } else if (player === 1 && computer === 2) {
    return 2;
  } else if (player === 1 && computer === 3) {
    return 1;
  } else if (player === 2 && computer === 1) {
    return 1;
  } else if (player === 2 && computer === 2) {
    return 0;
  } else if (player === 2 && computer === 3) {
    return 2;
  } else if (player === 3 && computer === 1) {
    return 2;
  } else if (player === 3 && computer === 2) {
    return 1;
  } else if (player === 3 && computer === 3) {
    return 0;
  }
}

//escolhe a jogada do usuário
//1 - pedra
//2 - papel
//3 - tesoura
function play(choice) {
  playerChoice = choice;
  //sortear a jogada do computador
  computerChoice;
  //calcular quem ganhou
  const winner = calcWinner(playerChoice, computerChoice);
  
  if(winner === 0){
    message('empate')
  }else if(winner === 1){
    message(`${playerName} venceu`)
  }else if(winner === 2){
    message('computador venceu')
  }
  //somar pontos
  //exibir para o usuário(mão)
}

choiceOne.onclick = function () {
  play(1);
};

choiceTwo.onclick = function () {
  play(2);
};

choiceThree.onclick = function () {
  play(3);
};

const playerName = prompt("digite seu nome");
message(`bem vindo ${playerName}, está preparado? Escolha uma opção acima...`);
showName(playerName)
