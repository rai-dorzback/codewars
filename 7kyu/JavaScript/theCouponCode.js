/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// METHOD 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // make dates into datetime objects to compare them
    currentDate = new Date(currentDate)
    expirationDate = new Date(expirationDate)
  
  // check if entered code is same as correct code
  if(enteredCode === correctCode) {
    // check if currentDate is before expirationDate
    if(currentDate <= expirationDate) {
      return true
    }
  }
  return false
}

// METHOD 2: arrow function. instead of nested if statements, using && operator.
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => (enteredCode === correctCode) && (new Date(currentDate) <= new Date(expirationDate));
