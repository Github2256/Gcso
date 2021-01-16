class Paper {
  constructor(x, y, radius) {
    var options = {
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 70;
    this.image = loadImage("white.png");
      
    World.add(world, this.body);
    }
  display(){
    imageMode(RADIUS);

    fill("grey")


    image(this.image,this.body.position.x, this.body.position.y,79,79);
  }
  };