
var playerIdleImg;
var backgroundImg;
var player;
var bg;

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = createSprite(width / 2,height / 2,5,5);
  player.addImage(playerIdleImg);

  bg = createSprite(windowWidth,windowHeight,1280,720);
  bg.addImage(backgroundImg);
}

function preload()
{
  playerIdleImg = loadImage("sprites/player-idle.png");
  backgroundImg = loadImage("sprites/background.png");
}

function draw() {
  background(255,255,255);  
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
  drawSprites();
}