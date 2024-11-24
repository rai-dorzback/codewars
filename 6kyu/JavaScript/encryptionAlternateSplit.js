/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/iavascript
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

// string -> odd index chars + even i char, n times
function encrypt(text, n) {
    if(!text || n <= 0) {return text};
    let result = text;
    // variable for odd index, variable for even index
    let odd = '', even = '';
    while(n--) {
        // result - loop
        for(let i = 0; i < result.length; i++) {
            // if index is odd, add char to odd else add to even
            i % 2 !== 0 ? odd += result[i] : even += result[i];
        };
        // reassign result to the new value
        result = `${odd}${even}`
        // clear odd and even variables
        odd = ''
        even = ''
    }
    // return final result
    return result
}

function decrypt(text, n) {
    if(!text || n <= 0) return text;
    let result = new Array(text.length);

    // while loop
    while(n--) {
        let j = 0;
        // for loop, start at index 1 of result and increment by 2
        for(let i = 1; i < result.length; i += 2) {
            result[i] = text[j++];
        }
        // for loop, start at index 0 of result, increment by 2
        for(let i = 0; i < result.length; i+= 2) {
            result[i] = text[j++];
        }
        text = result.join('');
    }
    return text;
}

console.log(encrypt("012345", 3), "012345")
/*
012345
135024 (1)
304152 (2)
012345 (3)
*/
console.log(encrypt("012345", 1), "135024")
console.log(encrypt("01234", 3), "20314")
/*
01234
13024 (1)
32104 (2)
20314 (3)
*/

console.log(decrypt("135024", 1), "012345")
/*
135024
012345
*/
console.log(decrypt("20314", 3), "01234")
/*
20314
32104 (1)
13024 (2)
01234 (3)
*/
console.log(decrypt("012345", 3), "012345")
/*
012345
304152 (1)
135024 (2)
012345 (3)
*/