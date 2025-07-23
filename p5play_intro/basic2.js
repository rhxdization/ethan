function setup() {
    new Canvas(800,400);
    let a = 5;
    let b = 10;

    let sum = (a + b);
    console.log(sum);
    console.log(a*b);

    fill(255,0,0);
    textSize(14);
    text("The sum of a and b is " + sum, 50, 50);
    text("The product of a and b is " + sum, 50, 50);
}