function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(255); //background color

  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 50;
  ball.color = "blue";
  ball.vel.x = 7;
  ball.vel.y = 7;
  ball.bounciness = 3;

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

   // Add current position to trail
  trail.push({ x, y });

  // Limit trail length
  if (trail.length > 100) {
    trail.shift(); // Remove oldest position
  }

  // Draw trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let alpha = map(i, 0, trail.length, 0, 255); // Fades out older points
    fill(255, alpha);
    ellipse(pos.x, pos.y, 10, 10);
  } 
  
  if (ball.x < 0 + ball.diameter / 2 || ball.x > width - ball.diameter / 2) {
    ball.vel.x *= -1;
  }
  if (ball.y < 0 + ball.diameter / 2 || ball.y > height - ball.diameter / 2) {
    ball.vel.y *= -1;
  }

  box.x = mouseX;
  box.y = mouseY;
}