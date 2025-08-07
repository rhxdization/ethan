// write your codes here

let bird, floor;
let bg, base;
let flapMidImg, flapDownImg, flapUpImg;

// load media files like img or sound effects

function preload() {
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");

    flapMidImg = loadImage("assets/yellowbird-midflap.png");
    flapDownImg = loadImage("assets/yellowbird-downflap.png");
    flapUpImg = loadImage("assets/yellowbird-upflap.png");
}

// similiar to "when green flag clicked"
// run once

function setup() {
    new Canvas(400,600);
    background("skyblue");
    
    floor = new Sprite();
    floor.collider = "static";
    floor.img = base;
    floor.y = height - 20;
    floor.height = 118;
    floor.width = 400;
    
    bird = new Sprite();
    bird.img = flapMidImg;
    bird.bounciness = 1.5;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2;
    bird.drag = 0.02;
    bird.collider = "dynamic";

    world.gravity.y = 10;
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    image(bg, 0, 0, width, height)
    if (mouse.presses("left")) {
        new Sprite(mouseX, mouseY, 30, 30, "static");
    }
    if (mouse.presses("right")) {
        new Sprite(mouseX, mouseY, 30, 30, "dynamic");
    }

    if (kb.presses("space")) {
        bird.vel.y = -5;
        bird.sleeping = false;
    }
}