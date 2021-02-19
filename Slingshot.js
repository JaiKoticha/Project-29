class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var PointA = this.sling.bodyA.position;
            var PointB = this.pointB;
            strokeWeight(5);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
        }
    }
    
}