/*
Once a keen blogger has finished writing a post in Word, she then has to crawl through it and edit out some of the punctuation marks, so that she can upload his new post with correct spacing and symbols. You need to create a Regexp that will help him with this task.

She will enter her post one paragraph at a time, so each non-empty string given to the function must be returned with <p> preceding it and a </p> at the end of it.

Only the following punctuation marks must also be ammended:

Punctuation	Char	Encoded
dash	–	&ndash;
apostrophe	’	&rsquo;
ampercant	&	&amp;
open quotation marks	“	&ldquo;
close quotation marks	”	&rdquo;
Example:
htmlify('Jess says “Frank & Joe aren’t the best bloggers”');
Returns:

<p>Jess says & ldquo;Frank & amp; Joe aren& rsquo;t the best bloggers& rdquo;</p>
Additional note
If you want to actually use this function you can adapt it to suit your preferred word processor's punctuation marks into it.
*/

// object with chars and their encodings
const specialChars = {
    "–": "&ndash;",
    "’": "&rsquo;",
    "&": "&amp;",
    "“": "&ldquo;",
    "”": "&rdquo;",
};

// SOLUTION 1
// str -> html tag, replace special chars with encoded ones
function htmlify(str){
    let res = '';
    // loop thru str
    for(const char of str) {
        if(specialChars[char]) {
            res += specialChars[char];
        } else {
            res += char;
        };
    };
    // add p tag around, return res
    return `<p>${res}</p>`
}

const res = htmlify(`Jess says “Frank & Joe aren’t the best bloggers”`);
console.log(res)

// MAKING SOLTUION 1 MORE CONCSIE - remove comments, refactor if/else to ternary
  function htmlify(str){
      let res = '';
      for(const char of str) {
        specialChars[char] ? res += specialChars[char] : res += char;
      };
      return `<p>${res}</p>`;
  };