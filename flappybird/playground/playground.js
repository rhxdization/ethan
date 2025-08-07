// write your codes here

let bird, floor;
let bg, base;
let flapMidimg, flapDownImg, flapUpImg;

// load media files like img or sound effects

function preload() {
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");

    flapMidImg = image(yellow)
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
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    image(bg, 0, 0, width, height)
}