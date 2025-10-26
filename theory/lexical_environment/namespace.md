# What is a Namespace?

In JS, a namespace is usually just an object (or class) that holds 
a group of related functions or properties under a single name.

You can think of it like a folder 📁 containing files, so your 
global scope doesn’t get cluttered with dozens of unrelated variables.

It's a container for related code — usually functions, variables, 
or constants — that helps you organize code and avoid name collisions in JS.

### Without a namespace:
```js
function showSequence(count) { /*...*/ }
function showReverse(count) { /*...*/ }
function showEven(count) { /*...*/ }
```

These are all declared in the global scope, which is bad in larger apps because:

- You might accidentally overwrite a function (showSequence)
- It’s hard to know which functions are related


### With a namespace (Object or Class):

```js
// Instead, wrap them in a single object or class:

const SequenceUtils = {
  showSequence(count) { /*...*/ },
  showReverse(count) { /*...*/ },
  showEven(count) { /*...*/ }
};

// OR using class with static methods
class SequenceUtils {
  static showSequence(count) { /*...*/ }
  static showReverse(count) { /*...*/ }
  static showEven(count) { /*...*/ }
}
```

Now you call them like:
```js
SequenceUtils.showSequence(5);
```
**This keeps your code organized, readable, and safer.**