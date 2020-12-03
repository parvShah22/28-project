
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyimg = loadImage("sprites/boy.png");
    treeimg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 mango1 = new Mango(650,400)
 mango2 = new Mango(750,420)
 mango3 = new Mango(700,500)
 mango4 = new Mango(680,460)
 mango5 = new Mango(800,500)
 mango6 = new Mango(850,470)
 mango7 = new Mango(620,480)
 stone1 = new Stone(90,570)
 ground1 = new Ground(400,700,1000,10)
 elastic = new Elastic(stone1.body,{x:110, y:620});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(this.boyimg,80,580,150,150)
  image(this.treeimg,550,350,350,350)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
  ground1.display();
  elastic.display();
  
  detectollisin(stone1,mango1);
  detectollisin(stone1,mango2);
  detectollisin(stone1,mango3);
  detectollisin(stone1,mango4);
  detectollisin(stone1,mango5);
  detectollisin(stone1,mango6);
  detectollisin(stone1,mango7);
  
  text("Press Up arrow to get second Chance to play!!!",230,250)
  drawSprites();
 


}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  elastic.fly();
  
}

function detectollisin(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=Lmango.radius+Lstone.radius)


{

  Matter.Body.setStatic(Lmango.body,false);

}
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    elastic.attach(stone1.body);
  }
}
