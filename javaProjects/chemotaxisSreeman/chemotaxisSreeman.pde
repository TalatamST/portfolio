int x=0;
int y=0;
int w=2;
Bacteria [] b;
//declare bacteria variables here   
void setup()   
{
  size(500, 500);
  background(0);
  b=new Bacteria[w];
  for (int i=0; i<b.length; i++) {
    b[i]=new Bacteria(width/2, height/2);
  }
  if(mousePressed){
    w++;
  }
    
}   
void draw()   
{
  background(0);
  for (int i=0; i<b.length; i++) {
    b[i].show();
    b[i].move();
  }
}
