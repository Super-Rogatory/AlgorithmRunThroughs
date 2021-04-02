const range = (start, end) => {
    const length = end - start;
    return Array.from({length}, (_, i) => start + i);
}
function longest_balanced_span(V){
    let best = [];
    let sum_elem_in_V;
    for(let s = 0; s < V.length; s++) {
        sum_elem_in_V = V[s]; //always start with [s, n)
        for(let e = s + 1; e <= V.length; e++) {
            //console.log(range(s,e)); // to accurately guage s to e. [inclusive]
            //console.log(`${V[s]} , ${V[e - 1]}`);
            //console.log(sum_elem_in_V);
            // test to V[0] first while e is equal to 1, next iteration tests V[0] + V[1] while e is equal to 2
            if(sum_elem_in_V === 0) {
                // greater than or equal to so in the event of a tie we can return the later span.
                if(best.length === 0 || range(s,e).length >= best.length) {
                    // best = [s, e) is a range
                    best[0] = range(s, e);
                }
            }
            sum_elem_in_V += V[e]; // that's gonna add V[0]
        }
    }
    return best[0];   
}

console.log(longest_balanced_span([3,-1,1,6,2,-3,1,2]));
