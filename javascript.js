let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let audio = document.querySelector("#winsound");
let winSound = document.getElementById("winsound");
let turn = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

const resetgame = () => {
  turn = true;
  enablebox();
  msgcontainer.classList.add("hide");

  winSound.pause();
  winSound.currentTime = 0; 
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }

    box.disabled = true;
    winner();
  });
});

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};
showwinner = (winner) => {
  msg.innerHTML = `congratulation,winner is  ${pos1} `;
  msgcontainer.classList.remove("hide");
  winSound.currentTime = 0; 
  winSound.play();
  disabledboxes();
};
const winner = () => {
  for (let pattern of winpattern) {
    pos1 = boxes[pattern[0]].innerText;
    pos2 = boxes[pattern[1]].innerText;
    pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showwinner(pos1);
        audio.autoplay();
      }
    }
  }
};
resetbtn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
