class Normal {//implements Particle {
  double x, y, angle, speed;
  int r, g, b;
  int test=0;

  Normal() {
    //    x=width/2;
    //    y=height/2;
    x= (Math.random()*20)+20;
    y= Math.random()*70;
    speed= Math.random()*20;
    angle=(Math.PI/6)*Math.random()*100;
  }
  void move() {
    x +=Math.cos(angle)*speed;
    y += Math.sin(angle)* speed;
    angle += .09;
    if (x>670+mouseX) {
      x=670-mouseX;
    } else if (x<70+mouseX) {  
      {
        x=70+mouseX;
      }
    }
    if (y>670+mouseY) {
      y=670-mouseY;
    } else if (y<70+mouseY) {  
      {
        y=70+mouseY;
      }
    }
  }

  void show() {
    noStroke();
    if (test==0) {
      randColor();
      test=200;
    }
    test--;
    //  println(test);
    colorMode(HSB);
    fill(r, g, b);
    ellipse((int)x, (int)y, 5, 5);
  }

  void randColor() {
    r=((int)(Math.random()*(255)+100));
    g=((int)(Math.random()*(255)+100));
    b=((int)(Math.random()*(255)+100));
  }
}
