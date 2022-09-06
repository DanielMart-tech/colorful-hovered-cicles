let circles = [];
let diameter = 60;

function setup() {
  createCanvas(400, 400);
  background(220);

  let numberOfCirclesX = width / diameter;
  let numberOfCirclesY = height / diameter;
  let vector2 = createVector(0, 0);
  for (let i = 0; i < numberOfCirclesY + 1; i++) {
    vector2.x = 0;
    for (let j = 0; j < numberOfCirclesX + 1; j++) {
      circles.push({
        x: vector2.x,
        y: vector2.y,
      });
      vector2.x += 60;
    }
    vector2.y += 60;
  }
}

function draw() {
  circles.find((element) => {
    let distance =
      Math.sqrt(
        Math.pow(mouseX - element.x, 2) + Math.pow(mouseY - element.y, 2)
      ) <= 30;

    if (distance) {
      fill(random(256), random(256), random(256));
      circle(element.x, element.y, diameter);
    } else {
      fill(255, 255, 255);
      circle(element.x, element.y, diameter);
    }
  });
}