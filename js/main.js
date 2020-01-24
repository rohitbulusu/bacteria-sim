let bugs = [];
let ms;
let canvas;
let canvasW;
let canvasH;

function setup() {
  canvasW = 1280;
  canvasH = 720;
  canvas = createCanvas(canvasW, canvasH);
  canvas.parent("canvas-holder");
}

function draw() {
  background(217, 228, 229);
  ms = millis();
  text(`Elapsed Time: ${currentTime(ms)}`, 20, 30);
  //Display bugs
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].show();
    bugs[i].move();
  }
  canvas.mousePressed(createBug);
}

const createBug = () => {
  let bug = new Bacteria(mouseX, mouseY);
  bugs.push(bug);
  console.log(bugs);
};

const currentTime = ms => {
  //variables
  let second;

  //Seconds calculation
  second = round(ms / 1000);

  return `${second} s`;
};

function mousePressed() {
  // for (let bug of bugs) {
  //   if (bug.wasClicked()) {
  //     console.log("bug click");
  //   }
  // }
}

function keyReleased() {
  if (keyCode === ENTER) {
    for (let i = bugs.length; 0 < i; i--) {
      let bug = new Bacteria(random(width), random(height));
      bugs.push(bug);
    }
  }
}
