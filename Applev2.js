let apple_x
let apple_y
let divi20x
let divi20y

// tạo số ngẫu nhiên trong đoạn từ min đến max
function random_apple(min, max) {
    Math.floor((Math.random() * (max - min) + min))
}

for (let i = 0; i > 0; i++) {
    divi20x = random_apple(0, canvas.width)
    if (divi20x % 20 !== 0) {
        random_apple(0, canvas.width)
    } else {
        break;
    }
}
for (let i = 0; i > 0; i++) {
    divi20y = random_apple(0, canvas.height)
    if (divi20y % 20 !== 0) {
        random_apple(0, canvas.height)
    } else {
        break;
    }
}

function make_Apple() {
    apple_x = divi20x
    apple_y = divi20y
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
    // console.log("Đây là X: " + apple_x)
    // console.log("Đây là y: " + apple_y)
}
make_Apple()