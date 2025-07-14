let blockSize = 20;
let total_row = 20;
let total_col = 20;
let board;
let context;

window.onload = function () {
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");
    context.fillStyle = "green";
    context.fillRect(0, 0, board.width, board.height);
}
