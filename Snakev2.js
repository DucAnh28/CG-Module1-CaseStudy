let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let dx = 20
let dy = 0
let score = 0
let snake = [{x: 240, y: 200}, {x: 220, y: 200}, {x: 200, y: 200}, {x: 180, y: 200}, {x: 160, y: 200},];

main();
document.addEventListener("keydown", changeDirection);

function reset(){
    document.location.reload();
}

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        drawSnake();
        moveSnake();
        drawApple();
        if (gameEnd()) {
            alert("Game Over")
            return;
        }
        main();
    }, 100)
}

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    ctx.fillStyle = "lightblue"
    ctx.strokeStyle = "darkblue"
    ctx.fillRect(snakePart.x, snakePart.y, 20, 20)
    ctx.strokeRect(snakePart.x, snakePart.y, 20, 20)
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head)
    var snakeEatFood = snake[0].x === apple_x && snake[0].y === apple_y;
    if (snakeEatFood) {
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        divi20x = random_apple(0,canvas.width);
        divi20y = random_apple(0,canvas.height);
        while (divi20x % 20 != 0) {
            divi20x = random_apple(0, canvas.width - 20);
            console.log(divi20x)
        }
        while (divi20y % 20 != 0) {
            divi20y = random_apple(0, canvas.height - 20);
            console.log(divi20y)
        }
        make_Apple();
    } else {
        snake.pop();
    }
}

