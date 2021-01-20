const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic: true
  }

  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
var ball_option = {
   restitution: 1
}
  ball = Bodies.circle(100,100,20,ball_option);
  World.add(world,ball);
  console.log(ball.restitution);
}

function draw() { 
  background(255,255,255);
  Engine.update(engine); 

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}
