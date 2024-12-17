let gameboard = (function Gameboard () {
    let board = ["", "", "", "", "", "", "", "", ""]
    return {board}
})()

const game = function(){
        container = document.querySelector("body")
        if ((gameboard.board[1 -1] == "X" && gameboard.board[2 -1] == "X" && gameboard.board[3 -1] == "X") || (gameboard.board[4 -1] == "X" && gameboard.board[5 -1] == "X" && gameboard.board[6 -1] == "X") || (gameboard.board[7 -1] == "X" && gameboard.board[8 -1] == "X" && gameboard.board[9 -1] == "X") || (gameboard.board[1  -1] == "X" && gameboard.board[4  -1] == "X" && gameboard.board[7  -1] == "X") || (gameboard.board[2 -1] == "X" && gameboard.board[5 -1] == "X" && gameboard.board[8 -1] == "X") || (gameboard.board[3 -1] == "X" && gameboard.board[6 -1] == "X" && gameboard.board[9 -1] == "X") || (gameboard.board[7 -1] == "X" && gameboard.board[5 -1] == "X" && gameboard.board[3 -1] == "X") || (gameboard.board[1 -1] == "X" && gameboard.board[5 -1] == "X" && gameboard.board[9 -1] == "X")){
            let pito = document.createElement("h1")
            pito.textContent = "player 1 has won"
            container.prepend(pito)
            
        }
        else if ((gameboard.board[1 -1] == "O" && gameboard.board[2 -1] == "O" && gameboard.board[3 -1] == "O") || (gameboard.board[4 -1] == "O" && gameboard.board[5 -1] == "O" && gameboard.board[6 -1] == "O") || (gameboard.board[7 -1] == "O" && gameboard.board[8 -1] == "O" && gameboard.board[9 -1] == "O") || (gameboard.board[1  -1] == "O" && gameboard.board[4  -1] == "O" && gameboard.board[7 -1] == "O") || (gameboard.board[2 -1] == "O" && gameboard.board[5 -1] == "O" && gameboard.board[8 -1] == "O") || (gameboard.board[3 -1] == "O" && gameboard.board[6 -1] == "O" && gameboard.board[9 -1] == "O") || (gameboard.board[7 -1] == "O" && gameboard.board[5 -1] == "O" && gameboard.board[3 -1] == "O") || (gameboard.board[1 -1] == "O" && gameboard.board[5 -1] == "O" && gameboard.board[9 -1] == "O")){
            let pito = document.createElement("h1")
            pito.textContent = "player 2 has won"
            container.prepend(pito)
            
        }
    
        else if (gameboard.board[1 -1] !== "" && gameboard.board[2 -1] !== "" && gameboard.board[3 -1] !== "" && gameboard.board[4 -1] !== "" && gameboard.board[5 -1] !== "" && gameboard.board[6 -1] !== "" && gameboard.board[7 -1] !== "" && gameboard.board[8 -1] !== "" && gameboard.board[9 -1] !== ""){
            let pito = document.createElement("h1")
            pito.textContent = "game ended in a tie"
            container.prepend(pito)
            
        }
}

let render = function(){
    let one = document.querySelector(".one")
    let two = document.querySelector(".two")
    let three = document.querySelector(".three")
    let four = document.querySelector(".four")
    let five = document.querySelector(".five")
    let six = document.querySelector(".six")
    let seven = document.querySelector(".seven")
    let eight = document.querySelector(".eight")
    let nine = document.querySelector(".nine")

    let count = 1

    one.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[0] = "X"
            one.textContent = "X"
        }
        else {
            gameboard.board[0] = "O"
            one.textContent = "0"
        }
        count += 1
        game()
    })
    two.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[1] = "X"
            two.textContent = "X"
        }
        else {
            gameboard.board[1] = "O"
            two.textContent = "O"
        }
        count += 1
        game()
    })
    three.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[2] = "X"
            three.textContent = gameboard.board[2]
        }
        else {
            gameboard.board[2] = "O"
            three.textContent = gameboard.board[2]
        }
        game()
        count += 1
    })
    four.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[3] = "X"
            four.textContent = gameboard.board[3]
        }
        else {
            gameboard.board[3] = "O"
            four.textContent = gameboard.board[3]
        }
        count += 1
        game()
    })
    five.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[4] = "X"
            five.textContent = gameboard.board[4]
        }
        else {
            gameboard.board[4] = "O"
            five.textContent = gameboard.board[4]
        }
        game()
        count += 1
    })
    six.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[5] = "X"
            six.textContent = gameboard.board[5]
        }
        else {
            gameboard.board[5] = "O"
            six.textContent = gameboard.board[5]
        }
        count += 1
        game()
    })
    seven.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[6] = "X"
            seven.textContent = gameboard.board[6]
        }
        else {
            gameboard.board[6] = "O"
            seven.textContent = gameboard.board[6]
        }
        count += 1
        game()
    })
    eight.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[7] = "X"
            eight.textContent = gameboard.board[7]
        }
        else {
            gameboard.board[7] = "O"
            eight.textContent = gameboard.board[7]
        }
        count += 1
        game()
    })
    nine.addEventListener("click", () => {
        if (count % 2 != 0) {
            gameboard.board[8] = "X"
            nine.textContent = gameboard.board[8]
       
        }
        else {
            gameboard.board[8] = "O"
            nine.textContent = gameboard.board[8]
         
        }
        count += 1
        game()
    })

}()
