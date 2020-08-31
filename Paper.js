class Paper{
    constructor(x,y,width,height){
        var options={       
            isStatic:true,     
            restitution:0.3,
            friction:0.5,
            density:1.2          
        }
        this.body=Bodies.circle(x,y,width,options);        
        this.width=width;
        this.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;        
        fill("pink");
        ellipseMode(RADIUS);        
        ellipse(pos.x, pos.y,20,20);        
    }
};
