class Bob{
    constructor(x,y){
        var options={
        isStatic: false,
        restitution: 1,
        friction: 0.1,
        density: 1.2
        }
       this.body=Bodies.circle(x,y,50,options)
       World.add(world,this.body)
    }
        
    display(){
        push();
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}