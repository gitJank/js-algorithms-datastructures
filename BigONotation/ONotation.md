## Big O Notation

1. O(1) - number of operations is constant
2. O(n) - number of operations scale with n
3. 0(n^2) - number of operations scale quadraticly with n

### Simplify

1. Constants dont matter
  - O(2n) = O(n)
  - O(500) = O(1)
  - O(13n^2) = O(n^2)

2. Smaller Terms Don't Matter
  - O(n + 10) = O(n)
  - O(1000n + 50) = O(n)
  - O(n^2 + 5n + 8) = O(n^2)

### Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant 
3. Accessing elements in an array is constant
4. In a loop, the complexity is the lenght of the loop times the complexity of what ever is in the loop

### Space Complexity 
#### The amout of memory a function uses

1. Most privitives(bool, num, undef, null) are constant space
2. Strings require O(n) space where n is the length of the string
3. Ref types are generaly O(n) where n is the arrary length or the num of object keys

