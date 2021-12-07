let smoke = [];
let img;

let speed1 = 1;
let speed2 = 1.2;
let speed3 = 1.4

let xval1 = 0;
let xval2 = 0;
let xval3 = 0;



let speed4 = 1;
let speed5 = 1.3;
let speed6 = 1.5;

let yval1 = 0;
let yval2 = 0;
let yval3 = 0;




let stsSlider = document.getElementById('sidetosideSlider');
let uadSlider = document.getElementById('upanddownSlider');
let bgSlider = document.getElementById('backgroundSlider');


function preload(){
  img = loadImage("images/Post_Malone_Stavernfestivalen_2018_(202940).jpg");
}




function setup(){
  let canvas = createCanvas(1400, 800);


}


function draw(){



  let sliderVal1 = stsSlider.value;
  let s = map(sliderVal1, 0, 100, 0, 4);

  let sliderVal2 = uadSlider.value;
  let u = map(sliderVal2, 0, 100, 0, 7);

  let sliderVal3 = bgSlider.value;
  let b = map(sliderVal3, 0, 100, 16, 230);

  background(b, 16, 211);





  image(img, 600, 100, 250, 200);



  push();
  fill(6, 79, 16);
  rect(0, 300, 1400, 500);
  pop();



  push();
  fill(150);
  rect(330, 260, 40, 40);
  rect(1030, 260, 40, 40);
  pop();

  push();
  fill(200);
  rect(400, 240, 600, 60);
  pop();



  // push();
  // let speed = 1;
  // let xval = 1;
  // // // translate(t, 0);
  // //
  // // xval+=speed;
  // //
  // // if (xval>50 || xval<0){
  // //   speed *= -1;
  // // }
  //
  // // xval+=1;
  //
  // translate(xval, 0);
  // for(let i=0; i<10; i++){
  //   people(i*110, -50, 214-i*3, 70+i*20, 150-i*15);
  // }
  //
  // pop();



  // let speed = 1;
  // let xval = 0;


  xval1+=speed1*s;

  if (xval1>20 || xval1<0){
    speed1 *= -1;
  }

  xval2+=speed2*s;

  if (xval2>20 || xval2<0){
    speed2 *= -1;
  }

  xval3+=speed3*s;

  if (xval3>20 || xval3<0){
    speed3 *= -1;
  }




  yval1+=speed4*u;

  if (yval1>30 || yval1<0){
    speed4 *= -1;
  }

  yval2+=speed5*u;

  if (yval2>30 || yval2<0){
    speed5 *= -1;
  }

  yval3+=speed6*u;

  if (yval3>30 || yval3<0){
    speed6 *= -1;
  }




  audience1(xval1, yval1);




  audience2(xval2, yval2);



  audience3(xval3, yval3);


  // for(let i=10; i>0; i--){
  //   people(30+(10-i)*110, 40, 160-i*3, 70+i*20, 150-i*15);
  // }
  // for(let i=0; i<10; i++){
  //   people(i*110, 130, 100-i*10, 100+i*8, 170-i*15);
  // }


  smoke.push(new SmokeParticle(350, 240));
  smoke.push(new SmokeParticle(1050, 240));


  for (let i=0; i < smoke.length; i++){
    smoke[i].update();
    smoke[i].display();
  }


  if(smoke.length > 150){
    smoke.splice(0,1);
  }
}

function audience1(x, y){
  for(let i=0; i<10; i++){
    people(x+i*110, y-50, 214-i*3, 70+i*20, 150-i*15);
  }
}

function audience2(x, y){
  for(let i=10; i>0; i--){
    people(x+30+(10-i)*110, y+40, 160-i*3, 70+i*20, 150-i*15);
  }
}

function audience3(x, y){
  for(let i=0; i<10; i++){
    people(x+i*110, y+130, 100-i*10, 100+i*8, 170-i*15);
  }

}





function people(x, y, r, g, b){

  push();
  fill(r, g, b);
  rect(x+170, y+420, 60, 100);
  pop();

  push();
  fill(85, 43, 4);
  circle(x+200, y+400, 50);
  // rect(x+170, y+420, 60, 100);
  pop();

  push();
  strokeWeight(10);
  stroke(r, g, b);
  line(x+130, y+410, x+180, y+460);

  line(x+270, y+410, x+220, y+460);
  pop();

}






class SmokeParticle{
  constructor(x, y){
    // this.x = width/2
    // this.y = height/2

    this.x = x;
    this.y = y;

    this.diameter = random(10, 50);
    this.transparency =random(10, 30);


  }

  update(){
    this.x += random(-2, 2);
    this.y -= 2;


  }

  display(){
    noStroke();
    fill(190, this.transparency);
    circle(this.x, this.y, this.diameter);


  }




}
