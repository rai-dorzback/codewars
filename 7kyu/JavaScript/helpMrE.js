/*
Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"
*/

function evenator(str) {
    // array of punctation
    const punctuation = '.,?!_'.split('')
    // filter out any punctuation
    removePunct = str.split('').filter(char => !punctuation.includes(char)).join('')
    
    // make odd words even
    const res = removePunct.split(' ').map(word => {
      // if the word length is odd
      if(word.length % 2 !== 0) {
        // add the last letter to that word again to make it even
        return `${word}${word[word.length-1]}`
      } else {return word}
    }).join(' ')
    // return result
    return res
  }