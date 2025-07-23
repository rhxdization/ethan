function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 50;
  ball.color = "blue";

  box = new Sprite();
  box.x = 100
  box.y = 100
  box.w = 100
  box.h = 50
  box.color = "red";
 
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  // fill("skyblue");
  // stroke("pink");
  // strokeWeight(10);
  
  // circle(30,30,50);
  // rect(50,50,100,100)
  fill(0);
  textSize(16);
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10, 20);
  text("Mouse: (" + int(ball.x) + ", " + int(ball.y) + ")", 10, 40);
}