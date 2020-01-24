class Bacteria {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 30;
    this.speed = 1;
    this.color = color(100);
  }

  move() {
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
  // wasClicked() {
  //   if (dist(mouseX, mouseY, this.x, this.y) <= this.diameter) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
