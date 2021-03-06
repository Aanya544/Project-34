class Bob {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'frictionAir' : 0.0,
          'slop' :1,
          'inertia':Infinity
      }
      this.body =Matter.Bodies.circle(x, y,20, options);
      this.x=x;
      this.y=y;
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };