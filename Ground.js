class Ground {
    constructor(x,y,width,height){
       var opt={
           isStatic:true
       }
       this.body=Bodies.rectangle(x,y,width,height,opt);
       this.width=width;
       this.height=height;
       World.add(Saxena,this.body);
    }
    Display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}