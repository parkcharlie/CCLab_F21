console.log("script works!")

let circlePosSlider = document.getElementById('circlePositionSlider')







function setup(){
  let canvas = createCanvas(200, 200);
  canvas.parent("canvasContainer");
  background(0);
}
// let x = -50;

function draw(){
  background(0);
  fill('lightyellow');

  let sliderVal = circlePosSlider.value;
  console.log(sliderVal);

  let x = map(sliderVal, 0, 100, 0, width);


  circle(x, height/2, 50);
}
