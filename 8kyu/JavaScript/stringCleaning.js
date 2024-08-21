// solution 1
const stringClean = s => {
    const nums = '0123456789'.split('')
    return s.split('').filter(e => !nums.includes(e)).join('');
  }
  

// solution 2
const stringClean2 = s => {
    let res = ''
    const nums = '0123456789'
    for(let i = 0; i < s.length; i++) {
      if(!nums.includes(s[i])) {
        res += s[i]
      }
    }
    return res
}

stringClean('This looks5 grea8t!')
stringClean('123456789') // ''
stringClean('! !') // ! !