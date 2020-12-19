class Rope {
    constructor(bodyA,bodyB){
        var opt = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }

    display(){
        var b1 = this.chain.bodyA.position
        var b2 = this.chain.bodyB.position

        strokeWeight (4);
        line (b1.x,b1.y,b2.x,b2.y );
    }
}