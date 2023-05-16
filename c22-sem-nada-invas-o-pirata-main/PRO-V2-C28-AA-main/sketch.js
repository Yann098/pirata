const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

let backgroundImg;

let tower, towerImg;

let cannon;
let angle = 20;

let balls = {};


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImg = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angleMode(DEGREES);
  angle = 15;
  cannon = new Cannon(180, 110, 150, 150, angle);
 
}

function draw() {
  background("darkblue");
  image(backgroundImg, 0, 0, 1200, 600);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  for (let i = 0; i < balls.length; i++) {
  showCannonBalls(balls[i],i)
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot()
  }
}

function KeyPressed() {
  if (keyCode===DOWN_ARROW) {
  let  cannonBall = new CannonBall(cannon.x, cannon.y);
  balls.push(cannonBall)
  }
}

function showCannonBalls (ball,index){
  if (ball) {
    ball.display ()
  }
}