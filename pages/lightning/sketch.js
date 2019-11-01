'use strict';

var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
var photo = new Array();
var photoIndex = 0;
var img;
var mouseP=false;

function preload() {
    photo[0] = loadImage("data/one.png");
    photo[1] = loadImage("data/two.png");
    img = loadImage("data/three.png");
    }

    function setup() {
        createCanvas(800, 500);
        strokeWeight(8);

    }

    function draw() {
        if (mouseP == true) {

            if (frameCount % 1 == 0) {
                reset();
            }
        }

        background(255);
        image(photo[photoIndex], 400, 150, 200, 200);
        image(img, 0, 175);
        stroke((Math.random() * 200) + 21, 0, (Math.random() * 255) + 254);
        while (endX < 500) {
            endX = startX + (Math.random() * 9) + 0;
            endY = startY + (Math.random() * 9) - 4;
            line(startX, startY, endX, endY);
            startX = endX;
            startY = endY;
        }
    }

    function mousePressed() {
        mouseP=true;
        photoIndex = photoIndex == photo.length - 1 ? 0 : photoIndex + 1;
        reset();
    }
    function mouseReleased(){
        mouseP=false;
    }

    function reset() {
        startX = 150;
        startY = 250;
        endX = 0;
        endY = 250;
    }
