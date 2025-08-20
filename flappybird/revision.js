// a = (0,0); b = (0,600); c = (400,600)

//declare a variable
let i = 1
// let twominisandabigpot = "sixsevenmustardmangos";
// let peepee = 67
// let pie = 3.142

// declare an array
// let n = ["1", "2", "3", "4"];

function setup() {
//     // for (let i = 1; i < 4; i++) {
//     //     console.log(i);
//     // }
//     while (i <= 10) {
//         console.log(i);
//         i++;
//     }

new Canvas(400,600);
background(255);
bird = new Sprite();
bird.bounciness = .5;
    bird.y = 200;
    bird.x = 300;
    bird.width = 30;
    bird.height = 30;
    bird.mass = 2;
    bird.drag = 0.02;
    bird.collider = "dynamic";

}

