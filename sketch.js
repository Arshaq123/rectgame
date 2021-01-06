
var movingrect, fixedrect;

var rect1, rect2;

function setup() {
  createCanvas(800,400);

  movingrect= createSprite(400, 200, 70, 70);
  fixedrect = createSprite(600,200,70,70);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";

  rect1= createSprite(400, 400, 70, 70);
  rect2 = createSprite(600,400,70,70);

  rect1.shapeColor = "yellow";
  rect2.shapeColor = "pink";

  //rect1.velocityX=2;
  //rect2.velocityX=-2;

}

function draw() {
  background(255,255,255);  

  movingrect.x =mouseX;
  movingrect.y = mouseY;

  drawSprites();

  //call the function to check if two rectangles are touching
  if(isTouching(movingrect, rect1))  {

    movingrect.shapeColor = "red";
   // fixedrect.shapeColor = "red";

   rect1.shapeColor = "blue";

    }

    else {

    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green"; 

    }

    BounceOff(movingrect,rect2);


}

//algorithms - solution for a problem - way of solving 


