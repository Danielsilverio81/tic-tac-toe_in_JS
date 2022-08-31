let player;
const player1 = 'X';
const player2 = 'O';

//function that randomly generates the first to play
const getPlayer = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
let choice = getPlayer(2, 1);
choice === 1 ? player = player1 : player = player2;

const body = document.querySelector('body');
const reload = document.querySelector('.reload')
const boxGame = document.querySelector('.box-game');
const result = document.querySelector('.result');
const pressRestart = document.querySelector('.press-restart');
const view = document.querySelector('.display-player');

//function that starts the game
const startGame = () => {
    timePlayer(player);
    firstDisplay(player)
};
//function that shows on screen first player
const firstDisplay = (player) => {
    if(player == player1) {
        view.innerHTML = `<p>Quem começa é o: <span>${player}</span></p>`
    } else {
        view.innerHTML = `<p>Quem começa é o: <strong>${player}</strong></p>`
    }
}

const timePlayer = (playerTime) => {
    boxGame.addEventListener('click', (event) => {
        const el = event.target;
        if(el.classList.contains('space')) {
            if(playerTime == player1) {
                el.classList.add(player1)
                el.setAttribute('turn', player1)
                el.innerHTML = '<p>X</p>';
                playerTime = player2;
            } else {
                el.classList.add(player2)
                el.setAttribute('turn', player2)
                el.innerHTML = '<p>O</p>';
                playerTime = player1;
            }
        } 
        winner();
        display(playerTime);
    })
};

const display = (playerTime) => {
    if (playerTime == player1) {
        view.innerHTML = `<p>E a vez do: <span>${playerTime}</span></p>`
    } else if(playerTime == player2) {
        view.innerHTML = `<p>E a vez do: <strong>${playerTime}</strong></p>`
    }
}
//function that checks the champion
function winner() {
    let a0 = document.getElementById('a0').getAttribute('turn');
    let a1 = document.getElementById('a1').getAttribute('turn');
    let a2 = document.getElementById('a2').getAttribute('turn');

    let b3 = document.getElementById('b3').getAttribute('turn');
    let b4 = document.getElementById('b4').getAttribute('turn');
    let b5 = document.getElementById('b5').getAttribute('turn');

    let c6 = document.getElementById('c6').getAttribute('turn');
    let c7 = document.getElementById('c7').getAttribute('turn');
    let c8 = document.getElementById('c8').getAttribute('turn');

    let vencedor = '';

    if ((a0 == a1 && a0 == a2 && a0 != '') || (a0 == b3 && a0 == c6 && a0 != '') || (a0 == b4 && a0 == c8 && a0 != '')) {
        vencedor = a0;
    } else if((b4 == a1 && b4 == c7 && b4 != '') || (b4 == b3 && b4 == b5 && b4 != '') || (b4 == a0 && b4 == c8 && b4 != '') || (b4 == c6 && b4 == a2 && b4 != '')) {
        vencedor = b4;
    } else if((c8 == b5 && c8 == a2 && c8 != '') || (c8 == c7 && c8 == c6 && c8 != '')) {
        vencedor = c8;
    } else if((a0 != '' && a1 != '' && a2 != '' && b3 !='' && b4 !='' && b5 != '' && c6 != '' && c7 !='' && c8 !='' && vencedor == '')) {
        vencedor = ''
    } else { 
        return;
    }
    text(vencedor);
};

const text = (vencedor) => {
restartGame();
if (vencedor != '') {
    return result.innerText = `O vencedor foi o jogador que escolheu: ${vencedor}`
} else {
    return result.innerHTML = `<strong>Vocês Empataram</strong>`
}
};
//function that restarts the game
const restartGame = () => {
    body.style.backgroundImage = 'radial-gradient(circle at 50% -20.71%, #fff56b 0, #fff866 6.25%, #fdfa63 12.5%, #e7fb61 18.75%, #d0fb62 25%, #b5fa65 31.25%, #97f86a 37.5%, #73f670 43.75%, #3cf278 50%, #00ee82 56.25%, #00ea8f 62.5%, #00e69d 68.75%, #00e2ad 75%, #00dfbe 81.25%, #00dbd1 87.5%, #00d8e3 93.75%, #00d6f6 100%)'
    pressRestart.style.display = 'flex'
    pressRestart.addEventListener('click', newGame)
};

const newGame = () => {
    let contador = 3;
    setInterval(() => {
        reload.innerHTML = `Reiniciando em ${contador--}`
    }, 1000);

    setTimeout(() => location.reload(), 4000)
};


startGame();
