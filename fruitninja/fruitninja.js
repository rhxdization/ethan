// write your codes here
let background, backgroundImg;
function preload() {
    backgroundImg = image('assets/dojobackground.png');
}

function setup() {
    new canvas(800,600);
}

function draw() {
    image(backgroundImg, 0, 0, width, height);
}