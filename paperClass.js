class Paper{
    constructor(x, y, radius){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Matter.Bodies.circle(x, y, radius - 40, options);

        this.radius = radius;
        
        this.image = loadImage("paperImage.png");
        // this.image.scale = 0.2;

        World.add(world, this.body)
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);

        pop();
    }
}