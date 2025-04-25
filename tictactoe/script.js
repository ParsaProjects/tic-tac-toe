const dialog = document.getElementById('dialog');
const continueBtn = document.getElementById('continue');


dialog.showModal();

function player(playerOne, playerTwo){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
}

function addPlayers(playerOne, playerTwo){
    const players = new  player(playerOne, playerTwo);
}

continueBtn.addEventListener('click', () =>{
    const playerOne = document.querySelector('#player-one').value;
    const playerTwo = document.querySelector('#player-two').value;
});