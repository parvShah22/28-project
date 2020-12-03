class Elastic{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 1
            }
            this.pointB = pointB
            this.ela = Constraint.create(options);
            World.add(world, this.ela);
        }
    
        fly(){
            this.ela.bodyA = null;
        }
        
        attach(body){
            this.ela.bodyA = body;
        }
        display(){
            
           if(this.ela.bodyA){
                var pointA = this.ela.bodyA.position;
                var pointB = this.pointB;
                strokeWeight(3);
                stroke("red")
            
                line(pointA.x,pointA.y,pointB.x,pointB.y)
              
           }
           
            
        
        
        
    }
        
}