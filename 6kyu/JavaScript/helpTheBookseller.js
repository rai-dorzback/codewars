/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

Task
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

Example
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
Explanation:

category A: 20 books (ABART)
category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
category C: 50 books (CDXEF)
category W: 0 books
*/

// arr of stocklist, arr of categories -> string with counts of how many books are in each category

// SOLUTION 1
function stockList(books, categories) {
    // if either category is empty, return empty string
    if(books.length === 0 || categories.length === 0){
        return '';
    };
    // create object of category letters and counts
    let map = {};
    // categories - loop to fill obj
    for(const category of categories) {
        map[category] = 0;
    };
    // books - loop
    for(const book of books) {
        let [code, count] = book.split(' ');
        // if the category is in the map and is a number (if we just check if its there, we get falsy because the value is 0)
        if(typeof map[code[0]] === 'number') {
            // add count to category
            map[code[0]] += Number(count); 
        }
    };
    let result = [];
    // obj - loop
    for(const key in map) {
        // create string result
        result.push(`(${key} : ${map[key]})`)
    }
    // return result
    return result.join(' - ');
};

console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])); // '(A: 20) - (B: 114) - (C: 50) - (W: 0)'
console.log(stockList(['CGYD 10', 'DYRE 92', 'ADEF 81'], ['C', 'D'])); // '(C: 10) - (D: 92)'

// SOLUTION 2: cut down on one for loop, use map instead
function stockList2(books, categories) {
    if(books.length === 0 || categories.length === 0){
        return '';
    };
    let map = {};

    for(const book of books) {
        const [code, count] = book.split(' ');
        const category = code[0];
        map[category] = map[category] || 0;
        map[category] += Number(count); 
    };

    const result = categories.map(category => {
        return `(${category} : ${map[category] || 0})`
    });
    
    return result.join(' - ');
};