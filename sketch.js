const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var ball

var engine,world,ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var a={isStatic:true}




  ground=Bodies.rectangle(400,380,800,10,a);
  World.add(world,ground);
  var b ={restitution:1.0}
  ball=Bodies.circle(200,100,5,b)
  World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  rectMode (CENTER)
  
  rect(ground.position.x,ground.position.y,800,10); 

  ellipseMode(RADIUS)

  ellipse(ball.position.x,ball.position.y,10,10);

  drawSprites();
}