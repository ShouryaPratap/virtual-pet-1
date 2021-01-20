//Create variables here
var foodS,foodStock,dog,dog1,database;
function preload()
{
  //load images here
   dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
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
   foodS=data.val();
}
function writeStock(x) {
 if (x<=0) {
   x=0;
 } else {
   x=x-1;
 }
  database.ref('/').update({
   Food:x
 })

}
function draw() {  
  background(46,139,87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dog2);

  }
  

  drawSprites();
  textSize(18);
  stroke("red");
  text("Press UP_ARROW Key To Feed Drago Milk!",100,100);

  //add styles here

}



