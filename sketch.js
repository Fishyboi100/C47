var backgroundImg,background
var car,carImg
var cone,coneImg,coneGroup
var finishLine,finishLineImg
var PLAY = 1
var END = 0
var gamestate = PLAY


function preload(){
 backgroundImg = loadImage("Road.png")
 carImg = loadImage("car2.png")
 coneImg = loadImage("Cone.jpg")
 finishLineImg = loadImage("Finish Line.png")
}

function setup(){
 createCanvas(600,600)
 background = createSprite(300,300)
 background.addImage("background",backgroundImg);

finishLine = createSprite(300,50,100,20)
finishLine.addImage("finishline",finishLineImg)
finishLine.scale = 0.2


 car = createSprite(300,550)
 car.addImage("car",carImg)
 car.scale = 0.05

 coneGroup = createGroup()
 
}

function draw(){

  if (gamestate === PLAY) {

  if(keyIsDown(UP_ARROW)){
    car.y = car.y - 3
   }
   if(keyIsDown(RIGHT_ARROW)){
    car.x = car.x + 3
   }
   if(keyIsDown(LEFT_ARROW)){
    car.x = car.x - 3
   }

   if(car.isTouching(coneGroup)){ 
    car.destroy()
    console.log("Game Over")
    gameState = END;
   }

   if(car.isTouching(finishLine)){
    stroke("red")
    fill("red")
    textSize(40)
    text("Congrats!",500,300)
    console.log("You win, Congratulations!")
   }
   
  }

  else if(gamestate === END){   

    stroke("red")
    fill("red")
    textSize(40)
    text("Game Over",300,300)
  }

   spawnCones();
   drawSprites();
}


function spawnCones() {
  //write code here to spawn the cones
  if (frameCount % 8 === 0) {
    cone = createSprite(300,120,40,10);
    cone.x = Math.round(random(0,600));
    cone.y = Math.round(random(0,600));
    cone.addImage(coneImg);
    cone.scale = 0.02;
    
    //setting lifetime for the cone
    cone.lifetime = 70
    
    //adjust the depth
    cone.depth = car.depth;
    car.depth = car.depth + 1;

    coneGroup.add(cone)
  }
}



























