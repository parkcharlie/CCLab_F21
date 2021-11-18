
let dragonPosSlider = document.getElementById('dragonPositionSlider')
let wingSpSlider = document.getElementById('wingSpeedSlider')





let counter = 0;
let speed = 0;


function setup(){
  let canvas = createCanvas(1200, 800);
  canvas.parent("canvasContainer");
  background(100);

}

function draw(){
  background(0);

  let sliderVal1 = dragonPosSlider.value;
  let x = map(sliderVal1, 0, 100, 0, width);

  let sliderVal2 = wingSpSlider.value;
  let y = map(sliderVal2, 0, 100, 0.01, 0.1);

  dragon(x, 400);


}

function dragon(x, y) {
  translate(x, y);
  // dragonBody(0, 0)
  dragonWings(-25, -40, true);
  dragonWings(20, -40, false); // right wing
  dragonBody(0, 0);
}

function dragonBody(x, y) {
  noStroke();
  fill(17, 171, 38);
  translate(x, y);

  //tail
  push();
  noFill();
  stroke(15, 148, 33);
  strokeWeight(20);
  curve(-188, 181, 15, 56, 215, 221, 109, 371);

  pop();

  //body
  push();
  rotate(radians(-10));
  ellipse(0, 0, 120, 230);
  // fill(11, 222, 39)
  // ellipse(0, 30, 70, 150)
  pop();

  //left leg
  push();
  ellipse(-5, 110, 25, 100);
  pop();

  //right leg
  push();
  rotate(radians(-20));
  ellipse(10, 100, 25, 100);
  pop();

  push();
  rotate(radians(-10));
  fill(11, 222, 39);
  ellipse(0, 30, 70, 150);
  pop();

  //head
  push();
  stroke(0);
  ellipse(-30, -110, 110, 50);
  noStroke();
  ellipse(-11, -140, 90, 110);
  pop();

  //mouth
  push();
  stroke("red");
  strokeWeight(5);

  curve(-57, -155, -59, -116, -18, -116, -27, -153);
  pop();

  //eyes
  push();
  fill(0);
  circle(-33, -159, 10);
  circle(-3, -159, 10);

  pop();
}

function dragonWings(x, y, mirror) {
  push();

  fill(17, 171, 38);


  let sliderVal2 = wingSpSlider.value;
  let y2 = map(sliderVal2, 0, 100, 0.005, 0.08);


  counter += speed + y2; //speed of the wings
  translate(x, y);
  if (mirror == true) {
    scale(-1, 1);
  }
  rotate(sin(PI * counter) / 2 + 0.03);

  triangle(0, 0, 100, 30, 100, -30);
  ellipse(160, 0, 200, 80);
  triangle(260, 0, 200, 0, 260, 80);
  triangle(220, 30, 160, 30, 205, 100);
  triangle(180, 35, 120, 35, 150, 100);

  pop();
}
