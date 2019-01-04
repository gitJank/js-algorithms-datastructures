
//5n + 2 operations/~1.2 seconds
//the number of operations scale with n
//O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

addUpTo(1000000000);
console.log('Complete')