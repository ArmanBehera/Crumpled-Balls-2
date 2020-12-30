const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var paper;
var part1, part2, part3;    // Parts of the dustbin
var ground;

var dustbinImage, dustbin;

function preload(){

  // Loading the image of the dustbin
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(1000 ,400);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(100, 300, 60);

  part1 = new Dustbin(700, 360, 20, 140);
  part2 = new Dustbin(640, 300, 100, 20);
  part3 = new Dustbin(760, 300, 100, 20);

  ground = new Ground(width / 2, 380, width, 20);
  World.add(world, ground);

  dustbin = createSprite(700, 290, 100, 100);
  dustbin.addImage(dustbinImage);
  dustbin.scale = 0.37;
}

function draw() {
  background("green");

  rectMode(CENTER);

  // Updating the engine
  Engine.update(engine);

  // Displaying the ball of paper
  paper.display();

  // Displaying the parts of the dustbin
  part1.display("white");
  part2.display("green");
  part3.display("green");

  ground.display();

  drawSprites();

  textSize(15);
  textFont("Algerian");
  text("Dustbin", 670, 365);
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    //  Making the ball jump when the up arrow is pressed
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 50, y : -100});
  }

}