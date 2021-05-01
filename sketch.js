
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trackImage;

function preload()
{
trackImage = loadImage("track.jpg");
}

function setup() {
	createCanvas(1200, 600);


	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.

bob = new Bob(200,500,50,50,);
rob = new Rob(200,350,50,50);
	//Engine.run(engine);
  
}


function draw() {
  background(trackImage);
  bob.display(); 
  rob.display();
}



