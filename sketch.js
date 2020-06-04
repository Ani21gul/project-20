var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(45,60);
  weight = random(1522,3000);
  car = createSprite(80,200,40,40);
  car.velocityX = speed;
  wall = createSprite(800,200,60,height/2);


  
}

function draw() {
  background(255,255,255); 
  if(/*750*/wall.x-car.x</*20*/(wall.width+car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor = color("red");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color("yellow");
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }

  }
  
  drawSprites();
}