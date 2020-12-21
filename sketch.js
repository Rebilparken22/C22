//namespacing
//universe 
const Engine = Matter.Engine;

//inside the engine, we have world 
const World = Matter.World;

//inside the world, we have bodies - objects
const Bodies = Matter.Bodies;

var engine, world; 

var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  var options = {
    isStatic: true
  }

//Whenever you created Bodies objects - you cannot see them - but they do get created - in the memory of the computer
  object = Bodies.rectangle(400,380,800,20,options);
  World.add(world, object);

  console.log(object);
  console.log(object.position.x);
console.log(object.velocity.x);

var balloptions = {
  restitution: 2.0
}

ball = Bodies.circle(200,100,20,balloptions);
World.add(world, ball);

console.log(ball);

  }

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  Engine.update(engine);
  rect(object.position.x,object.position.y,800,20);
 

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20, 20);
}