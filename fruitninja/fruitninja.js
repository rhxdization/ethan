// write your codes here
let background, backgroundImg;
function preload() {
    backgroundImg = image('assets/dojobackground.png');
}

function setup() {
    new canvas(800,600);
    background = backgroundImg;
}