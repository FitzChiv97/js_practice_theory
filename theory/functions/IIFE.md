# Immediately Invoked Function Expression

You're looking at a self-invoking anonymous function 
(also called an IIFE — Immediately Invoked Function Expression) 
that's assigned to a variable. 
This pattern is common in JS, especially in older code before the 
introduction of ES6 modules or block-scoped variables (let, const).

```js
let SequenceNum = function() {
  function SequenceNum() {};
  
  SequenceNum.showSequence = function(count) {
    // logic...
  }
  
  return SequenceNum;
}();
```

Let’s break it down step by step:

### 1. The outer function
This is an anonymous function (no name), defined and immediately invoked.
The `()` at the end calls the function right away after defining it.
The return value of that function is assigned to the variable `SequenceNum`.

So:
`SequenceNum` becomes whatever the function returns 
— which is _another_ function with an added static method.

### 2. Inner function and static method

`function SequenceNum() {}` is a **NFD** inside the outer anonymous function.
Think of it as a constructor or a plain function — 
but it's **local** to the outer scope.

Then we're adding a static method `showSequence` to the `SequenceNum` function.

### 3. Returning the inner function

The **IIFE** returns the inner `SequenceNum` function 
— now with a static method `showSequence` attached.

So `SequenceNum` (outside the IIFE) refers to this returned function.
You can now call:

```js
SequenceNum.showSequence(5); // "0+1+2+3+4 = 10"
```

## Why use this pattern?
This pattern does a few things:

1. Encapsulation: The outer function creates a private scope,
isolating variables (like the inner function declaration).

2. Modularization: It allows you to set up and return only 
what's needed (in this case, a function with a static method).

3. Static-like behavior: Since you're adding showSequence as a 
property to a function, it's like a static method on a class.

4. Avoid polluting global scope (older best practice before modules).

## Summary:

```js
let SequenceNum = function() { ... }();
```

...is an IIFE that returns a function `SequenceNum` with a static method 
`showSequence`, which is then assigned to the variable `SequenceNum`
— creating a kind of **"namespace" or utility object with static functionality**.

### Here's how you'd write that using an ES6 class:

```js
class SequenceNum {
  static showSequence(count) {
	//logic...
  }
}
```
This class is just used as a static utility holder — like a **namespace**. 
You're not expected to create instances of `SequenceNum`, so you don't 
need a `constructor()` or `new SequenceNum()`.


