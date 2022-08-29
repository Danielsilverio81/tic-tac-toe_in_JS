let player;
const player1 = 'X';
const player2 = 'O';
const getPlayer = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
let choice = getPlayer(2, 1);
choice === 1 ? player = player1 : player2;



const boxGame = document.querySelector('.box-game');

const startGame = () => {
    changePlayer(player);
}

const changePlayer = (playerTime) => {
    boxGame.addEventListener('click', (event) => {
        const el = event.target;
        if(el.classList.contains('space')) {
            if(playerTime == player1) {
                el.innerText = player1;
                playerTime = player2;
            } else {
                el.innerText = player2;
                playerTime = player1;
            }
        }  
    })
};


startGame();