
// create an algorithm to detect the collision of two boxes

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 
fixedRect = createSprite(200, 200, 50, 80);


movingRect = createSprite(400,200,80,30);



}

function draw() {
  background(0);  
  movingRect.x  = World.mouseX;
  movingRect.y  = World.mouseY;

if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2) {

movingRect.shapeColor="red";
fixedRect.shapeColor="red";

}

else {

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

console.log(movingRect.x-fixedRect.x)
 //console.log(movingRect.width/2+fixedRect.width/2)
  drawSprites();
}