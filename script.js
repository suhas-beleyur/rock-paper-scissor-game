const buttons = document.querySelectorAll('.opt button');
const pbutt = document.getElementById('pchoice');
const cbutt = document.getElementById('cchoice');
const resultArea = document.getElementById('result');
let ipwin = document.getElementById('pwin');
let icwin = document.getElementById('cwin');
let itie = document.getElementById('tie');
let pchoice = "";
let cchoice = "";
let cwin = 0, pwin = 0, tie = 0;
ipwin.value = 0;
icwin.value = 0;
itie.value = 0;


function rock(pbut) {
    pbutt.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    pchoice = "rock";
    computerChoice();
    showResult();
}

function paper() {
    pbutt.innerHTML = '<i class="fa-solid fa-hand"></i>';
    pchoice = "paper";
    computerChoice();
    showResult();
}

function scissor() {
    pbutt.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
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
        itie.value = ++tie;
    } else if (
        (pchoice === "rock" && cchoice === "scissor") ||
        (pchoice === "paper" && cchoice === "rock") ||
        (pchoice === "scissor" && cchoice === "paper")
    ) {
        result = "You win!";
        ipwin.value = ++pwin;
    } else {
        result = "Computer wins!";
        icwin.value = ++cwin;
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
    pwin = cwin = tie = 0;
    ipwin.value = 0;
    icwin.value = 0;
    itie.value = 0;
}
