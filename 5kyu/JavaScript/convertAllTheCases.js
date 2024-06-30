/*
In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""
Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
*/

// METHOD 1
function findOgCase(str) {
  // variables to store what the original case is
  let kebabCase = false, snakeCase = false, camelCase = false;
  
  // if indexOf "-" is not -1, it is in kebab case currently
  if(str.indexOf('-') !== -1) {
    kebabCase = true
  } 
  // if it has an underscore, its in snake case
  if (str.indexOf('_') !== -1) {
    snakeCase = true
  } 
  // if it has at least 1 capital letter, its in camel case
  if(str !== str.toLowerCase()) {
    camelCase = true
  }
  
  let ogCases = [kebabCase, snakeCase, camelCase]
  // make sure only one of these cases is true, if not then return undefined bc it is invalid input
  let numTrues = 0;
  for(let i = 0; i < ogCases.length; i++) {
    if (ogCases[i]) {
      numTrues += 1;
    }
  }
  // return invalid if it matches mutiple cases
  if(numTrues > 1) {
    return 'invalid'
  } else if (numTrues < 1) {
    return 'same'
  }
  
  // return string of which case it's starting as 
  return kebabCase ? 'kebab' : snakeCase ? 'snake' : camelCase ? 'camel' : 'invalid'
}

function changeCase(str, targetCase){
  if(str === '') {
    return ''
  }
  
  // find original case
  let ogCase = findOgCase(str)
  // if original case is same as target, make no changes
  if(ogCase === targetCase || ogCase === 'same') {
    return str
  }
  // if it is in kebab case
  else if (ogCase === 'kebab') {
    // kebab -> snake
    if(targetCase === 'snake') {
      // join by underscore instead of dash
      return str.split('-').join('_')
      // if need to convert to camelCase
    } else if (targetCase === 'camel') {
      return str.split('-').map((e, i) => i > 0 ? `${e[0].toUpperCase()}${e.slice(1)}` : e).join('')
    }
  } else if (ogCase === 'snake') {
    // snake -> kebab
    if(targetCase === 'kebab') {
      return str.split('_').join('-')
      // snake -> camel
    } else if (targetCase === 'camel') {
      return str.split('_').map((e, i) => i > 0 ? `${e[0].toUpperCase()}${e.slice(1)}` : e).join('');
    }
  } else if(ogCase === 'camel') {
    let indicesOfUppercaseLetters = [];
    // loop through letters in str to find the uppercase ones so we know what index to separate the words at
    for(let i = 0; i < str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
        // add that index number to the array
        indicesOfUppercaseLetters.push(i)
      }
    };
    
    // split str into array of words / snake case
    str = str.split('').map((e, i) => {
      if(indicesOfUppercaseLetters.find(e => e === i)) {
        return `_${e}`
      } else {
        return e
      }
    }).join('').toLowerCase()
    
    // camel -> kebab
    if(targetCase === 'kebab') {
     return str.split('_').join('-')
      // camel -> snake
    } else if (targetCase === 'snake') {
      return str
    }
  } else if(ogCase === 'invalid') {
    return undefined
  } 
}
