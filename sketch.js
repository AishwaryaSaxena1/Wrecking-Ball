const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var Saxena,Aishwarya;


function setup() {
  createCanvas(800,400);
  Aishwarya=Engine.create();
  Saxena=Aishwarya.world;
  grd=new Ground(400,380,800,20);
  box1=new Brick(600,300,50,50);
  box2=new Brick(600,300,50,50);
  box3=new Brick(600,300,50,50);
  box4=new Brick(600,300,50,50);
  ball=new ball(500,300);

  rope=new string(ball.body,{x:500,y:20})
}

function draw() {
  background(0);  
  Engine.update(Aishwarya);
  grd.Display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}