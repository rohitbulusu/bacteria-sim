let bugs = [];
let ms;

function setup() {
  let canvas = createCanvas(1280, 720);
  canvas.parent("canvas-holder");
}

function draw() {
  background(217, 228, 229);
  ms = millis();
  text(`Elapsed Time: ${currentTime(ms)}`, 20, 30);

  //Display bugs
  for (let i = 0; bugs.length > i; i++) {
    bugs[i].show();
    bugs[i].move();
  }
}

function mousePressed() {
  let bug = new Bacteria(mouseX, mouseY);
  bugs.push(bug);
  console.log(bugs);
}

const currentTime = ms => {
  //variables
  let second;

  //Seconds calculation
  second = round(ms / 1000);

  return `${second} s`;
};
