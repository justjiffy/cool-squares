class Box {
  constructor(x, y, w, c) {
    this.x = x;
    this.y = y;
    this.w = w;    
    this.c = c;
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);
  }
  
  display() {
    if (this.c == 255) {
      fill(this.c);    
    } else if (this.c == "win") {
      fill(random(255), random(255), random(255));
    } else {
      fill(this.r, this.g, this.b);
    }
    square(this.x, this.y, this.w, this.w/5)
  }
  
  touching() {
    if (this.x < player.x+player.w && 
        this.y < player.y+player.w && 
        this.y+this.w > player.y && 
        this.x+this.w > player.x) {
          if (this.w <= player.w) {
            player.w += 1.5/treasure[i].w;
            return true;
          }
        }
  }
  
  win() {
    player.c = "win"
  }
}