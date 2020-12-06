//namespacing the classes (Engine, World, Bodies)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box1,box2;

var ground;

function setup() {
  createCanvas(400,400);

  
  //create a physics engine with help of Engine class
  engine = Engine.create();

  //create a world with help of engine object
  world = engine.world;

  //create an object for Box class
  box1 = new Box(240,150,50,50);
  box2 = new Box(200,100,70,50);
  ground= new Ground(200,380,400,20);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}


