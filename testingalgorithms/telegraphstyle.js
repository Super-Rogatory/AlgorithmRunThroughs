function telegraph_style_string(s){
    let space_count = 0;
    let s_prime = '';
    for (i in s) {
        // Converts lower-case letters to upper-case letters
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            space_count = 0;
            s_prime += s[i].toUpperCase(); 
        }
        // Converts punctuation characters to periods 
        else if(s.charCodeAt(i) === 33 || s.charCodeAt(i) === 59 || s.charCodeAt(i) === 63){
            space_count = 0; 
            s_prime += '.';
        }
        // If character is an uppercase letter, or digit, or space, or period. Keep
        // Check Digit
        else if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
            space_count = 0;
            s_prime += s[i];
        }
        // Check Upper
        else if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            space_count = 0;
            s_prime += s[i];
        }
        // Check Period
        else if(s.charCodeAt(i) === 46){
            space_count = 0;
            s_prime += s[i];
        }
        // If there is more than a single space in a row, delete it.
        else if(s.charCodeAt(i) === 32 && space_count < 1){
            space_count++;
            s_prime += ' ';
        }
    }
    // END THE STRING WITH 'STOP.'
    // presumed edge case of 'stop.'
    if(s_prime.length >= 5){
        if(s_prime.slice(s_prime.length - 5, s_prime.length).toLowerCase() === 'stop.') return s_prime;
    }
    return s_prime + 'STOP.';
}

console.log(telegraph_style_string("stop."));