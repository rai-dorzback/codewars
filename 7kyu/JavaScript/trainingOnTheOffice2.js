/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

const departments = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
  }

function boredom(staff){
  let score = 0;
  // loop thru staff
  for(employee in staff) {
    // find which department they're in to use as key
    let dept = staff[employee]
    // use dept to find boredom score and add to final score
    score += departments[dept]
  }
  // evaluate score and give back response
  return score <= 80 ? "kill me now" : score > 100 ? 'party time!!' : 'i can handle this';
};

boredom({tim: 'change', 
         jim: 'accounts',
         randy: 'canteen', 
         sandy: 'change', 
         andy: 'change', 
         katie: 'IS',
         laura: 'change', 
         saajid: 'IS', 
         alex: 'trading', 
         john: 'accounts',
         mr: 'finance'
        }) // kill me now
