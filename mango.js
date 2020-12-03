class Mango{
    constructor(x,y){
      var Option ={
        isStatic:true,
        restitution:0.5,
        friction:1
        }
    


      this.radius = 40
      this.body = Bodies.circle(x, y,40 , Option);
      this.image=loadImage("sprites/mango.png")
      World.add(world, this.body);
}
   display(){
      var pos =this.body.position;
    
      
      
      
      imageMode(CENTER);
      fill("red");
      image(this.image,pos.x,pos.y, this.radius, this.radius);
      
        };
      }