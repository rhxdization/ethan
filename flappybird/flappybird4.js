// the final game

// write your codes here

let bird, floor;
let bg, base;
let flapMidImg, flapDownImg, flapUpImg;
let pipeGroup;
let pipe;
let bottomPipe, topPipe;

// load media files like img or sound effects

function preload() {
    bg = loadImage("assets/background-day.png");
    base = loadImage("assets/base.png");

    flapMidImg = loadImage("assets/yellowbird-midflap.png");
    flapDownImg = loadImage("assets/yellowbird-downflap.png");
    flapUpImg = loadImage("assets/yellowbird-upflap.png");

    pipe = loadImage('assets/pipe-green.png');  
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
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    if (frameCount === 1) {
        spawnPipePair();
    }
    
    image(bg, 0, 0, width, height)

    if (kb.presses("space") || mouse.presses("left") || kb.presses("w")) {
        bird.vel.y = -7;
        bird.sleeping = false;
    }

    fill("black");
    textSize = 14;
    text("vel.y: " + bird.vel.y.toFixed(0), 10, 20);
    text("is moving: " + bird.isMoving, 10, 40);
    text("is sleeping: " + bird.sleeping, 10, 60);

    if (bird.vel.y < 0.5) {
        bird.img = flapDownImg;
        bird.rotation = -30;
    }
    else if (bird.vel.y > 0.5) {
        bird.img = flapUpImg;
        bird.rotation = 30;
    }
    else {
        bird.img = flapMidImg;
        bird.rotation = 0;
    }
    
    bird.x += 3;
    camera.x = bird.x;
    floor.x = bird.x;

    if(frameCount % 90 === 0) {
        spawnPipePair();
    }

    for (let pipe of pipeGroup){
        if (pipe.x < -50){
            pipe.remove();
        }
    }

}

function spawnPipePair() {
    let midY = (height+random(0,100))/2;
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

