Normal [] npArray;

void setup() {

  size(800, 800);
  npArray=new Normal[10000];
  for (int i=0; i<npArray.length; i++) {
    npArray[i]=new Normal();
  }
}
void draw() {
  background(0);
  for (int i=0; i<npArray.length; i++) {
    npArray[i].show();
    npArray[i].move();
  }
}
interface Particle {
  void show();
  void move();
}
