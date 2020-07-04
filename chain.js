
class Rope{
    
    constructor(roof,ball)
    {
        var options = {
            bodyA:roof.body,
            bodyB:ball.body,
            stiffness:0.04,
            length:10
          }
        this.body  = Constraint.create(options);
        this.bodyA = roof;
        this.bodyB = ball;
        World.add(world,this.body);
    }

    display()
    {
          
        strokeWeight(5);
        line(this.bodyA.body.position.x,this.bodyA.body.position.y,this.bodyB.body.position.x,this.bodyB.body.position.y);
    }

}
    
