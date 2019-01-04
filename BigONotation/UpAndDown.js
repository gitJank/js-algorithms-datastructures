
//O(n)
function countUpAndDown(n) {
    console.log("Going up")
    //O(n)
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At top, going down");
    //O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("At bottom. Done");
}

countUpAndDown(10);