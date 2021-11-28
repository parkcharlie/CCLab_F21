let img;
let cam;

fucntion preload(){
  img=createImage(640, 480);

}

function setup(){
  createCanvas(1000, 500);
}

function draw(){
  background("yellow");


img.loadPixels();
for (let y=0; y<480; y++){
  for (let x=0; x<640; x++){
    let index=(y*width+x)*4;
    img.pixels[index+0]=255;
    img.pixels[index+1]=0;
    img.pixels[index+2]=0;
    img.pixels[index+3]=0;
  }
}

img.updatePixels();

image(img, 0, 0);

}
