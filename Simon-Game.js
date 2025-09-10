let gameSeq = [];
let userSeq = [];

let btns = ["pink", "orange", "navyBlue", "oceanBlue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let rdmIdx = Math.floor(Math.random() * 4);
    let rdmColor = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmColor}`);
    gameSeq.push(rdmColor);
    // console.log("gameseq : ", gameSeq);
    btnFlash(rdmBtn);
}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        h2.innerText = `Game over!! your score was ${level}, press any key to start again.`;
        document.querySelector('body').classList.add("red")
        setTimeout(function () {
            document.querySelector('body').classList.remove("red");
        }, 150);
        reset();
    }
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 200);
}

function btnPressed() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log('userseq : ', userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPressed);
}

function reset() {
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}
