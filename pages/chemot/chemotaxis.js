'use strict';

var x = 0;
var y = 0;
var w = 2;
var triangle;

var bacteria = new Array();

//declare bacteria variables here

function preload() {
    triangle = loadImage("../../images/Untitled.png");
}


function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('sketch-div');
    background(0, 102, 153);

    for (var i = 0; i < 14; i++) {
        bacteria[i] = new Bacteria((int)(Math.random() * 400), 0);
    }

}
function draw() {
    background(0, 102, 153);
    if (frameCount % 180 == 0) {
        for (var i = 0; i < bacteria.length; i++) {
            bacteria[i].x = (int)(Math.random() * 400);
            bacteria[i].y = 0;
        }
    }
    for (var i = 0; i < bacteria.length; i++) {
        bacteria[i].show();
        bacteria[i].move();
    }
    fill(255, 222, 56);
    ellipse(490, 0, 130, 130);

    fill(139, 69, 19);
    rect(0, 300, 15, 600);
    rect(485, 300, 15, 600);

    fill(0);
    rect(0, 300, 500, 2);
}



class Bacteria {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
   move() {
        // =x+=(int)(Math.random()*15)-5; 
        //y+=(int)(Math.random()*15)-5;
        if (this.y < 290) {
            this.y += 5;
            this.x += (int)(Math.random() * 12) - 5;
        } else {
            this.y += 0;
            this.x += 0;
            fill(255);
            textSize(42);
            text("The Birds Work For The", 5, 120);
            text("Bourgeoisie", 40, 160);
            image(triangle, 205, 350, 100, 100);
        }
        
    }
     show() {
        fill(3, 202, 252);
        ellipse(this.x, this.y, 30, 30);
    }
}
