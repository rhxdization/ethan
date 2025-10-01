// write your codes here
let backgroundImg;
let fruitTypes = [];

function preload() {
    backgroundImg = loadImage('assets/dojobackground.png');

    let peach = {
        whole: loadImage('assets/peachwhole.png')
    }
    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png')
    }
    let fruitTypes = [peach, watermelon];
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;
    fruitGroup = new Group();
}

function draw() {
    clear();
    
    image(backgroundImg, 0, 0, width, height);
}

function spawnFruit() {
    let fruitData = random(fruitTypes);
    let randomX = random
}