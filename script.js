const squareCells = document.querySelectorAll(".square-cell");
let currentPlayer = "X";
let currentPlayerShow = document.querySelector(".title-word-4");
currentPlayerShow.innerHTML = currentPlayer;

let gameOver = false;

squareCells.forEach((cell) => {
    const span = cell.querySelector("span");

    cell.addEventListener('click', () => {
        if (!gameOver && span.textContent === "") {
            span.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            currentPlayerShow.innerHTML = currentPlayer;
            WhoIsWinner();
        }
    });
});

function WhoIsWinner() {
    for (const [a, b, c] of [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]]) {
        const checkCellA = squareCells[a].querySelector("span").textContent,
            checkCellB = squareCells[b].querySelector("span").textContent,
            checkCellC = squareCells[c].querySelector("span").textContent;

        if (checkCellA && checkCellA === checkCellB && checkCellA === checkCellC) {
            gameOver = true;
            alert(`Player ${currentPlayer === "X" ? "0" : "X"} wins!`);

           
            squareCells[a].classList.add("winner-cell");
            squareCells[b].classList.add("winner-cell");
            squareCells[c].classList.add("winner-cell");

            return;
        }
    }

    if ([...squareCells].every((cell) => cell.querySelector("span").textContent !== "")) {
        gameOver = true;
        alert("Wow, that's a tie");
        squareCells.forEach((cell)=>{
            cell.classList.add("draw-cell")
        })
    }

}

const replay = document.querySelector(".replay");

replay.addEventListener('click', () => {
    window.location.reload();
});

const collapsible = document.querySelector(".collapsible");
const hamburger = document.querySelector(".hamburger");
const bars = document.querySelectorAll(".bar"); 

collapsible.style.transform = "translateX(200%)";


function toggleCollapsible() {
    if (collapsible.style.transform === "translateX(200%)") {
        collapsible.style.transform = "translateX(0)";
        hamburger.style.backgroundColor = "wheat";


    
    } else {
        collapsible.style.transform = "translateX(200%)";

        
    }
}


hamburger.addEventListener('click', toggleCollapsible);
