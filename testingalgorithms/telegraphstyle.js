function telegraph_style_string(s){
    let space_count = true;
    let s_prime = '';
    for (i in s) {
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) s_prime += s[i].toUpperCase(); //ensures we are concerning lowercase integers only
        else if(s.charCodeAt(i) === 33 || s.charCodeAt(i) === 59 || s.charCodeAt(i) === 63) s_prime += '.';
        else if(s.charCodeAt(i) === 32 && space_count){
            space_count = false;
            s_prime += ' ';
        }
    }

    return s_prime + 'STOP.';
}

console.log(telegraph_style_string("A!B "));