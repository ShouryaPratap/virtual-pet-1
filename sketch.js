//Create variables here

function preload()
{
  //load images here
  dog1=loadImage("dog.png");
  dog2=loadImage("dog1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,30);
  dog.addImage(dog1);
  database= firebase.database();
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}
function readStock(data){
   foods=data.val();
}
function writeStock(x) {
 database.ref('/').update();
}

function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foods);
    dog.addImage(dogHappy);

  }
  

  drawSprites();
  textSize(18);
  stroke("red");
  text("Press UP_ARROW Key To Feed Drago Milk!",100,100);

  //add styles here

}



