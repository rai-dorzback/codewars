/*
Safer User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

/* METHOD 1: using switch statement */
function htmlspecialchars(formData) {
  let newString = ''
  // loop through each character in formData
  for(let char of formData) {
    switch(char) {
      case '<':
        newString += '&lt;'
        break
      case '>':
        newString += '&gt;'
        break
      case '"':
        newString += '&quot;'
        break
      case '&':
        newString += '&amp;'
        break
      default:
        newString += char
        break
    }
  }
  return newString
}

htmlspecialchars('<p>cookies & cream </p>')

/* METHOD 2: Using Regex and a dictionary */
function htmlspecialchars(formData) {
  // dictionary of characters and their encodings
  const dict = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
  };
  
  // replace each character with the dictionary value that goes with that character's key
  return formData.replace(/[<>"&]/g, char => dict[char])}

htmlspecialchars('<p>cookies & cream </p>')
