
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var groundOBJ,groundS
var rope1;
var bob1,bob2,bob3,bob4,bob5

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	groundS=createSprite(400,100,500,50)

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundOBJ=new Ground(400,100,500,50)
	bob1=new Bob(50,200,20)
	bob2=new Bob(100,200,20)
	bob3=new Bob(150,100,20)
	bob4=new Bob(200,100,20)
	bob5=new Bob(250,100,20)
	
//rope1=new rope1(bobobject1.body,roofObject.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  drawSprites();
 
}



