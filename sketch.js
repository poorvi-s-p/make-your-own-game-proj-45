var bg ,player;
var playerImage;
var background1;



function preload(){
bg= loadImage("jungle.jpg");
player=loadImage("man image.jpg");

}
function setup() {
  createCanvas(800, 400);
  
  background1= createSprite(0,0,800,400);
  background1.addImage(bg)
  background1.x=background1.width/2;
  background1.velocityX=-4;
  background1.scale=1.5;
  
  player=createSprite(200,300,50,50);




 

}

function draw() {
  background(0);

  if(background1.x<300){
    background1.x=background1.width/2
  }
  drawSprites();



}


