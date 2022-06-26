function changeDirection(event) {
    let left = 37;
    let right = 39;
    let up = 38;
    let down = 40;
    // Tránh rắn đảo chiều
    // if (changeDirection) {
    //     return;
    //     changeDirection = true;
    // }
    let keyPress = event.keyCode;
    let goingUp = dy === -20;
    let goingDown = dy === 20;
    let goingLeft = dx === -20;
    let goingRight = dx === 20;

    if (keyPress === left && !goingRight) {
        dx = -20
        dy = 0
    }
    if (keyPress === right && !goingLeft) {
        dx = 20
        dy = 0
    }
    if (keyPress === up && !goingDown) {
        dx = 0
        dy = -20
    }
    if (keyPress === down && !goingUp) {
        dx = 0
        dy = 20
    }
}

function gameEnd() {
    for (let i = 4; i < snake.length; i++) {
        let hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (hasCollided) {
            return true;
        }
    }
    let hitLeftWall = snake[0].x < -20
    let hitRightWall = snake[0].x > canvas.width + 10;
    let hitTopWall = snake[0].y < -20
    let hitBottomWall = snake[0].y > canvas.height + 10;
    // console.log("Trái " + hitLeftWall)
    // console.log("Phải " + hitRightWall)
    // console.log("Trên " + hitTopWall)
    // console.log("Dưới " + hitBottomWall)
    return hitTopWall || hitBottomWall || hitLeftWall || hitRightWall

}