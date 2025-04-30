const dialog = document.getElementById('dialog');
const continueBtn = document.getElementById('continue');
const boxes = document.querySelectorAll('.box');



dialog.showModal();

const GameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    return {board};
})();

const Player = (name, maker) => {
    return {name, maker};
};

const GameController = (() => {
    let player1;
    let player2;
    let currentPlayer;
    let hasWin = false;

    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ];

    const addPlayers = (name1, name2) => {
        player1 = Player(name1, "X");
        player2 = Player(name2, "O");
        currentPlayer = player1;
    };

    const playRound = (index) => {
        // 1. Check if the selected index in Gameboard.board is empty
        if(GameBoard.board[index] === ""){
            GameBoard.board[index] = currentPlayer.maker;
        } else{
            alert("Box is Filled");
            return;
        }
        // 2. If yes, set the marker ("X" or "O") at that index
        // 3. Check for winner
        checkWinner();
        // 4. Check for tie
        if(!hasWin){
            checkTie();
        }
        
        // 5. Switch current player
        switchPlayer();
    };

    const switchPlayer = () => {
        // If currentPlayer is player1, switch to player2. Otherwise, switch back.
        if(currentPlayer === player1){
            currentPlayer = player2;
        } else{
            currentPlayer = player1;
        }
    };

    const checkWinner = () => {
        // 1. Check all winning combinations (rows, columns, diagonals)
        winningCombos.forEach((combo) => {
            const [a, b, c] = combo;

            if(GameBoard.board[a] !== "" && GameBoard.board[a] === GameBoard.board[b] && GameBoard.board[a] === GameBoard.board[c]){
                hasWin = true;
                console.log("winner", currentPlayer.name);
            }

           
        }); 
        
        if(hasWin){
            console.log("Game Over!");
        }
        // 2. If the current player has 3 in a row, announce the winner
    };

    const checkTie = () => {
        const isBoardFull = GameBoard.board.every(cell => cell !== "");

        if(isBoardFull){
            console.log("Game Over Tie");
        }
    };

    return {addPlayers, playRound};
})();

continueBtn.addEventListener('click', () =>{
    const playerOne = document.querySelector('#player-one').value;
    const playerTwo = document.querySelector('#player-two').value;
    GameController.addPlayers(playerOne, playerTwo);
    dialog.close();
});

GameController.playRound(0);
