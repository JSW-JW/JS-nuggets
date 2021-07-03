/* source origin: https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda */

/*  
1. What is Closure?
A closure is a function that has access to its outer function scope
even after the outer function has returned. This means a closure
can remember and access variables and arguments of its outer function
even after the function has finished.
*/


/* 
2. How Closures work?

// keywords: execution context + lexical environment 

A lexical environment is a data structure that holds identifier-variable mapping.
(here identifier refers to the name of variables/functions, and the variable 
is the reference to actual object [including function type object] or primitive value).
A Lexical Environment has two components:
 (1) the environment record and 
 (2) a reference to the outer environment.
The environment record is the actual place where the variable and function declarations are stored.
The reference to the outer environment means it has access to its outer (parent) lexical environment.
This component is the most important in order to understand how closures work.
A lexical environment conceptually looks like this:

lexicalEnvironment = {
  environmentRecord: {
    <identifier> : <value>,
    <identifier> : <value>
  }
  outer: < Reference to the parent lexical environment>
}

When the JavaScript engine creates a global execution context to execute
global code, it also creates a new lexical environment to store the variables
and functions defined in the global scope. So the lexical environment
for the global scope will look like this:

functionLexicalEnvironment = {
  environmentRecord: {
      b    : 25,
  }
  outer: <globalLexicalEnvironment>
}

Let's see with examples.
*/

// Example 1.

function person() {
    let name = 'Peter';
    
    return function displayName() {
        console.log(name);
    };
}

let peter = person();
peter(); // prints 'Peter'

/* 
When the person function finishes, its execution context is
removed from the stack. But its lexical environment is still
in the memory because its lexical environment is referenced
by the lexical environment of its inner displayName function.
So its variables are still available in the memory.
*/



// Example 2.
function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}

let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2

/*
It's because, at each call of count(), a new scope for the function
is created, but there is only single scope created for getCounter function,
because the counter variable is defined in the scope of getCounter(),
it would get incremented on each count function call instead of resetting to 0. 
*/

// Example 3.

let num = 20;

function getNumber() {
    let num = 10;
    return function() {
        console.log(num);
    }
}

const func = getNumber();
func(); // 10