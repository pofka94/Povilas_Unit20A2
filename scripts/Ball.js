let ctx = document.querySelector('Canvas').getContext('2d');

const Ball = function(x,y,radius) { // Sets parameters for a ball every time this function is called
    this.colour = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    this.direction = Math.random() * Math.PI *2;
    this.radius = radius;
    this.speed = 6;
    this.x = x;
    this.y = y;
};

Ball.prototype = {  // This whole thing is used to reflect the ball of the walls and keep the speed going at the same pace
    updatePosition:function(width, height){
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        if(this.x - this.radius < 0) {
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
        } else if(this.x + this.radius > width) {
            this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
        } 

        if(this.y - this.radius < 0) {
            this.y = this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        } else if(this.y + this.radius > height) {
            this.y = height - this.radius;
            this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        }
    }
};

let height = 400;
let width = 700;

let positionX = width / 2;
let positionY = height / 2;

var balls = [];    // Creates an array to store balls

for(let i = 0; i < 10; i++){    //Runs this loop 10 times when webpage starts
    balls.push(new Ball(positionX, positionY, 20)); // Uses already made variables to make a new ball
}

function refresh(){
    window.requestAnimationFrame(refresh);

    ctx.canvas.width = width;
    ctx.canvas.height = height;
    
    for(let i = 0; i < balls.length; i++){

        let ball = balls[i];

        ctx.fillStyle = ball.colour;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();

        ball.updatePosition(width, height);
    }
} 

refresh();