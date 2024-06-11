console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// Excercise 1
let magicNumber = 3;



//get the user's guess
//returns a string
let guessNumber = window.prompt("What is the magic number?(1-100)");

if (guessNumber == magicNumber) {
  console.log("Congrats!!!YOU,yes YOU, guessed the magic number!");
} else if (guessNumber > magicNumber) {
  console.log("Guess was too high-Try again");
} else if (guessNumber < magicNumber) {
  console.log("Guess was too low-Try again.");
} else (guessNumber === magicNumber)
console.log("Not a valid number");

guessNumber = parseInt(guessNumber);


// Excercise 2
let birthMonth = prompt("Please insert your birthmonth:");


switch (birthMonth) {
  case "December":
  case "January":
  case "February":
  case "december":
  case "january":
  case "february":
 
  console.log("Brrrrr...Winter...Cozy for gaming and coding tho!");
    break;

  case "March":
  case "April":
  case "May":
    case "march":
      case "april":
      case "may":

    console.log("AHH CHOO, sorry , Spring alergies");
    break;

  case "June":
  case "July":
  case "August":
  case "june":
  case "july":
  case "august":

  console.log("Ah, born in Summer are we? loser...");
     break;

  case "September":
  case "October":
  case "November":
  case "september":
  case "october":
  case "november":


    console.log("Ah, you were born in the Fall...nice");
    
 
    break;
  default:
    console.log("I don't recognize that month. . .");
}


// Excercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}
switch (typeId){
  case "01":
    type = "Tank top";
    break;
    case "02":
      type = "T-shirt";
      break;
      case "03":
        type = "longsleve";
        break;
      case "04":
        type = "sweat shirt";
        break;
        default:
          type = "Other";
}

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId){
case "BK":
  color = "Black";
  break;
  case "BL":
    color = "Blue";
    break;
    case "RD":
      color = "Red";
      break;
      case "PU":
      color = "Purple";
      break;
      
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (sizeId) {
  case "5":
    size = "Small"
    break;
    case "M":
      size = "Medium";
      break;
      case "L":
        size = "Large";
        break;
        case "XL":
          size = "Extra Large";
          break;
}