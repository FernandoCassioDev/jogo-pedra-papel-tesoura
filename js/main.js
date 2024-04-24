var playerName;
var playerChoice = 0;
var playerPoints = 0;

var computerChoice = 0;
var computerPoints = 0;

playerName = prompt("digite seu nome");
message(
  "bem vindo " + playerName + ", está preparado? Escolha uma opção acima..."
);
showName(playerName);

//exibe mensagem
function message(text) {
  document.getElementById("message").innerHTML = text;
}

function showName(name) {
  document.getElementById("player__name").innerHTML = name;
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

//soma pontos para o player
function addPointsPlayer() {
  playerPoints++;
  document.getElementById("player__points").innerHTML = playerPoints;
}

//soma pontos para o computador
function addPointsComputer() {
  computerPoints++;
  document.getElementById("computer__points").innerHTML = computerPoints;
}

//adiciona a classse selected
function select(tipo, escolha) {
  document
    .getElementById(tipo + "__choice-" + escolha)
    .classList.add("selected");
}

function unSelect(tipo, escolha) {
  document
    .getElementById(tipo + "__choice-" + escolha)
    .classList.remove("selected");
}

//escolhe a jogada do usuário
//1 - pedra
//2 - papel
//3 - tesoura
function play(choice) {
  playerChoice = choice;
  select("player", playerChoice);
  //sortear a jogada do computador
  computerChoice = choose(1, 3);
  select("computer", computerChoice);
  //calcular quem ganhou
  var winner = calcWinner(playerChoice, computerChoice);

  if (winner === 0) {
    message("empate");
  } else if (winner === 1) {
    message("Ponto para " + playerName);
    addPointsPlayer();
  } else if (winner === 2) {
    message("ponto para o computador");
    addPointsComputer();
  }

  setTimeout(function () {
    unSelect("player", playerChoice);
    unSelect("computer", computerChoice);

    message(playerName + " escolha uma opção");
  }, 3500);
}

document.getElementById("player__choice-1").onclick = function () {
  play(1);
};
document.getElementById("player__choice-2").onclick = function () {
  play(2);
};
document.getElementById("player__choice-3").onclick = function () {
  play(3);
};
