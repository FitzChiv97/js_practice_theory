/* spy-decorator, call/apply practice */

/*
creating spy-decorator which returns wrapper that 
saves parameters from all function calls as arrays
in its calls-property
*/

/*
let user = {
  name: 'jon',
  sum(...args) {
    console.log(`my name is ${this.name}`);
    return args.reduce((sum, el) => sum += el);
  },
}

function spy(func) {
  
  function wrapper(...args) {
    if(!wrapper.calls.get(args.join())) {
      wrapper.calls.set(args.join(), args);
    }
    //preventing duplicates in Map collection
    return func.apply(this, args);
  }
  
  wrapper.calls = new Map();
  return wrapper;
}

user.sum = spy(user.sum);

user.sum(1,2);
user.sum(1,2);
user.sum(1,2,3);
user.sum(3,4);

console.log(user.sum.calls);
*/