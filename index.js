let rounds = prompt("How many rounds do you want to play?", 0);

let userScore = 0;

let computerScore = 0;

function getComputerChoice(){
    let num = Math.random();
    if(num <= 1/3){
        return 'Rock';
    }
    if(num > 1/3 && num <= 2/3){
        return 'Paper';
    }
    if(num > 2/3){
        return 'Scissors';
    }
}


function winner(comp,hum){
    if(comp === 'Rock' && hum === 'Paper'){
        return "User";
    }
    else if(comp === 'Rock' && hum === 'Scissors'){
        return "Computer";
    }
    else if(comp === 'Paper' && hum === 'Rock'){
        return "Computer";
    }
    else if(comp === 'Paper' && hum === 'Scissors'){
        return "User";
    }
    else if(comp === 'Scissors' && hum === 'Paper'){
        return "Computer";
    }
    else if(comp === 'Scissors' && hum === 'Rock'){
        return "User";
    }
    else{
        return "tie";
    }
}

let result;
let countClicks = 0;

function play(){

    if(countClicks  === Number(rounds)){
        if(userScore > computerScore){
            alert(`Congrats, You Won!\nUser: ${userScore} vs. Computer: ${computerScore}`);
        }
        else if(userScore < computerScore){
            alert(`Sorry, You Lost!\nUser: ${userScore} vs. Computer: ${computerScore}`);
        }
        else{
            alert(`You Tied!\nUser: ${userScore} vs. Computer: ${computerScore}`);
        }
        document.getElementById('Submit').disabled = true;
        return;
    }

    let choice;

    var ele = document.getElementsByName('hinput');
    
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            choice = ele[i].id;
        }
    }

console.log("User choice: "+ choice);

let cnum = getComputerChoice();

console.log("Computer choice: " + cnum);

document.getElementById("cChoice").innerHTML = `Computer chose: ${cnum}`;
document.getElementById("Results").innerHTML = `Score -> User: ${userScore} Computer: ${computerScore}`;

console.log('Winner: '+ winner(cnum, choice));

result = winner(cnum, choice);

score(result);

countClicks++;

}

function score(result){
    if(result === "User"){
        userScore++;
    }
    else if(result === "Computer"){
        computerScore++;
    }
    console.log(userScore);
    console.log(computerScore);
}