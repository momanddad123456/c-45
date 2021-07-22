var ball,bat;
var ballimage
var batimage;
var bgimage6;

function preload(){
bgimage = loadImage("bgimg.jpg");
ballimage = loadImage("ball.png");
batimage = loadImage("bat.png");

  
}

function setup() {
  
  createCanvas(1024,765);
  
  ball = createSprite(100,200,30,30);
  ball.addImage(ballimage);
  ball.scale = 0.03;
  bat = createSprite(950,200,20,70);
 bat.addImage(batimage);
 bat.scale =0.3

}
function draw (){
background(bgimage);
drawSprites();

}