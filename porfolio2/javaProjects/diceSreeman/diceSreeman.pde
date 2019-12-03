Die[] dice;
int total;
void setup()
{
  noLoop();
  size(500, 500);
  dice=new Die[9];
  ellipseMode(CENTER);
  for (int i=0; i<3; i++) {
    for (int j=0; j<3; j++) {
      dice[i*3+j]=new Die(120*i+20, 120*j+20);
    }
  }
}
void draw()
{
  background(9, 13, 227);
  //die=new Die(100, 100);
  textSize(18);
  fill(52, 195, 235);
  text("Total="+total, 10, 450); 
  total=0;
  for ( Die die : dice) {
    die.show();
    die.roll();
  }

  //println(die.rand);
  //  println(total);
}
void mousePressed()
{
  redraw();
}
class Die //models one single dice cube
{
  //variable declarations here
  int x;
  int y;
  int rand;
  Die(int x, int y) //constructor
  {
    this.x=x;
    this.y=y;
    rand=(int)(Math.random()*6)+1;
    //variable initializations here
  }
  void roll()
  {
    rand=(int)(Math.random()*6)+1;
    total = total +rand;
  }
  void show()
  {
    if (mousePressed) {
      fill(255);
      rect(x, y, 100, 100, 12);
      fill(0);
      if (rand==1) {
        ellipse(x+50, y+50, 15, 15);
      } else if (rand==2) {
        ellipse(x+80, y+23, 15, 15);
        ellipse(x+25, y+79, 15, 15);
      } else if (rand==3) {
        ellipse(x+50, y+50, 15, 15);
        ellipse(x+80, y+23, 15, 15);
        ellipse(x+25, y+79, 15, 15);
      } else if (rand==4) {
        ellipse(x+80, y+23, 15, 15);
        ellipse(x+25, y+79, 15, 15);
        ellipse(x+25, y+23, 15, 15);
        ellipse(x+80, y+79, 15, 15);
      } else if (rand==5) {
        ellipse(x+50, y+50, 15, 15);
        ellipse(x+80, y+23, 15, 15);
        ellipse(x+25, y+79, 15, 15);
        ellipse(x+25, y+23, 15, 15);
        ellipse(x+80, y+79, 15, 15);
      } else if (rand==6) {
        ellipse(x+25, y+50, 15, 15);
        ellipse(x+80, y+23, 15, 15);
        ellipse(x+25, y+79, 15, 15);
        ellipse(x+25, y+23, 15, 15);
        ellipse(x+80, y+79, 15, 15);
        ellipse(x+80, y+50, 15, 15);
      }
    }
  }
}
