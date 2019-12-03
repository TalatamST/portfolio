int x=0;
int y=0;
int w=2;
PImage triangle;
PFont font;
Bacteria [] b;
//declare bacteria variables here   
void setup()   
{
  size(500, 500);
  background(0, 102, 153);
  b=new Bacteria[14];
  for (int i=0; i<b.length; i++) {
    b[i]=new Bacteria((int)(Math.random()*400), 0);
  }
  triangle=loadImage("data/Untitled.png");
}
void draw()   
{
  background(0, 102, 153);
  if (frameCount%180==0) {
    for (int i=0; i<b.length; i++) {
      b[i].x = (int)(Math.random()*400);
      b[i].y = 0;
    }
  }
  for (int i=0; i<b.length; i++) {
    b[i].show();
    b[i].move();
  }
  fill(255, 222, 56);
  ellipse(490, 0, 130, 130);

  fill(139, 69, 19);
  rect(0, 300, 15, 600);
  rect(485, 300, 15, 600);

  fill(0);
  rect(0, 300, 500, 2);
}
