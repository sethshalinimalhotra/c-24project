class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        };
        this.rect1 = Bodies.rectangle(600,650,200,20,options);
        this.rect2 = Bodies.rectangle(490,610,20,100,options);
        this.rect3 = Bodies.rectangle(700,610,20,100,options);  
        World.add(world,this.rect1);
	    World.add(world,this.rect2);
	    World.add(world,this.rect3);
    }
    display(){
        fill("yellow");
    rect(this.rect1.position.x,this.rect1.position.y,200,20);
    rect(this.rect2.position.x,this.rect2.position.y,20,100);
    rect(this.rect3.position.x,this.rect3.position.y,20,100);
    }
}