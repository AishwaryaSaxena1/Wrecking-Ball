class Brick {
    constructor(x,y,wid,hei){
        var opt={
            restitution:1.0,
            friction:0.2,
            density:0.8
          }
          this.body=Bodies.rectangle(x,y,wid,hei,opt);
          this.width=wid;
          this.height=hei;
          World.add(Saxena,this.body);
    }
    display(){
        var pos=this.body.position
        var ang=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}