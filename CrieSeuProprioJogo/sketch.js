
var playerIdleImg;
var backgroundImg;

function setup() {
  createCanvas(1280,720);

  player = createSprite(32,32,10,10);
  player.addImage(playerIdleImg);

  bg = createSprite(width/2,height/2,0,0);
  bg.addImage(backgroundImg);
  bg.width = width;
  bg.height = height;
}

function preload()
{
  playerIdleImg = loadImage("sprites/player-idle.png");
  backgroundImg = loadImage("sprites/background.png");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}