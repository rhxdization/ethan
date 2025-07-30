
  // write your codes here

  // --- Exercise: Area of Triangle ---
  // write your codes here

  // --- Exercise: Sum of first 10 even numbers ---
  // write your codes here

  // --- Exercise: Age category classification ---
  // write your codes here

  // --- Exercise: Display odd numbers backward using while loop ---
  // write your codes here

  // --- Exercise: Array operations (groceries) ---
  // write your codes here
function setup() {
    new Canvas(800,400);
    textSize(16);
    fill(255);
    

    // // let sum = (a + b);
    // // console.log(sum);
    // // let product = (a * b);

    // fill(255,0,0);
    // textSize(60);
    // // text("The sum of a and b is " + sum, 50, 50);
    // // text("The product of a and b is " + product, 50, 70);

    // let base = 10;
    // let height = 5;
    // let area = 10*5/2;
    // text("The triangles area is " + area, 50, 50);
    // text("The triangles area is " + area, 50, 100);
    // text("The triangles area is " + area, 50, 150);
    // text("The triangles area is " + area, 50, 200);
    // text("The triangles area is " + area, 50, 250);
    // text("The triangles area is " + area, 50, 300);

    // let a = 5
    // let b = 10

    // for (let i = 3; i<=46; i+=3) {
    //   console.log(i);
    // }
    // for (let i = 10; i<=20; i++) {
    //   console.log(i);
    // }
    // for (let i = 20; i>=1; i--) {
    //   console.log(i);
    // }
    
    let sum = 0
    for (let i = 2; i<=20; i+=2) {
      console.log(i);
      sum+=i
      text(i,10,40)
    }
    text("The value of all numbers is " + sum, 10, 20)
  }