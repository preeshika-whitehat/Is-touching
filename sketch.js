var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 200, 50, 50);
  movingRect.shapeColor = "red";


  fixedRect = createSprite(200,200,60,60);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
//A-B = A.width/2 + B.width/2, B-A = B.width/2 + A.width/2
  if(movingRect.x - fixedRect.x < movingRect.width/2+ fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2  &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}

