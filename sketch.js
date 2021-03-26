
var fixedRect, movingRect;

var m,s

var m1,s1

function setup() {

  createCanvas(1200,800);
  fixedRect= createSprite(600,400,50,80);
  fixedRect.shapeColor="blue";

  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor="cyan";
  m = createSprite(100,50,80,30);
  s = createSprite(800,50,70,30);

  m.shapeColor="red";
 s.shapeColor="green";

 m.velocityX = 3
 s.velocityX = -3

 m1 = createSprite(100,100,80,30);
  s1 = createSprite(100,700,70,30);

  m1.shapeColor="red";
 s1.shapeColor="green";

 m1.velocityY = 3
 s1.velocityY = -3



}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < movingRect.height/2 +fixedRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor="red";

  }else {

    movingRect.shapeColor="cyan";
    
  }

  if (m.x - s.x < m.width/2 + s.width/2 && s.x - m.x < s.width/2 + m.width/2){
m.velocityX = (m.velocityX)*(-1)
s.velocityX = (s.velocityX)*(-1)
  }
  if (m1.y - s1.y < m1.height/2 + s1.height/2 && s1.y - m1.y < s1.height/2 + m1.height/2){
    m1.velocityY = (m1.velocityY)*(-1)
    s1.velocityY = (s1.velocityY)*(-1)
  }

  drawSprites();
}// hello Alec