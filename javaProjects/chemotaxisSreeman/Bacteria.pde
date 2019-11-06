class Bacteria {
  int x, y;
  Bacteria(int x, int y) {
    this.x=x;
    this.y=y;
  }
  void move() {
    //x=(int)(Math.random()*5)+2;
    //y=(int)(Math.random()*5)+2;
    if (mouseX>x) {
      x+=(int)(Math.random()*6);
    }
    if (mouseX<x) {
      x-=(int)(Math.random()*6);
    }
    if (mouseY>y) {
      y+=(int)(Math.random()*6);
    }
    if (mouseY<y) {
      y-=(int)(Math.random()*6);
    }
  }
  void show() {
    fill(3, 202, 252);
    ellipse(x, y, 60, 10);
  }
}
