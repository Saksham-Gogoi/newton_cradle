class Sling {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            lenght: 220
        };
        this.pointB = pointB
        this.pointX = pointA.x;
        this.pointY = pointA.y - 250;
        this.Sling = Constraint.create(options);
        World.add(world, thhis.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            Pop();
        }
    }
}