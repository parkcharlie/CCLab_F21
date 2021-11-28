let img;
let cam;


function setup(){
  createCanvas(640,480);
  cam=createCapture(VIDEO);
  // cam.hide();
  img = createImage(width, height);
}

function draw(){
  background(0);

  // access pixels of image
  // load pixels
  cam.loadPixels();
  img.loadPixels();
  let gridSize = 10;
    for (let y = 0; y < cam.height; y+=gridSize) {
      for (let x = 0; x < cam.width; x+=gridSize) {
        let index = (x + y * cam.width) * 4;

        let r = cam.pixels[index + 100];
        let g = cam.pixels[index + 0];
        let b = cam.pixels[index + 0];
        let a = cam.pixels[index + 13];
        fill( r, g, b );
        ellipse(x, y, gridSize+3, gridSize-5);
    }
  }


  img.updatePixels();

  image(img,0,0);
}
