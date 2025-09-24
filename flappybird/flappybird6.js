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
let score = 0;
let numberImages = [];
let scoreDigits;
let flapSound, pointSound, dieSound;

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

    for (let i = 0; i<10; i++) {
        numberImages[i] = loadImage('assets/' + i + '.png');
    }

    flapSound = createAudio('assets/sfx_wing.mp3');
    pointSound = createAudio('assets/sfx_point.mp3');
    dieSound = createAudio('assets/sfx_die.mp3');
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
    bird.gravity = 0;
    bird.visible = false;

    world.gravity.y = 0;

    pipeGroup = new Group();

    ssl = new Sprite(width/2, height/2, 50, 50, 'none');
    ssl.img = ssi;

    scoreDigits = new Group();
    scoreDigits.collider = "none";
    scoreDigits.layer = 1000;
}

// called repeatedly 60 times in a second
// where interaction and animation

function draw() {
    
    image(bg, 0, 0, width, height)

    drawScore(width/2, 20, score, 24, 36);

    if (kb.presses('space') || kb.presses('w') || mouse.presses()) {
        start = true;
        ssl.visible = false;
        bird.visible = true;
        world.gravity.y = 20;
    }

    if (start) {
            
        if (frameCount === 1) {
            spawnPipePair();
        }

        if (kb.presses("space") || mouse.presses() || kb.presses("w")) {
            bird.vel.y = -6;
            bird.sleeping = false;
            wingSound.play();
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
            if (pipe.x < -50) {
            pipe.remove();
            }
        }

        for (let pipe of pipeGroup) {
            let pipeRightEdge = pipe.x + pipe.w / 2;
            let birdLeftEdge = bird.x - bird.w / 2;
            if (pipe.passed == false && pipeRightEdge < birdLeftEdge) {
                pipe.passed = true;
                pointSound.play();
            }
        }

        if (bird.collides(pipeGroup) || bird.collides(floor) || bird.y === 0) {
            gameoverlabel = new Sprite(width/2, height/2, 192, 42, 'static');
            gameoverlabel.img = gameover;
            gameoverlabel.layer = 100;
            gameoverlabel.x = camera.x;
            dieSound.play();
            noLoop();
        } 

    }

}

function spawnPipePair() {
    let midY = (height+random(-350,180))/2;
    let gap = 50;

    bottomPipe = new  Sprite(bird.x + 400, midY + gap/2 + 200, 52, 320, 'static');
    bottomPipe.img = pipe;

    topPipe = new Sprite(bird.x + 400, midY - gap/2 - 200, 52, 320, 'static');
    topPipe.img = pipe;
    topPipe.rotation = -180;

    topPipe.passed = false;

    pipeGroup.add(bottomPipe)
    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;

}

function drawScore(x, y, score, digitWidth, digitHeight) {
    scoreDigits.removeAll();
    let scoreStr = str(score);
    let totalWidth = scoreStr.length * digitWidth;
    let startX = x - totalWidth / 2;

    for(let i = 0; i < scoreStr.length; i++) {
        let digit = int(scoreStr[i]);
        let xPos = startX + i * digitWidth;
        let digitSprite = new scoreDigits.Sprite(xPos, y, digitWidth, digitHeight);
        digitSprite.img = numberImages[digit];
        moveGroup(scoreDigits, camera.x, 24);
    }
}

function moveGroup(group, targetX, spacing) {
    let totalWidth = (group.length - 1) * spacing;
    let startX = (targetX - totalWidth/2);
    for (let i = 0; i < group.length; i++) {
        group[i].x = startX + i * spacing;
    }
}
