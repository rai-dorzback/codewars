/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

const validatePIN = pin => {
  let len = pin.length;
  // check if the pin is 4 or 6 digits
  if(len !== 4 && len !== 6) {
    return false;
  };
  // check each value is between 0 and 0
  for (let i in pin) {
    if(pin[i] > '9' || pin[i] < '0') {
      return false;
    };
  };
  return true;
};
