var fixedsquare, movingsquare,obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(800,400);
  fixedsquare=createSprite(400, 200, 50, 50);
  movingsquare=createSprite(300, 200, 50, 50);
  movingsquare.shapeColor="green"
  fixedsquare.shapeColor="green"
movingsquare.debug=true
fixedsquare.debug=true
obj1=createSprite(100,300,50,50);
obj1.shapeColor="red";
obj2=createSprite(200,300,50,50);
obj2.shapeColor="red";
obj3=createSprite(500,300,50,50);
obj3.shapeColor="red";
obj4=createSprite(600,300,50,50);
obj4.shapeColor="red";
obj1.velocityX=3;
obj2.velocityX=-3;
obj3.velocityY=3;
obj4.velocityY=3;
movingsquare.velocityX=3
movingsquare.velocityY=3
}

function draw() {
  background(255,255,255);  
  movingsquare.x=World.mouseX
  movingsquare.y=World.mouseY
  bounceOff(obj1,movingsquare)
  if(isTouching(obj1,movingsquare)){
    movingsquare.shapeColor="purple";
    obj1.shapeColor="purple";
  }else{
    movingsquare.shapeColor="green"
    obj1.shapeColor="green"
  }
  drawSprites();
  
}
