let player;
const player1 = 'X';
const player2 = 'O';
let gameOver = false;

const getPlayer = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
let choice = getPlayer(2, 1);
choice === 1 ? player = player1 : player = player2;

const spaces = document.querySelectorAll('.space');
const turns = document.querySelectorAll('[turn]');
const body = document.querySelector('body');
const reload = document.querySelector('.reload')
const boxGame = document.querySelector('.box-game');
const result = document.querySelector('.result');
const pressRestart = document.querySelector('.press-restart');


const startGame = () => {
    timePlayer(player);
};

const timePlayer = (playerTime) => {
    if(gameOver) {return;}
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
    })
};

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
} else if (vencedor == '') {
    return result.innerHTML = `Vocês Empataram`
}
};

const restartGame = () => {
    body.style.background = '#5F9EA0'
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
