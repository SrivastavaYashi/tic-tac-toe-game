console.log("welcome to game");
let turn = "X";
let gameover = false;
//function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function for winning condition
const checkWin = () => {
  let boxtexts = document.querySelectorAll(".box");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerHTML !== "" &&
      boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML &&
      boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML
    )
      gameover = true;
  });
};

//gamelogic
let boxes = document.querySelectorAll(".box");
// console.log(boxes);
const array = Array.from(boxes);
// console.log(array);

array.forEach((element) => {
  let boxtext = element;
  boxtext.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      checkWin();
      if (gameover)
        document.getElementsByClassName("win")[0].innerHTML =
          "hurrah!! you won";
      else turn = changeTurn();
    }
  });
});

document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  array.forEach((element) => {
    element.innerHTML = "";
    document.getElementsByClassName("win")[0].innerHTML = "";
    gameover = false;
  });
});
