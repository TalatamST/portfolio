'use strict';

var pArray = new Array();
var mode = 0;

function setup() {
    //background(0);
    createCanvas(800, 800);

    pArray[0] = new Jumbo();
    for (var i = 1; i < 11; i++) {
        pArray[i] = new OddSquad();
    }
    for (var i = 11; i < 1000; i++) {
        pArray[i] = new Normal();
    }
}

function draw() {
    background(0);
    for (var i = 0; i < pArray.length; i++) {
        pArray[i].show();
        pArray[i].move();
    }
    if (frameCount % 120 == 0)
        mode += mode == 6 ? -6 : 1;
}

class Normal {

    constructor() {
        //    this.x=width/2;
        //    this.y=height/2;
        this.x = Math.floor((Math.random() * 1000) + 20);
        this.y = Math.floor(Math.random() * 1000);
        this.speed = Math.random() * 20 + 25;
        this.angle = (Math.PI / 3) * Math.random() * 6;
        this.xOffset = 0;
        this.yOffset = 0;
    }
    move() {

        if (this.x > 670 + this.xOffset) {
            this.x = 670 + this.xOffset;
        } else if (this.x < 70 + this.xOffset) {
            {
                this.x = 70 + this.xOffset;
            }
        }
        if (this.y > 670 + this.yOffset) {
            this.y = 670 + this.yOffset;
        } else if (this.y < 70 + this.yOffset) {
            {
                this.y = 70 + this.yOffset;
            }
        }
        switch (mode) {
            case 0:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.cos(this.angle) * this.speed;
                this.xOffset = width / 2;
                this.yOffset = 0;
                break;
            case 1:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * Math.cos(this.angle) * this.speed;
                break;
            case 2:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.tan(this.angle) * this.speed;
                this.xOffset = 0;
                this.yOffset = height / 2;
                break;
            case 3:
                this.x += Math.sin(this.angle) * this.speed;
                this.y += Math.cos(this.angle) * this.speed;
                this.yOffset = 0;
                break;
            case 4:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.yOffset = 0;
                break;
            case 5:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.tan(this.angle) * this.speed;
                this.yOffset = Math.sin(this.angle) * 150;
                this.xOffset = Math.cos(this.angle) * 60;
                textAlign(CENTER, CENTER);
                text("SpEeD", this.x, this.y);
                break;
            case 6:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                break;
        }
        this.angle += .09;
    }

    show() {
        noStroke();
        this.randColor();
        colorMode(HSB, 100);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, 2, 2);
    }

    randColor() {
        this.r = (floor(Math.random() * (255) + 100));
        this.g = (floor(Math.random() * (255) + 100));
        this.b = (floor(Math.random() * (255) + 100));
    }
}


class OddSquad {

    constructor() {
        //    this.x=width/2;
        //    this.y=height/2;

        this.x = Math.floor((Math.random() * 1000) + 20);
        this.y = Math.floor(Math.random() * 1000);
        this.speed = Math.random() * 20 + 25;
        this.angle = (Math.PI / 3) * Math.random() * 6;
        this.xOffset = 0;
        this.yOffset = 0;
    }

    move() {

        if (this.x > 670 + this.xOffset) {
            this.x = 670 + this.xOffset;
        } else if (this.x < 70 + this.xOffset) {
            {
                this.x = 70 + this.xOffset;
            }
        }
        if (this.y > 670 + this.yOffset) {
            this.y = 670 + this.yOffset;
        } else if (this.y < 70 + this.yOffset) {
            {
                this.y = 70 + this.yOffset;
            }
        }
        switch (mode) {
            case 0:
                this.y += Math.tan(this.angle) * this.speed;
                this.x += Math.cos(this.angle) * this.speed;
                this.yOffset = width / 2;
                this.xOffset = 0;
                break;
            case 1:
                this.y += Math.tan(this.angle) * this.speed;
                this.x += Math.sin(this.angle) * Math.cos(this.angle) * this.speed;
                break;
            case 2:
                this.y += Math.random() * 50 * (this.speed);
                this.x = Math.random() * 100;
                this.yOffset = 0;
                this.xOffset = height / 2;
                break;
            case 3:
                this.y += Math.sin(this.angle) * this.speed;
                this.x += Math.cos(this.angle) * this.speed;
                this.xOffset = 0;
                break;
            case 4:
                this.y += Math.cos(this.angle) * this.speed;
                this.x += Math.sin(this.angle) * this.speed;
                this.xOffset = 0;
                break;
            case 5:
                this.y += Math.tan(this.angle) * this.speed;
                this.x += Math.tan(this.angle) * this.speed;
                this.xOffset = Math.sin(this.angle) * 150;
                this.yOffset = Math.cos(this.angle) * 60;
                textAlign(CENTER, CENTER);
                text("SpEeD", this.x, this.y);
                break;
            case 6:
                this.y += Math.cos(this.angle) * this.speed;
                this.x += Math.sin(this.angle) * this.speed;
                break;
        }
        this.angle += .09;
    }
    show() {
        noStroke();

        push();
        //colorMode(RGB, 255);
        //fill(this.r, this.g, this.b);
        rotate(this.angle);
        //rect((floor)this.x, (floor)this.y, 25, 25);
        pop();
        ellipse(this.x, this.y, 5, 5);
    }
}



class Jumbo {

    constructor() {
        //    this.x=width/2;
        //    this.y=height/2;
        //super();
        this.x = Math.floor((Math.random() * 1000) + 20);
        this.y = Math.floor(Math.random() * 1000);
        this.speed = Math.random() * 20 + 25;
        this.angle = (Math.PI / 3) * Math.random() * 6;
        this.xOffset = 0;
        this.yOffset = 0;
    }
    move() {

        if (this.x > 670 + this.xOffset) {
            this.x = 670 + this.xOffset;
        } else if (this.x < 70 + this.xOffset) {
            {
                this.x = 70 + this.xOffset;
            }
        }
        if (this.y > 670 + this.yOffset) {
            this.y = 670 + this.yOffset;
        } else if (this.y < 70 + this.yOffset) {
            {
                this.y = 70 + this.yOffset;
            }
        }
        switch (mode) {
            case 0:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.cos(this.angle) * this.speed;
                this.xOffset = width / 2;
                this.yOffset = 0;
                break;
            case 1:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * Math.cos(this.angle) * this.speed;
                break;
            case 2:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.tan(this.angle) * this.speed;
                this.xOffset = 0;
                this.yOffset = height / 2;
                break;
            case 3:
                this.x += Math.sin(this.angle) * this.speed;
                this.y += Math.cos(this.angle) * this.speed;
                this.yOffset = 0;
                break;
            case 4:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.yOffset = 0;
                break;
            case 5:
                this.x += Math.tan(this.angle) * this.speed;
                this.y += Math.tan(this.angle) * this.speed;
                this.yOffset = Math.sin(this.angle) * 150;
                this.xOffset = Math.cos(this.angle) * 60;
                textAlign(CENTER, CENTER);
                text("SpEeD", this.x, this.y);
                break;
            case 6:
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                break;
        }
        this.angle += .09;
    }

    show() {
        noStroke();

        ellipse(20, 20, 20, 20);
    }


}
