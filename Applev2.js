let apple_x
let apple_y
function random_apple(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
}

function make_Apple() {
    apple_x = random_apple(10, canvas.width -10)
    apple_y = random_apple(10, canvas.height -10)
    snake.forEach(function appleEated(part) {
        let eated = part.x == apple_x && part.y == apple_y;
        if (eated) make_Apple();
    });
}

function drawApple() {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "darkred";
    ctx.fillRect(apple_x, apple_y, 20, 20);
    ctx.strokeRect(apple_x, apple_y, 20, 20);
}
make_Apple()