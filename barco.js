class Barco{
    constructor(x,y,widht,height,barcopos){
        this.width=width;
        this.height=height;
        this.barcoPosition=barcopos
        this.body=Bodies.rectangle(x,y,widht,height)
        this.image= loadImage("assets/boat.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,this.barcoPosition, this.width,this.height)
      pop()
    }

}