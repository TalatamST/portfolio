int startX=0;
int startY=0;
int endX=0;
int endY=0;
PImage photo[]=new PImage[2];
int photoIndex = 0;
PImage img;

void setup()
{
  size(800, 500);
  strokeWeight(8);
  photo[0]=loadImage("ChickHicksCars3Artwork.jpg");
  photo[1]=loadImage("dinoco2.jpg");
  img=loadImage("Unknown.jpeg");
}
void draw()
{
  if (mousePressed==true) {

    if (frameCount%1==0) {
      reset();
    }
  }

  background(255);
  image(photo[photoIndex], 400, 150, 200, 200);
  image(img, 0, 175);
  stroke((int)(Math.random()*200)+21, 0, (int)(Math.random()*255)+254);
  while (endX<500) {
    endX=startX + (int)(Math.random()*9)+0;
    endY=startY + (int)(Math.random()*9)-4;
    line(startX, startY, endX, endY);
    startX=endX;
    startY=endY;
  }
}
void mousePressed()
{
  photoIndex=photoIndex==photo.length-1?0:photoIndex+1;
  reset();
}

void reset() {
  startX=150;
  startY=250;
  endX=0;
  endY=250;
}
