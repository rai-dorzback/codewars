const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = lower.toUpperCase();
function password(str) {
    let hasUpper = false;
    let hasLower = false;
    let hasNums = false;
    let numChars = 0;
    for(const char of str) {
        if(!isNaN(char)) {
            hasNums = true;
        } else if(lower.includes(char)) {
            hasLower = true;
        } else if(upper.includes(char)) {
            hasUpper = true;
        };
        numChars++;
        console.log(`Uppercase: ${hasUpper}\nLowercase: ${hasLower}\nHas numbers: ${hasNums}\nNumber characters: ${numChars}`);
    };
    return (hasUpper && hasLower && hasNums && numChars >= 8) ? true : false;
};

console.log(password('176I]YQ}'), false);
console.log(password('gaAMfLJT0'), true);
console.log(password('Abcd1234'), true);