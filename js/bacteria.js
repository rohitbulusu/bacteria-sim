class Bacteria {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 30;
    this.speed = 1;
    this.color = color(100);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}
