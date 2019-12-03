# [portfolio](https://talatamst.github.io/portfolio/)

Java Code:
```
  stroke((int)(Math.random()*200)+21, 0, (int)(Math.random()*255)+254);
  while (endX<500) {
    endX=startX + (int)(Math.random()*9)+0;
    endY=startY + (int)(Math.random()*9)-4;
    line(startX, startY, endX, endY);
    startX=endX;
    startY=endY;
  }

```
[Lighning in Java](https://github.com/TalatamST/portfolio/blob/gh-pages/javaProjects/lightningSreeman/lightningSreeman.pde)


