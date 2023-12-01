var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            setTimeout(makeComputerMove, 500);
        }
    }
}

function makeComputerMove() {
    var emptyCells = [];
    for (var i = 0; i < board.length; i++) {
        if (board[i] === '') {
            emptyCells.push(i);
        }
    }
    var randomIndex = Math.floor(Math.random() * emptyCells.length);
    makeMove(emptyCells[randomIndex]);
}

function checkWinner() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            alert('Player ' + board[a] + ' wins!');
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        alert('It\'s a tie!');
        resetGame();
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}