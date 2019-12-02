var dice;
var total = 0;

function setup() {
    noLoop();
    var canvas = createCanvas(500, 500);
    canvas.parent('sketch-div');
    dice = [];
    ellipseMode(CENTER);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            dice[i * 3 + j] = new Die(120 * i + 20, 120 * j + 20);
        }
    }
}

function draw() {
    background(9, 13, 227);
    //die=new Die(100, 100);
    textSize(18);
    fill(52, 195, 235);
    text("Total=" + total, 10, 450);
    total = 0;
    for (let die of dice) {
        die.show();
        if (mousePressed) {
            die.roll();
        }
    }
}

function mousePressed() {

    redraw();

}
class Die //models one single dice cube
{
    //variable declarations here
    constructor(x, y) //constructor
    {
        this.x = x;
        this.y = y;
        this.rand = Math.floor((Math.random() * 6) + 1);
        console.log(this.rand);
        //variable initializations here
    }
    roll() {
        console.log("hello");
        this.rand = Math.floor((Math.random() * 6) + 1);

        total = total + this.rand;
    }
    show() {
        if (mousePressed) {
            fill(255);
            rect(this.x, this.y, 100, 100, 12);
            fill(0);
            if (this.rand == 1) {
                ellipse(this.x + 50, this.y + 50, 15, 15);
            } else if (this.rand == 2) {
                ellipse(this.x + 80, this.y + 23, 15, 15);
                ellipse(this.x + 25, this.y + 79, 15, 15);
            } else if (this.rand == 3) {
                ellipse(this.x + 50, this.y + 50, 15, 15);
                ellipse(this.x + 80, this.y + 23, 15, 15);
                ellipse(this.x + 25, this.y + 79, 15, 15);
            } else if (this.rand == 4) {
                ellipse(this.x + 80, this.y + 23, 15, 15);
                ellipse(this.x + 25, this.y + 79, 15, 15);
                ellipse(this.x + 25, this.y + 23, 15, 15);
                ellipse(this.x + 80, this.y + 79, 15, 15);
            } else if (this.rand == 5) {
                ellipse(this.x + 50, this.y + 50, 15, 15);
                ellipse(this.x + 80, this.y + 23, 15, 15);
                ellipse(this.x + 25, this.y + 79, 15, 15);
                ellipse(this.x + 25, this.y + 23, 15, 15);
                ellipse(this.x + 80, this.y + 79, 15, 15);
            } else if (this.rand == 6) {
                ellipse(this.x + 25, this.y + 50, 15, 15);
                ellipse(this.x + 80, this.y + 23, 15, 15);
                ellipse(this.x + 25, this.y + 79, 15, 15);
                ellipse(this.x + 25, this.y + 23, 15, 15);
                ellipse(this.x + 80, this.y + 79, 15, 15);
                ellipse(this.x + 80, this.y + 50, 15, 15);
            }
        }
    }
}
