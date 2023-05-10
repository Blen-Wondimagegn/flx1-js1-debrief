//if statement
let myNumber = 6;

if (typeof myNumber !== "number") {
  console.log("This is not a number");
} else if (myNumber % 3 == 0) {
  console.log("Gen");
} else if (myNumber % 5 == 0) {
  console.log("Buzz");
} else if (myNumber % 5 == 0 && myNumber % 3 == 0) {
  console.log("Genbuzz");
} else {
  console.log(myNumber);
}

//switch statement
let items = "door";
switch (items) {
  case "Shoes":
    console.log("Shoes are $50");
    break;
  case "Jeans":
    console.log("Jeans are $25");
    break;
  case "Hats":
    console.log("Hats are $12");
    break;
  case "Socks":
    console.log("Socks are $2");
    break;
  default:
    console.log("Invalid Item");
    break;
}

//Random number
console.log(Math.floor(Math.random() * (100 - 50) + 50));
