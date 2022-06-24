var canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

window.onload = () => {
    gameLoop();
}

function gameLoop(){
    setInterval(show,1000/15); // 15 is the fps
}

function show(){
    update();
    drawSnake();
    drawApple();
}

function update(){

}

function drawSnake(){

}

function drawApple(){

}

function keyDown(event){
    switch (event.keyCode){
        case 38 && snake.rotateY != -1:
            snake.rotateX = 0
            snake.rotateY = -1
    }
}
let snake = new Snake()
let apple = new Apple()