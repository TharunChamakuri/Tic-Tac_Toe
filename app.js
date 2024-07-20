let boxs  = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newGameBtn = document.querySelector(".newGame");
let msgcontainer = document.querySelector(".msg-container");
let Msg = document.querySelector(".msg");
let inform = document.querySelector(".inform");
let count=0;
let turnX = true;

let winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetgame = () => {
    count=0;
    turnX = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    inform.innerText = "Start The Game By Clicking The Boxes";
}

boxs.forEach((box) => {
    box.addEventListener("click",() => {
       if(turnX) {
        box.innerText="x";
        turnX=false;
        count++;
       }
       else {
        box.innerText="o";
        turnX=true;
        count++;
       }
       box.disabled = true;
       console.log(count);
       checkWinner();
    });
    
});
const enableboxes = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText="";
    }
}
const disableboxes = () => {
    for(let box of boxs) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    Msg.innerText = `Congratulations winner is ${winner}`;
    disableboxes();
    msgcontainer.classList.remove("hide");
    inform.innerText = "To continue click on New Game or Reset Game";
}
const checkWinner = () => {
    for( let pattern of winpatterns) {
        let posval1 = boxs[pattern[0]].innerText;
        let posval2 = boxs[pattern[1]].innerText;
        let posval3 = boxs[pattern[2]].innerText;

        
        if(posval1 != "" && posval2 != "" && posval3 != "") {
            if(posval1 === posval2 && posval2 === posval3 && count!=9) {
                showWinner(posval1);
            }
            else if(posval1 === posval2 && posval2 === posval3 && count === 9 ) {
                showWinner(posval1);
            }
            else if(count == 9 && (posval1 != posval2 && posval2 != posval3)) {
                Msg.innerText = "Game is a Draw click on newgame to continue";
                disableboxes();
                msgcontainer.classList.remove("hide");
            }
        }

    }
}

resetBtn.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);
