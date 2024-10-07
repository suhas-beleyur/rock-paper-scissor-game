const buttons = document.querySelectorAll('.opt button');
const pbutt = document.getElementById('pchoice');
const cbutt = document.getElementById('cchoice');
const resultArea = document.getElementById('result');
let pchoice = "";
let cchoice = "";

function rock(pbut) {
    pbutt.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    buttons.forEach(button => button.disabled = true);
    pchoice = "rock";
    computerChoice();
    showResult();
}

function paper() {
    pbutt.innerHTML = '<i class="fa-solid fa-hand"></i>';
    buttons.forEach(button => button.disabled = true);
    pchoice = "paper";
    computerChoice();
    showResult();
}

function scissor() {
    pbutt.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    buttons.forEach(button => button.disabled = true);
    pchoice = "scissor";
    computerChoice();
    showResult();
}

function computerChoice() {
    const computer = Math.ceil(Math.random() * 3);
    if (computer === 1) {
        cbutt.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
        cchoice = "rock";
    } else if (computer === 2) {
        cbutt.innerHTML = '<i class="fa-solid fa-hand"></i>';
        cchoice = "paper";
    } else {
        cbutt.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
        cchoice = "scissor";
    }
}

function showResult() {
    let result = "";
    if (pchoice === cchoice) {
        result = "It's a tie!";
    } else if (
        (pchoice === "rock" && cchoice === "scissor") ||
        (pchoice === "paper" && cchoice === "rock") ||
        (pchoice === "scissor" && cchoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    resultArea.value = result;
}


function reset() {
    buttons.forEach(button => button.disabled = false);
    pbutt.innerHTML = '';
    cbutt.innerHTML = '';
    resultArea.value = '';
    pchoice = "";
    cchoice = "";
}
