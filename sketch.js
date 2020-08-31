const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var height = 400;
var width = 480;
var divisionHeight=150;

var divisions = [];
var plinkos = [];
var particles = [];

var ground;


function setup() {
  createCanvas(480,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,400,1200,30);

  for(var k=0;k <= width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j=40; j <=width;j=j+50){
      plinkos.push(new Plinko(j,75,10))
  }

  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  
  for(var j=0; j < particles.length; j++){
      particles[j].display();
  }

  for(var k=0;k < divisions.length; k++){
    divisions[k].display();
  }

  for(var i=0;i < plinkos.length; i++){
    plinkos[i].display();
  }

  drawSprites();
}

