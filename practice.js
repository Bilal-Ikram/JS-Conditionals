// 1.
function calculateBMI() {
// Prompt user for height and weight
const height = parseFloat(prompt("Enter your height in inches:"));
const weight = parseFloat(prompt("Enter your weight in lbs:"));
// Calculate BMI using the formula: (weight in pounds x 703) / (height in inches x height in inches)
const bmi = (weight * 703) / (height * height);
// Determine BMI category using switch statement with true cases
let category;
switch (true) {
case (bmi < 16.0):
category = "Severely Underweight";
break;
case (bmi >= 16.0 && bmi <= 18.4):
category = "Underweight";
break;
case (bmi >= 18.5 && bmi <= 24.9):
category = "Normal";
break;
case (bmi >= 25.0 && bmi <= 29.9):
category = "Overweight";
break;
case (bmi >= 30.0 && bmi <= 34.9):
category = "Moderately Obese";
break;
case (bmi >= 35.0 && bmi <= 39.9):
category = "Severely Obese";
break;
default:
category = "Morbidly Obese";
break;
}
// Display results
alert(Your BMI of ${bmi.toFixed(2)} makes you ${category});
}
// Call the function to run the BMI calculator
calculateBMI();


// 2.
// Pizza Order Calculator JavaScript Implementation

function calculatePizzaOrder() {
  // Define base prices
  const prices = {
    'S': 15,  // Small pizza
    'M': 20,  // Medium pizza
    'L': 25   // Large pizza
  };
  
  // Define toppings prices
  const pepperoniSmall = 2;
  const pepperoniMediumLarge = 3;
  const extraCheese = 1;
  
  // Prompt user for pizza size
  const size = prompt("Enter pizza size (S, M, or L):").toUpperCase();
  
  // Initialize bill with base price
  let bill = 0;
  if (prices[size] !== undefined) {
    bill = prices[size];
  } else {
    alert("Invalid pizza size! Please enter S, M, or L.");
    return;
  }
  
  // Prompt for pepperoni
  const wantPepperoni = prompt("Add pepperoni? (Y or N):").toUpperCase();
  if (wantPepperoni === 'Y') {
    // Add pepperoni price based on pizza size
    if (size === 'S') {
      bill += pepperoniSmall;
    } else {
      bill += pepperoniMediumLarge;
    }
  }
  
  // Prompt for extra cheese
  const wantCheese = prompt("Add extra cheese? (Y or N):").toUpperCase();
  if (wantCheese === 'Y') {
    bill += extraCheese;
  }
  
  // Display the final bill
  alert(`Thank you for choosing Python Pizza Deliveries!\nYour final bill is: $${bill}.`);
}

// Call the function to run the pizza order calculator
calculatePizzaOrder();

// 3.
// Keyless Car Age Checker JavaScript Implementation

function checkDriverAge() {
  // Prompt user for their age
  const age = parseInt(prompt("What is your age?"));
  
  // Check if age is valid
  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }
  
  // Determine response based on age
  if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Powering On. Enjoy the ride!");
  }
}

// Call the function to run the age checker
checkDriverAge();

// 4.
// Tweet Character Checker JavaScript Implementation

function checkTweetLength() {
  // Maximum tweet length
  const MAX_LENGTH = 140;
  
  // Prompt user for their tweet
  const tweet = prompt("Enter your tweet:");
  
  // Check tweet length
  const tweetLength = tweet.length;
  
  // Determine if tweet is valid and provide feedback
  if (tweetLength <= MAX_LENGTH) {
    alert(`That ${tweetLength} char tweet will work!`);
  } else {
    const charsOverLimit = tweetLength - MAX_LENGTH;
    alert(`Your ${tweetLength} char tweet is ${charsOverLimit} chars too long`);
  }
}

// Call the function to run the tweet checker
checkTweetLength();
