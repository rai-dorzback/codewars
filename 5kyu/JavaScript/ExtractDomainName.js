/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

Only needs to handle case of http, https, www., and no beginning
*/

// METHOD 1: conditionals
const domainName = url => {
  // split url by period to cut off the ending
  // return beginning
  if(url.includes('www')) {
    let beginning = url.split('.')
    return beginning[1]
  } else if (url.includes('http')) {
    let beginning = url.split('.')[0];
    return beginning.split('//') [1]
  } else {
    return url.split('.')[0]
  }
}

// METHOD 2: string.replace()
const domainName = url => {
  url = url.replace('www.', '')
  url = url.replace('https://', '')
  url = url.replace('http://', '')
  return url.split('.')[0]
}

// METHOD 3: method 1 but on one line using ternary operator
const domainName = url => url.includes('www') ? url.split('.')[1] : url.includes('http') ? url.split('.')[0].split('//')[1] : url.split('.')[0]

// METHOD 4: make an object for things to replace, loop through object, split by .
function domainName(url){
  // object of beginnings of urls that will need to be replaced
  const replace = {
    "www.": '',
    "https://": '',
    "http://": '',
  }
  // loop through them to replace
  for(key in replace) {
    url = url.replace(key, replace[key])
  }
  // split by "." so the ending is separate, return first item in array which will be the name
  return url.split('.')[0]
}
