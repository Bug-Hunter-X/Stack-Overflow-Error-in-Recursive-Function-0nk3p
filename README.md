# Stack Overflow in Recursive JavaScript Function

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The `foo` function, as implemented in `bug.js`, recursively calls itself without a proper base case for large inputs, leading to excessive function calls and eventual stack overflow.  The solution, provided in `bugSolution.js`, addresses this by adding a check to avoid extremely deep recursion and handle larger inputs more gracefully. This example highlights the importance of carefully designing base cases in recursive functions to prevent stack overflow errors.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the `foo` function with a relatively large positive integer as the first argument.  For instance, `foo(1000, 0)` is likely to cause a stack overflow. 
3. Observe the resulting error message which indicates a stack overflow. 
4. Run `bugSolution.js` with the same large argument. This version will successfully compute a result by utilizing a more effective approach to handle potential stack overflow situations. 