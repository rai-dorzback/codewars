// ORIGINAL CODE TO DEBUG
function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}

// METHOD 1
function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`;
    } else {
         return "Your plant has had more than enough water for today!";
    };
};

// METHOD 2
const rainAmount = mm => mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!";

// METHOD 3
function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`;
    }
  // don't use else, just make this the default
    return "Your plant has had more than enough water for today!";
};
