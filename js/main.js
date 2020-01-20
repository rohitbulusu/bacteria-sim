let bugs = [];
let bug;
let index = 0;

function setup() {
  let canvas = createCanvas(1280, 720);
  canvas.parent("canvas-holder");
  //
}

function draw() {
  background(217, 228, 229);
  bugs[index].display();
  bugs[index].move();
}

function mousePressed() {
  bug = new Bacteria();
  bugs.push(bug);
  bugs[index].display();
  console.log(bugs);
  index += 1;
}
