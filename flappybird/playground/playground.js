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
    floor.y = height - 50;
    
    bird = new Sprite();
    bird.img = flapMidImg;
    bird.bounciness = 1;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2;
    bird.drag = 0.02;
    world.gravity.y = 80;
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    image(bg, 0, 0, width, height)
}