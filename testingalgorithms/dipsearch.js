function dip_search(V){
    let last_dip = 0; // position of the last dip in V. Sequential Optimization
    // we need a check for when the list is too short, and cannot check n + 2 (3)
    if(V.length < 3) return last_dip;
    for(let i = 0; i < V.length - 2; i++){
        if(V[i] === V[i + 2] && V[i + 1] < V[i]){
            last_dip = i; // give last_dip the value of i, our index.
        }
    }
    return last_dip;
}
console.log(dip_search([5,2,5]));