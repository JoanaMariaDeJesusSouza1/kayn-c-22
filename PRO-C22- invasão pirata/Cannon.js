class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cannonImage = cannonImage
        this.cannonBaseImage = cannonBaseImage;
   
    }
    display(){
        push();
        //rectMode(CENTER);
        //rect( this.x,this.y,this.width,this.height);
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(cannonImage, 0,0,this.width,this.height);
        
        pop();

        image(cannonBaseImage,70,20,200,200);
        //rect(70,20,200,200);
        noFill();
    }
}