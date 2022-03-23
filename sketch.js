const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo
var torre
var torreimg
var canhao 
var angle=20
var baladecanhao
var balas = []
var navio
var barcos = []
var barco
function preload() {
  fundo= loadImage("assets/background.gif")
  torreimg= loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
 angle=15
 var options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 torre= Bodies.rectangle(160,350,160,310,options)
 World.add(world,torre)
canhao=new Canhao(180,110,130,100,angle)
}

function draw() {
image(fundo,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  push()
  imageMode(CENTER)
   image(torreimg,torre.position.x, torre.position.y, 160, 310)
  pop()
  showBarcos();
  for(var i=0; i<balas.length; i++){
    showbalas(balas[i]);
  }
  canhao.display();
console.log(barco)
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var baladecanhao= new Balacanhao(canhao.x,canhao.y);
    balas.push(baladecanhao);
  }
}
function showbalas(bala,i){
  if (bala){
    bala.display();
  }
}
function keyReleased(){
  if (keyCode===DOWN_ARROW){
    balas[balas.length-1].atirar();
  }
}
function showBarcos(){
if (barcos.length>0) {
  if(barcos[barcos.length-1] === undefined || barcos[barcos.length-1].body.position.x<width-300){
    var posicoes=[-40, -60, -70, -20]
    var posicao= random(posicoes)
     barco=new Barco(width, height -100, 170, 170, posicao)
    barcos.push(barco)
  }
  for (var i=0;i<barcos.lenght; i++){
    if (barcos[i]){
      Matter.Body.setVelocity(barcos[i].body,{x:-0.9,y:0})
      barcos[i].display();
    }
  }
}
else { barco= new Barco(width,height-60,170,170,-60)
barcos.push(barco)}
}