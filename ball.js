class Ball 
{
  constructor(x,y,r) 
  {
    var ballfeatures =
      {
        restitution:1
      } 
      this.ball = Bodies.circle (x,y,r,ballfeatures)
      World.add(myWorld,this.ball)
      this.r=r;
     }
  display ()
  {
    push ()
    translate (this.ball.position.x,this.ball.position.y) 
    rotate (this.ball.angle)
  ellipseMode(CENTER)
  ellipse (0,0,this.r)
  pop ()
  }
}
