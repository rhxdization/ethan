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
    let fruitTypes
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;
}

function draw() {
    clear();
    
    image(backgroundImg, 0, 0, width, height);
}