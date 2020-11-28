const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }

  var ball_option ={
    restitution:1.0
  }

  object = Bodies.rectangle(200,350,250,30,object_options);
  World.add(world,object);

  ball=Bodies.circle(200,50,20,ball_option);
  World.add(world,ball);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}


function draw() {
  background("black"); 
  
  Engine.update(engine);

  fill("white");
  rectMode(CENTER);
  rect(object.position.x,object.position.y,250,30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}