var ground
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,200,100,10);
}

function draw() {
  background(255,255,255); 
  ground.display(); 
  drawSprites();
}