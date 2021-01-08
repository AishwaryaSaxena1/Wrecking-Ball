class ball {
    constructor(x,y){
        var opt={
            restitution:1.0,
            friction:0.2,
            density:0.8
          }
          this.body=Bodies.rectangle(x,y,50,50,opt);
          this.width=50;
          this.height=50;
          World.add(Saxena,this.body);
    }
    display(){
        var pos=this.body.position
        var ang=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}