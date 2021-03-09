var balloon,database,position;
var balloonImage,backgroundImage;
var balloonPosition;

function preload(){

  balloonImage = loadImage("Hot Air Ballon-02.png");
  backgroundImage = loadImage("Hot Air Ballon-01.png");
}



function setup() {

  database=firebase.database();
  createCanvas(500,500);
  balloon=createSprite(250, 250, 20, 20);
  balloon.shapeColor='red';
  balloon.addImage(balloonImage)
  balloonPosition = database.ref("balloon/position");
  balloonPosition.on("value",readPosition);
  balloon.scale = 0.3
}

function draw() {
  background(backgroundImage);  

if(position!==undefined){



  if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
	balloon.x = balloon.x+10;
}
if(keyDown(UP_ARROW)){
	balloon.y = balloon.y-10;
}
if(keyDown(DOWN_ARROW)){
	balloon.y = balloon.y+10;
}
}
  drawSprites();
}


function readPosition(data){
position=data.val();

}