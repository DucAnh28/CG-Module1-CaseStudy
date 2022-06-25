function random_food(min, max) {
    return Math.floor((Math.random() * (max - min) + min))
}

function make_Apple() {
    apple_x = random_food(0, canvas.width - 10)
    apple_y = random_food(0, canvas.height - 10)
    snake.forEach(function appleEated(part) {
        let eated = part.x == apple_x && part.y == apple_y;
        if (eated) {
            make_Apple()
        }
    });
}

function drawApple() {
    ctx.fillStyle = "lightgreen"
    ctx.strokeStyle = "darkgreen"
    ctx.fillRect(apple_x, apple_y, 20, 20)
    ctx.strokeRect(apple_x, apple_y, 20, 20)
}