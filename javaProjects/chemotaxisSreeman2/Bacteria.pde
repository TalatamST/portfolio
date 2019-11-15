class Bacteria {
  int x, y;
  Bacteria(int x, int y) {
    this.x=x;
    this.y=y;
  }
  void move() {
    // =x+=(int)(Math.random()*15)-5; 
    //y+=(int)(Math.random()*15)-5;
    if (y<290) {
      y+=5;
      x+=(int)(Math.random()*12)-5;
    } else {
      y+=0;
      x+=0;
      fill(255);
      textSize(42);
      text("The Birds Work For The", 5, 120);
      text("Bourgeoisie", 40, 160);
      image(triangle, 205, 350, 100, 100);
    }
    /*    if (x+30>500) {
     x=-x;
     }
     if (y+30>500) {
     y=-y;
     }
     */
  }
  void show() {
    fill(3, 202, 252);
    ellipse(x, y, 30, 30);
  }
}
