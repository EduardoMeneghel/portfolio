let board = ['','','','','','','','','',];
let playerTime = 0;
let player = "Messi";
let symbols = ['x','o'];
let gameOver = false;

function handleMove(position) {

if (gameOver){
    return;
}

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        if(gameOver == false) {

            if (playerTime == 0) {
                playerTime = 1;
                player = "CR7";
            } else {
                playerTime = 0;
                player = "MESSI";
            }

        }
    }
    return gameOver;
}

function isWin() {
    
    let winStates =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]

    for(let i = 0; i < winStates.length; i++){
        let sequence = winStates[i];
        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];

        if(board[position1] == board[position2] && board[position1] == board[position3] && board[position1] != '') {
            return true;
        }
    }
    return false;
}