// the final game

// write your codes here

let bird, floor;
let bg, base;
let flapMidImg, flapDownImg, flapUpImg;
let pipeGroup;
let pipe;
let bottomPipe, topPipe;
let gameover;
let gameoverlabel;
let ssi;
let ssl;
let start = false;

// load media files like img or sound effects

function preload() {
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");

    flapMidImg = loadImage("assets/yellowbird-midflap.png");
    flapDownImg = loadImage("assets/yellowbird-downflap.png");
    flapUpImg = loadImage("assets/yellowbird-upflap.png");

    pipe = loadImage('assets/pipe-green.png');  

    gameover = loadImage('assets/gameover.png');
    ssi = loadImage('assets/message.png');
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
    bird.bounciness = .5;
    bird.y = 200;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2;
    bird.drag = 0.02;
    bird.collider = "dynamic";

    world.gravity.y = 20;

    pipeGroup = new Group();

    ssl = new Sprite(width/2, height/2, 50, 50, 'none');
    ssl.img = ssi;
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    
    image(bg, 0, 0, width, height)

    if (kb.presses('space') || kb.presses('w') || mouse.presses('left')) {
        start = true;
        startScreenLabel.visible = false;
    }

    if (start) {
            
        if (frameCount === 1) {
            spawnPipePair();
        }
    }


}

function spawnPipePair() {
    let midY = (height+random(-150,150))/2;
    let gap = 50;

    bottomPipe = new  Sprite(bird.x + 400, midY + gap/2 + 200, 52, 320, 'static');
    bottomPipe.img = pipe;

    topPipe = new Sprite(bird.x + 400, midY - gap/2 - 200, 52, 320, 'static');
    topPipe.img = pipe;
    topPipe.rotation = -180;

    pipeGroup.add(bottomPipe)
    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;

}

