const gameoptions = ['ROCK','PAPER','SCISSORS'];
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function getComputerChoice(optionslist){
  return gameoptions.random();
}

function getUserChoice(){
  let input = prompt("Rock, Paper, or Scissor?");
  console.log(input.toUpperCase());
  return input.toUpperCase();
}

function playRound(userchoice, computerchoice){
  if (userchoice == 'ROCK' && computerchoice == 'ROCK'){
    return 'TIE';
  }
  else if (userchoice == 'ROCK' && computerchoice == 'PAPER') {
    return 'COMPUTER';
  }
  else if (userchoice == 'ROCK' && computerchoice == 'SCISSOR') {
    return 'USER';
  }
  else if (userchoice == 'PAPER' && computerchoice == 'PAPER') {
    return 'TIE';
  }
  else if (userchoice == 'PAPER' && computerchoice == 'ROCK') {
    return 'USER';
  }
  else if (userchoice == 'PAPER' && computerchoice == 'SCISSOR') {
    return 'COMPUTER';
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'SCISSOR') {
    return 'TIE';
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'ROCK') {
    return 'COMPUTER';
  }
  else if (userchoice == 'SCISSOR' && computerchoice == 'PAPER') {
    return 'USER';
  }
}

function game(){
  let user = 0;
  let comp = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    let computerchoices = getComputerChoice(gameoptions);
    let userinput = getUserChoice();
    let win = playRound(userinput, computerchoices);
    if (win == 'USER'){
      user++;
    }
    else if (win == 'COMPUTER') {
      comp++;
    }
    else if (win == 'TIE') {
      tie++;
    }
 }
 console.log(`User Won: ${user} times, Computer Won: ${comp} times, Game tied: ${tie} times.`);
}
game()
