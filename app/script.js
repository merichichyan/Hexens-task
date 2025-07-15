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

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");
    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);
    placeFood();
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 100);
}

function placeFood() {
     foodX = Math.floor(Math.random() * total_col) * blockSize;

     foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function update() {
    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    context.fillStyle = "white";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
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
