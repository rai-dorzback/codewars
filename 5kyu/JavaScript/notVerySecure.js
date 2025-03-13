function alphanumeric(str){
    let valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // if string is empty, false
    if(str.length < 1) {
        return false;
    };
    // return boolean of if every character is valid
    return str.toLowerCase().split('').every(char => valid.includes(char));
};