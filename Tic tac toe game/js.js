let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let winnerMsg = document.querySelector(".winner_msg");
let winner_box = document.querySelector(".winner_box");
let container = document.querySelector(".container");
let newGame = document.querySelector(".new_game");
let turn0 = true;
let moveCount = 0;

const winpattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  moveCount = 0;
};

const board = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];

const draw = () => {
  if (moveCount === 9) {
    winnerMsg.innerText = `Match draw !`;
    disableBoxes();
    container.classList.add("hide");
    winner_box.classList.remove("hide");
  }
};
const showWinner = (winner) => {
  winnerMsg.innerText = `Player ${winner} wins!`;
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        disableBoxes();
        showWinner(pos1val);
        container.classList.add("hide");
        winner_box.classList.remove("hide");
      }
    }
  }
  draw();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      box.setAttribute("disabled", "disabled");
      turn0 = false;
      moveCount++;
      checkWinner();
    } else {
      box.innerText = "O";
      box.setAttribute("disabled", "disabled");
      turn0 = true;
      moveCount++;
      checkWinner();
    }
  });
});

resetbtn.addEventListener("click", resetGame);
newGame.addEventListener("click", () => {
  container.classList.remove("hide");
  winner_box.classList.add("hide");
  resetGame();
});
