var ROCKET , ROCKETImg;
var EARTH , EARTHImg;
var ASTEROID1 , ASTEROID2 , ASTEROID3 , ASTEROID4;
var ASTEROID1Img , ASTEROID2Img , ASTEROID3Img , ASTEROID4Img;

function preload(){
 ROCKETImg = loadImage ("New Folder/ROCKET.png");
 EARTHImg = loadImage ("New folder/EARTH.png");
 ASTEROID1Img = loadImage ("New folder/ASTEROIDS.png");
 ASTEROID2Img = loadImage ("New folder/ASTEROIDS.png");
 ASTEROID3Img = loadImage ("New folder/ASTEROIDS.png");
 ASTEROID4Img = loadImage ("New folder/ASTEROIDS.png");
}

function setup() {
  createCanvas(1200,800);
  ROCKET = createSprite(100, 700 , 70,70);
  ROCKET.addImage(ROCKETImg);
  ROCKET.scale = 0.1;

  EARTH = createSprite(200 , 400 , 70,70);
  EARTH.addImage(EARTHImg);
  EARTH.scale = 0.1;

  ASTEROID1 = createSprite(500 , 700 , 70,70);
  ASTEROID1.addImage(ASTEROID1Img); 
  ASTEROID1.scale = 0.5;

  ASTEROID2 = createSprite(600 , 400 , 70,70);
  ASTEROID2.addImage(ASTEROID2Img);
  ASTEROID2.scale = 0.5;

  

  ASTEROID3 = createSprite(300 , 700 , 70,70);
  ASTEROID3.addImage(ASTEROID3Img);
  ASTEROID3.scale = 0.5;

  ASTEROID4 = createSprite(400 , 400 , 70,70);
  ASTEROID4.addImage(ASTEROID4Img);
  ASTEROID4.scale = 0.5;
}

function draw() {
  background("BLUE");  

  if(keyDown(RIGHT_ARROW)){
   ROCKET.velocityX = 2;
   ROCKET.velocityY = 0;
   
  }
  if(keyDown(LEFT_ARROW)){
    ROCKET.velocityX = -2;
    ROCKET.velocityY = 0;
   }
   if(keyDown(UP_ARROW)){
    ROCKET.velocityY = -2;
    ROCKET.velocityX =0;

   }
   if(keyDown(DOWN_ARROW)){
    ROCKET.velocityX = 0;
    ROCKET.velocityY = 2;
   }

  if(ROCKET.isTouching(ASTEROID1)||ROCKET.isTouching (ASTEROID2) || ROCKET.isTouching(ASTEROID3)||ROCKET.isTouching (ASTEROID4)){
    textSize(30);
    stroke("red");
      text("GAME OVER" , 900,400);
   }

   /*if(ROCKET.isTouching("EARTH")){
     textSize(30);
     text("YOU WIN" , 900,400);
   }*/
  drawSprites(); 
}