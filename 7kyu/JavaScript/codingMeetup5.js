// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
    let counts = {};
    for(const dev of list) {
      const lang = dev.language;
      counts[lang] ? counts[lang]++ : counts[lang] = 1;
    }
    return counts;
};