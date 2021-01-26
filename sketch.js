
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5
var roof


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(400,300,200,10)

	
	bob3 = new Bob(400,500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roof.show();
bob3.display();

  drawSprites();
 
}



