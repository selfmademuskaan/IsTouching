var movingrect,fixedrect;



function setup() {

  createCanvas(800,400);
  movingrect=createSprite(400, 200, 80, 30);
  fixedrect=createSprite(200,200,50,80)

}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2) {
movingrect.shapeColor="red";


  }
else  {
movingrect.shapeColor="green";
}
  drawSprites();
}
