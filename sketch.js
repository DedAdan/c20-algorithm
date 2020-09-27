var fixedsquare, movingsquare
function setup() {
  createCanvas(800,400);
  fixedsquare=createSprite(400, 200, 50, 50);
  movingsquare=createSprite(300, 200, 50, 50);
  movingsquare.shapeColor="red"
  fixedsquare.shapeColor="red"
movingsquare.debug=true
fixedsquare.debug=true
}

function draw() {
  background(255,255,255);  
  movingsquare.x=World.mouseX
  movingsquare.y=World.mouseY
  if(movingsquare.x-fixedsquare.x<movingsquare.width/2+fixedsquare.width/2&&
    fixedsquare.x-movingsquare.x<movingsquare.width/2+fixedsquare.width/2&&
    movingsquare.y-fixedsquare.y<movingsquare.height/2+fixedsquare.height/2&&
    fixedsquare.y-movingsquare.y<movingsquare.height/2+fixedsquare.height/2){
    movingsquare.shapeColor="green"
    fixedsquare.shapeColor="green"
  }
  else{
    movingsquare.shapeColor="red"
    fixedsquare.shapeColor="red"
  }
  drawSprites();
  
}