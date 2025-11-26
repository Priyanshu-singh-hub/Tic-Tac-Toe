let day = new Date().getDate()
let month = parseInt(new Date().getMonth()) + 1
let year = new Date().getFullYear()
document.getElementById("date").innerHTML = "Date: " + day + "/" + month + "/" + year

let player = "O";
let count = 0;
const jsConfetti = new JSConfetti()
let isGameActive = true;

function clickHandler(cellid) {

    if (document.getElementById(cellid).innerHTML != "" || !isGameActive) {
        return;
    }


    if (player == "O") {
        document.getElementById(cellid).innerHTML = player
        count++;
        checkWinner()
        player = "X"
    }

    else {
        document.getElementById(cellid).innerHTML = player
        count++;
        checkWinner()
        player = "O"
    }
}


function checkWinner() {
    let c1 = document.getElementById("cell1").innerHTML
    let c2 = document.getElementById("cell2").innerHTML
    let c3 = document.getElementById("cell3").innerHTML
    let c4 = document.getElementById("cell4").innerHTML
    let c5 = document.getElementById("cell5").innerHTML
    let c6 = document.getElementById("cell6").innerHTML
    let c7 = document.getElementById("cell7").innerHTML
    let c8 = document.getElementById("cell8").innerHTML
    let c9 = document.getElementById("cell9").innerHTML

    if (player == c1 && player == c2 && player == c3) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c4 && player == c5 && player == c6) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }


    else if (player == c7 && player == c8 && player == c9) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c1 && player == c4 && player == c7) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c2 && player == c5 && player == c8) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c3 && player == c6 && player == c9) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c1 && player == c5 && player == c9) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (player == c3 && player == c5 && player == c7) {
        document.getElementById("result").innerHTML = player + " is the winner"
        isGameActive = false;
        jsConfetti.addConfetti()
    }

    else if (count == 9) {
        document.getElementById("result").innerHTML = "Game Drawn"
        isGameActive = false;
    }
}



function restartGame() {
    window.location = "index.html"
}