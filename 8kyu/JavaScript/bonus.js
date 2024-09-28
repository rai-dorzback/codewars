/*
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

// solution 1
function bonusTime(salary, bonus) {
  if(bonus) {
    return `\u00A3${salary*10}`
  }
  return `\u00A3${salary}`
}

// solution 2: arrow function version with ternary
const bonusTime = (salary, bonus) => bonus ? `\u00A3${salary*10}` : `\u00A3${salary}`;
