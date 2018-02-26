Find the number of ways that a given integer, X , can be expressed as the sum of the (N)th power of unique, natural numbers.

### Input Format

The first line contains an integer X. 
The second line contains an integer N.

### Constraints


### Output Format

Output a single integer, the answer to the problem explained above.

### Sample Input 0
```
10
2
```
### Sample Output 0
```
1
```

### Explanation 0

If x = 10 and  N = 2, we need to find the number of ways that 10 can be represented as the sum of squares of unique numbers.
10 = 1**2 + 3**2

This is the only way in which  can be expressed as the sum of unique squares.

### Sample Input 1

```
100
2
```

### Sample Output 1
```
3
```

### Explanation 1
100 = 10**2 = 6 ** 2 + 8 ** 2 = 1 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2 + 7 ** 2

### Sample Input 2

```
100
3
```

### Sample Output 2

```
1
```

Explanation 2

100 can be expressed as the sum of the cubes of 1, 2, 3, 4. 
(1 + 8 + 27 + 64 = 100). There is no other way to express  as the sum of cubes.