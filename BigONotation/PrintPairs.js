
//O(n^2)
//Because of the nesting
function printAllPairs(n) {
    //O(n)
    for (var i = 0; i < n; i++) {
        //O(n)
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

printAllPairs(100)