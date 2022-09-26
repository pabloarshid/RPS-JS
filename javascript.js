var gameoptions = ['ROCK','PAPER','SCISSORS'];
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getComputerChoice(optionslist){
  return gameoptions.random();
}
const computerchoice = getComputerChoice(gameoptions);

function getUserChoice(){
  let input = prompt("Rock, Paper, or Scissor?");
  return input.toUpperCase();
}

const userinput = getUserChoice();
console.log(userinput);
function playRound(userchoice, computerchoice){
  let winner;
  if (userchoice == 'ROCK' && computerchoice == 'ROCK'){
    winner = 'TIE'
  }
  else if (userchoice == 'ROCK' && computerchoice == 'PAPER') {
    winner = 'COMPUTER'
  }
  else if (userchoice == 'ROCK' && computerchoice == 'SCISSOR') {
    winner = 'USER'
  }
  else if (userchoice == 'PAPER' && computerchoice == 'PAPER') {
    winner = 'TIE'
  }
  else if (userchoice == 'PAPER' && computerchoice == 'ROCK') {
    winner = 'USER'
  }
  else if (userchoice == 'PAPER' && computerchoice == 'SCISSOR') {
    winner = 'COMPUTER'
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'SCISSOR') {
    winner = 'TIE'
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'ROCK') {
    winner = 'COMPUTER'
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'PAPER') {
    winner = 'USER'
  }
  return winner
}

const win = playRound(userinput, computerchoice);
console.log(win);
// function game(){
//
// }
