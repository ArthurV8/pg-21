
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var bola,piso,lateral,parede;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var b0la={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }
bola=Bodies.circle(260,100,20,b0la);
World.add(world,bola);
piso=new Ground(width/2,670,width,20);
lateral=new Ground(1100,600,20,120);
parede=new Ground(1350,600,20,120);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x,bola.position.y,40,40)
  piso.show();
  lateral.show();
  parede.show();
  drawSprites();
 
}

 function keyPressed(){
	 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bola,bola.position,{x:75,y:-100});
	 }
	}

