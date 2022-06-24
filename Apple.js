class Apple{
    constructor() {
        let isTouching
        while (true){
            isTouching = false;
            this.x = Math.floor(Math.random()* canvas.width /snake.size) * snake.size
            this.y = Math.floor(Math.random()* canvas.height /snake.size) * snake.size
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y){
                    isTouching = true
                }
            }
            if (!isTouching){
                break
            }
            this.color = "yellow";
            this.size = snake.size
        }
    }
}
