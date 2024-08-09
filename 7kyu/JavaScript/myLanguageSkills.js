// PREP
// P: object of languages and test results
// R: array of lang score >= 60 in desc. order of scores
function myLanguages(results) {
    let res = [];
    // turn object in to array of keys and values
    results = Object.entries(results)
    // loop through array
    results.forEach(lang => {
      // if language >= 60 add to result array
      if(lang[1] >= 60) {
        res.push(lang)
      }
    })
   // sort to results by score,then map to only the language
    return res.sort((a, b) => b[1] - a[1]).map(e => e[0]);
}

const obj = {"Java": 10, "Ruby": 80, "Python": 65}
myLanguages(obj) // ['Ruby', 'Python']
myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}) // []
myLanguages({ "Kotlin": 15, "Groovy": 12, "PowerShell": 90, "Haskell": 77 }) // [ 'PowerShell', 'Haskell' ]