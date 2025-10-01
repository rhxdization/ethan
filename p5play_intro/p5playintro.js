function setup() {
  // Set up the canvas
  new Canvas(2500,2500);
  background(255); //background color
  world.gravity.y = 15;

  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 200;
  ball.color = "blue";
  ball.vel.x = 7;
  ball.vel.y = 7;
  ball.bounciness = 20;

  ball2 = new Sprite();
  ball2.x = 200;
  ball2.y = 200;
  ball2.diameter = 200;
  ball2.color = "red";
  ball2.vel.x = -7;
  ball2.vel.y = -7;
  ball2.bounciness = 20;
 
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here

}

function draw() {
  background(255);
  // fill("skyblue");
  // stroke("pink");
  // strokeWeight(10);
  
  // circle(30,30,50);
  // rect(50,50,100,100)
  fill(0);
  textSize(12);
  text("Ball: (" + int(ball.x) + ", " + int(ball.y) + ")", 10, 20);
  text("Mouse: (" + mouseX + ", " + mouseY + ")", 10, 40);
  text("Ball velocity x: (" + ball.vel.x + ")", 10, 60);
  text("Ball velocity y: (" + ball.vel.y + ")", 10, 80);
  
  if (ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
    ball.vel.x *= -1;
  }
  if (ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
    ball.vel.y *= -1;
  }
    if (ball2.x < 0 + ball2.diameter / 2 || ball2.x > width - ball2.diameter / 2) {
    ball2.vel.x *= -1;
  }
  if (ball2.y < 0 + ball2.diameter / 2 || ball2.y > height - ball2.diameter / 2) {
    ball2.vel.y *= -1;
  }

  box.x = mouseX;
  box.y = mouseY;

  if (mouse.presses("left")) {
    let x = new Sprite (mouseX, mouseY, 200, 200)
    x.collider = ("dynamic")
  }
  if (mouse.presses("right")) {
    let y = new Sprite (mouseX, mouseY, 150, 150)
    y.collider = ("static")
}
}
