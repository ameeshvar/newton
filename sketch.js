const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    roof1 = new Roof(200,100,300,50);
    roof2 = new Roof(300,100,300,50);
    roof3 = new Roof(400,100,300,50);
    roof4 = new Roof(500,100,300,50);
    roof5 = new Roof(600,100,300,50);
    bob1 = new Paper(200,500,50);
    bob2 = new Paper(300,500,50);
    bob3 = new Paper(400,500,50)
    bob4 = new Paper(500,500,50)
    bob5 = new Paper(600,500,50)
    chain1 = new Rope(roof1,bob1);
    chain2 = new Rope(roof2,bob2);
    chain3 = new Rope(roof3,bob3);
    chain4 = new Rope(roof4,bob4);
    chain5 = new Rope(roof5,bob5);
  Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(225);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

}

