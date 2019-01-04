## Array and Object Performance

### Big O of Objects 

#### Operations

1. Insertion - O(1)
2. Removal - O(1)
3. Searching - O(n)
4. Access - O(1)

#### Methods

1. Object.keys - O(n)
2. Object.values - O(n)
3. Object.entries - O(n)
4. hasOwnProperty - O(1)

When you don't need any ordering,
objects are an excellent choice!

### Big O of Arrays

#### Operations

1. Insertion - at end: O(1), at start: O(n) 
2. Removal - at end: O(1), at start: O(n)
3. Searching - O(n)
4. Access - O(1)

#### Methods

1. push - O(1)
2. pop - O(1)
3. shift - O(n)
4. unshift - O(n)
5. concat - O(n)
6. slice - O(n)
7. splice - O(n)
8. sort - O(nlog n) Wow!
9. forEach/map/filter/reduce/etc. - O(n)

Arrays are great if you need ordered data




