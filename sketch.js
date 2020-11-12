const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1300,700,70,70);
    box2 = new Box(1100,700,70,70);
    pig1 = new Pig(1200,700);
    log1 = new Log(1200,600,300,PI/2);
    box3 = new Box(1300,550,70,70);
    box4 = new Box(1100,550,70,70);
    pig2 = new Pig(1200,550);
    log2 = new Log(1200,450,300,PI/2);
    bird1 = new Bird(200,200)

    box5 = new Box(1200,400,70,70);
    log3 = new Log(1150,350,160,PI/7);
    log4 = new Log(1250,350,160,-PI/7);
    ground = new Ground(width/2,height,width,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}