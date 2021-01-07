//nameSpacing
//const nickname=module
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en, wo
var box, ground

function setup(){
  createCanvas(400,400)

  //in variable engine, it is creating Matter.Engine
  en=Engine.create()   //engine=Engine.create()
  console.log(en)

  //accessing world from the engine
  wo=en.world            //world=engine.world
  console.log(wo)

  box=Bodies.rectangle(100,100,40,40)
  World.add(wo,box)
  //JSON { }

  var a={
    isStatic:true
  }
  ground=Bodies.rectangle(200,300,400,20,a)
  World.add(wo, ground)
}

function draw(){
  background(0)
  Engine.update(en)


rectMode(CENTER)
console.log(box.position.y)
rect(100,box.position.y,40,40)
rect(200, ground.position.y,400,20)
  //cornerMode
  
  drawSprites()
}

//rectangle=> rect()
//circle=> ellipse