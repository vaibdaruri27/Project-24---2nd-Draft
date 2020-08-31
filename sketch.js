
//Global Function 
//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variables
var leftSprite, rightSprite, bottomSprite;

function setup() {
	 //Create the canvas
	 var canvas = createCanvas(1000, 700);
   
   //Make engine = engine.create(); and world = engine.world;
	 engine = Engine.create();
   world = engine.world;
  
   //Make ground
   ground = new Ground(400,680,2000,10);
   World.add(world, ground);
  
   //Make a ball
   ball = new Ball(40,20,20);
   World.add(world,ball);

   //Create a bottomSprite
	 bottomSprite = createSprite(580,670,150,10);
	 bottomSprite.shapeColor = "aqua";

	 //Create a rightSprite
	 rightSprite = createSprite(500,640,10,70);
	 rightSprite.shapeColor = "aqua";

   //Create a leftSprite
	 leftSprite = createSprite(660,640,10,70);
	 leftSprite.shapeColor = "aqua";
	
   //Create a matter.js ground
	 bottom = Bodies.rectangle(580,670,150,10,{isStatic: true});
	 World.add(world, bottom);
	
   //Create a right
	 right = Bodies.rectangle(500,640,10,70,{isStatic: true});
	 World.add(world,right);

   //Create a left
   left = Bodies.rectangle(660,640,10,70,{isStatic: true});
	 World.add(world,left);

  //  //Make container
  //  container1 = new Container1(380,20,70,10);
  //  World.add(world,container1);

  //  container2 = new Container1(350,20,10,70);
  //  World.add(world,container2);

  //  container3 = new Container1(420,20,10,70);
  //  World.add(world,container2);
  //  Engine.run(engine);
}


function draw() {
  //Black Background
  background(0);

  //Update Engine
  Engine.update(engine);

  //Display Ground
  ground.display();

  //Display ball
  ball.display();

  // //Display COntainer
  // container1.display();
  // container2.display();
  // container3.display();

  //bottomSPrite.x = bottom.position.x and viseverca
	bottomSprite.x = bottom.position.x;
	bottomSprite.y = bottom.position.y;
	
	//rightSprite.x = right.position.x and viceversa
	rightSprite.x = right.position.x;
	rightSprite.y = right.position.y;
	
	//leftSprite.x = left.position.x and viceversa
	leftSprite.x = left.position.x;
	leftSprite.y = left.position.y;

  //drawSprites();
  drawSprites();
 
}

function keyDownPressed(ball){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball,ball.position,{x:655,y:640});
   }
 }


