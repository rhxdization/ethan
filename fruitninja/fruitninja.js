// write your codes here
let background, backgroundImg;
function preload() {
    backgroundImg = image('assets/dojobackground.png');
}

function setup() {
    new Canvas(800,600);
    world.gravity.y = 10;
}

function draw() {
    clear();
    
    image(backgroundImg, 0, 0, width, height);
}