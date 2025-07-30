function setup() {
  // Set up the canvas
  new Canvas(1200, 500);
  background(255); //background color
  world.gravity.y = 0;

  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 50;
  ball.color = "blue";
  ball.vel.x = 7;
  ball.vel.y = 7;
  ball.bounciness = 3;

  ball = new Sprite();
  ball.x = 100
  ball.y = 100
  ball.diameter = 100
  ball.color = "red";
 
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

  box.x = mouseX;
  box.y = mouseY;

  if (mouse.presses("left")) {
    let x = new Sprite (mouseX, mouseY, 50, 50)
    x.collider = ("dynamic")
  }
  if (mouse.presses("right")) {
    let y = new Sprite (mouseX, mouseY, 30, 30)
    y.collider = ("static")
}
}
