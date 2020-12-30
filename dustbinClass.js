class Dustbin{
    constructor(x, y, height, width){
        // Making the body
        this.body = Bodies.rectangle(x, y, width, height, {isStatic : true});

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(color){

        push();
        if (color === "green"){
            fill("green");
        }

        else{

            fill("White");
        }

        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

        pop();

    }
}