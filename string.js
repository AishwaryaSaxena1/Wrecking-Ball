class string {
    constructor(body1,point1){
        var options = { bodyA: body1, pointB: point1, stiffness: 0.004, length: 200} 
        this.pointB=point1 
        this.slingshot = Constraint.create(options);
        World.add(Saxena, this.slingshot);

    }
    display(){
         var pointA = this.slingshot.bodyA.position; 
         var pointB = this.pointB; 
         strokeWeight(4); 
         stroke(255,167,3);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
         }
}