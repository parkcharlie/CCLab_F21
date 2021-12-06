let smoke = [];
let img;


function preload(){
  img = loadImage("images/Post_Malone_Stavernfestivalen_2018_(202940).jpg");
}




function setup(){
  let canvas = createCanvas(1400, 800);

}


function draw(){
  background(0);

  image(img, 600, 150, 250, 200);



  push();
  fill(6, 79, 16);
  rect(0, 350, 1400, 450);
  pop();



  push();
  fill(150);
  rect(330, 310, 40, 40);
  rect(1030, 310, 40, 40);
  pop();

  push();
  fill(200);
  rect(400, 290, 600, 60);
  pop();





  smoke.push(new SmokeParticle(350, 300));
  smoke.push(new SmokeParticle(1050, 300));


  for (let i=0; i < smoke.length; i++){
    smoke[i].update();
    smoke[i].display();
  }


  if(smoke.length > 150){
    smoke.splice(0,1);
  }
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
