## Return step count until get palindrome number

```js
//solution without recursion

function palindromeChainLength(n) {
  let reversedNum = +n.toString().split('').reverse().join('');
  let steps = 0;
  
  while (n !== reversedNum) {
    n += reversedNum;
    reversedNum = +n.toString().split('').reverse().join('');
    steps++;
  }
  
  return steps;
}

//recursion

function palindromeChainLength(n) {
  let reversedNum = +n.toString().split('').reverse().join('');  
  return (n == reversedNum)? 0: 1 + palindromeChainLength(n += reversedNum);
}

palindromeChainLength(87); //4
```

You can handle the step count by either:

1. Adding an extra parameter (like steps = 0)
2. Returning `1 +` the recursive call result.