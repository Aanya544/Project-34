
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;


function preload()
{
	
}

function setup() {
	canvas = createCanvas(800,400);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse =Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options ={
		mouse:canvasmouse
	}

	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	roof = new Roof(200,20,1700,30);
	bob1= new Bob(100,400);
	bob2 = new Bob(300,400);
	bob3 = new Bob(500,400);
	bob4 = new Bob(600,400);
	rope1 = new Rope(bob1.body,roof.body,{x:40,y:20});
	rope2 = new Rope(bob2.body,roof.body,{x:140,y:20});
	rope3 = new Rope(bob3.body,roof.body,{x:80,y:20});
	rope4 = new Rope(bob4.body,roof.body,{x:120,y:20});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob2.display();
  bob1.display();
  bob3.display();
  bob4.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
  
  drawSprites();
 
}


function mousePressed(){
Matter.body.setPosition(roof.body,{x : mouse.x,y:mouse.y})

}



