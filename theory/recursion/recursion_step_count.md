# The idea
Every time your function calls itself, that represents one step.
So **instead of explicitly passing a steps variable around**, 
you can count steps __implicitly__ by adding `1` each time the function recurses.

## Example
Imagine a function that counts how many times it takes 
to reduce a number to 1 by dividing by 2:

```js
function divideUntilOne(n) {
  if (n === 1) return 0;        
  return 1 + divideUntilOne(n / 2);
}
```
Here’s what happens if you call &nbsp; `divideUntilOne(8)`:

| Call              | n                                       | 
| ----------------- | --------------------------------------- |
| divideUntilOne(8) | not 1 → returns `1 + divideUntilOne(4)` |    
| divideUntilOne(4) | not 1 → returns `1 + divideUntilOne(2)` |
| divideUntilOne(2) | not 1 → returns `1 + divideUntilOne(1)` |
| divideUntilOne(1) | base case → returns `0`                 |

So the result is `3` — meaning it took 3 steps to reach 1.