
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var dustbinImg;

function preload() {
  dustbinImg = loadImage("dustbingreen.png")
  


}

function setup() {
	createCanvas(1200, 400);
 engine = Engine.create();
 world = engine.world;



  dustbin1 = new Dustbin(810,380,20,height+140);
  ground = new Ground(600,height,1200,20);
  dustbin2 = new Dustbin(720,278,20,90);
  dustbin3 = new Dustbin(905,278,20,90);
  paper = new Paper(20,360,68,68);
 

  Engine.run(engine);

 
  
}


function draw() {
  background(	rgb (220,220,220)); 
  Engine.update(engine);
  dustbin1.display();
  ground.display();
  paper.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinImg,725,170,180,200)
  

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 800, y: -1000});
  }
}


  
  