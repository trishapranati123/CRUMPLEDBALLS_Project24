var paper,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas=createCanvas(700, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper= new Paper(30,330,40);	
 	ground=new Ground(width/2,height-35,width,10);
	dustbin1=new Dustbin(500,310,2,80);	 
	dustbin2=new Dustbin(650,310,2,80);
	dustbin3=new Dustbin(575,350,150,2);	
	Engine.run(engine);
	
    //World.add(world,ball);
  
}


function draw() {
  background(0);
  Engine.update(engine);    
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.setStatic(paper.body,false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-35});
	}
}

