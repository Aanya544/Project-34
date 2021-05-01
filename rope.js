class Rope{
    constructor(body1,body2,point){
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB: point,
            length: 150,
            stiffness: 0.2
        }
        this.sling = Constraint.create(options);
        this.point = point
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.bodyB.position

            push()
            strokeWeight(5)
            stroke("blue")
            line(pointA.x,pointA.y,pointB.x + this.point.x,pointB.y+this.point.y);
            pop();
        }
    }

}