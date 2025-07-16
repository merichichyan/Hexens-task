let blockSize = 20;
let total_row = 20;
let total_col = 20;
let board;
let context;
let speedX = 0;
let speedY = 0;
let foodX;
let foodY;
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let snakeBody = [];
let gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 200);
}

function placeFood() {
     foodX = Math.floor(Math.random() * total_col) * blockSize;

     foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);


    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0
        || snakeX > total_col * blockSize
        || snakeY < 0
        || snakeY > total_row * blockSize) {

        showGameOverModal()
        setTimeout(resetGame, 2000);
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            showGameOverModal()
            setTimeout(resetGame, 2000);
        }
    }
}

function changeDirection(e) {
    if (e.code === "ArrowUp" && speedY !== 1) {
        speedX = 0;
        speedY = -1;
    }
    else if (e.code === "ArrowDown" && speedY !== -1) {
        speedX = 0;
        speedY = 1;
    }
    else if (e.code === "ArrowLeft" && speedX !== 1) {
        speedX = -1;
        speedY = 0;
    }
    else if (e.code === "ArrowRight" && speedX !== -1) {
        speedX = 1;
        speedY = 0;
    }
}

function showGameOverModal() {
    gameOver = true;
    let modal = document.getElementById("gameOverModal");
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
        resetGame();
    }, 2000);
}

function resetGame() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    placeFood();
    gameOver = false;
}
