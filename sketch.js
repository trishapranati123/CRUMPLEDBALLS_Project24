var paper,dustbin1,dustbin2,dustbin3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas=createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	 paper= new Paper(50,330,20,20);
	 //var ball_options ={
	//	 isStatic:true
    //}
    //ball = Bodies.circle(50,330,20, ball_options);
 	ground=new Ground(width/2,height-35,width,10);
	dustbin1=new Dustbin(600,310,2,80);	 
	dustbin2=new Dustbin(750,310,2,80);
	dustbin3=new Dustbin(675,350,150,2);	
	Engine.run(engine);
	
    //World.add(world,ball);
  
}


function draw() {
  background(0);
  Engine.update(engine);
    //ellipseMode(RADIUS);
	//ellipse(ball.position.x, ball.position.y,20,20);
	//ellipse(paper.position.x, paper.position.y,20,20);
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
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85});
	}
}

