
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var angle=60;
var poly;
var square;
var square2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  var propriedades_do_square= {
    restitution: 0.63,
    frictionAir: 0.23
  }

  var propriedades_do_ball2= {
    restitution: 0.37,
    frictionAir: 0.22
  }
  
  var propriedades_do_square2= {
    restitution: 0.24,
    frictionAir: 0.53
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  square= Bodies.rectangle (100,280,30,30,propriedades_do_square);
  World.add(world,square);
  
  ball2= Bodies.circle (100,10,20,propriedades_do_ball2);
  World.add (world,ball2);

  square2= Bodies.rectangle (100,280,30,30,propriedades_do_square2);
  World.add (world,square2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);

  ellipse(ball2.position.x,ball2.position.y,20);

  rect(ground.position.x,ground.position.y,400,20);

  rect (square.position.x,square.position.y,30,30);
  
  rect (square2.position.x,square2.position.y,30,30);

  
  
  
}

