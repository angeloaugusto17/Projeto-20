//Projeto 20; 03/04/2022; 10:500; Ângelo Augusto
//Primeiro projeto com a nova biblioteca(matter), não foi muito
//fácil de fazer, mas achei bem legal!!

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var ground;
var cube, rec, circle;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var solo_options= {
		isStatic:true
	}
	ground = Bodies.rectangle(0,height - 1, width*2, 1, solo_options);
	World.add(world,ground);

	var circle_options={
		restitution: 0.7,
		friction:0,
		frictionAir:0
	}
	circle = Bodies.circle(600,10,60,circle_options);
	World.add(world,circle);

	var cube_options={
		restitution: 0.5,
		friction:0.03,
		frictionAir:0.1
	}
	cube = Bodies.rectangle(100,10,50,50,cube_options);
	World.add(world,cube);

	var rec_options={
		restitution: 0.7,
		friction:0.2,
		frictionAir:0
	}
	rec = Bodies.rectangle(300,10,90,60,rec_options);
	World.add(world,rec);
}


function draw() {
	background("lightgreen");
	Engine.update(engine);

	push();
	rect(ground.position.x,ground.position.y,width*2,1);
	pop();

	push();
	fill("blue");
	ellipseMode(RADIUS);
	ellipse(circle.position.x,circle.position.y,60);
	pop();

	push();
	fill("purple");
	rectMode(CENTER);
	rect(cube.position.x,cube.position.y,50,50);
	pop();

	push();
	rectMode(CENTER);
	rect(rec.position.x,rec.position.y,90,60);
	pop();
}



