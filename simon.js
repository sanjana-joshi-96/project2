let gameSeq =[];
let userSeq =[];
let started =false;
let level = 0;
let btns = ["red","yellow","green","purple"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    userSeq=[];
    h2.innerText =`Level ${level}`;
    let randInd = Math.floor(Math.random()*3);
    let randColor= btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function checkAns(idx){
    // console.log(`current level : ${level}`)
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            // levelUp();
            setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over!!! Your score was <b> ${level} </b> <br> Press any key to start...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log("button was pressed");
    let btn = this;
    btnFlash(btn);
    let userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}