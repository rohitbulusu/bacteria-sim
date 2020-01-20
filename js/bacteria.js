class Bacteria {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = 10;
    this.speed = 1;
    this.color = color(100);
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 20);
  }
}
