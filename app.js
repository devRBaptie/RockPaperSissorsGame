console.log("Start");

let userScore = 0;
let compterScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");

const reset_button = document.getElementById("resetButton");



function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function converToWord(letter){
    if(letter == "r") return "Rock";
    if(letter ==  "p") return "Paper";
    return "Sissors";
}

function win(userChoice, computerChoice){
    console.log("Wins");

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compterScore;

    result_p.innerHTML = converToWord(userChoice) + " beats " + converToWord(computerChoice) + " .You win!";

    // + color to the win
    document.getElementById(userChoice).classList.add('green-glow');
    // - color 
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 500);
}

function lose(userChoice, computerChoice){
    console.log("Lose");

    compterScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compterScore;

    result_p.innerHTML = converToWord(computerChoice) + " beats " + converToWord(userChoice) + " .You Lose!";
    // + color to the lose
    document.getElementById(userChoice).classList.add('red-glow');
    // - color 
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compterScore;

    result_p.innerHTML = converToWord(computerChoice) + " equals " + converToWord(userChoice) + " .Draw";
    // + color to the draw
    document.getElementById(userChoice).classList.add('gray-glow');
    // - color 
    setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 500);
}

function game(userChoice){
    const computerChoice =  getComputerChoice();

    console.log("User => " + userChoice);
    console.log("Computer => "+ computerChoice)

    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }

}
function buttonPressed(){
    userScore = 0;
    compterScore = 0;

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compterScore;
    result_p.innerHTML = "Make your move";
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    sissors_div.addEventListener('click', function(){
        game("s");
    })

    reset_button.addEventListener('click', () => buttonPressed()); 
}

main();