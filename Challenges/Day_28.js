/*
## Challenge 28
Description:  
Create a proxy object that intercepts and logs all property access.  

Solution Approach:  
Use the Proxy object to create a wrapper around another object.  
*/

const createLoggingProxy = (target) => {
  return new Proxy(target, {
    get: (obj, prop) => {
      console.log(`Accessing property: ${prop}`);
      return obj[prop];
    },
  });
};

// Example usage:
const myObject = { name: "John", age: 25 };
const loggedObject = createLoggingProxy(myObject);

console.log(loggedObject.name); // Accessing property: name
console.log(loggedObject.age);  // Accessing property: age
