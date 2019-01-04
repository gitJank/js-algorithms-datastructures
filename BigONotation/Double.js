//an item is pushed to the new array n times/ O(n) space

function double(arr) { 
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[1]);
    }
    return newArr;
}