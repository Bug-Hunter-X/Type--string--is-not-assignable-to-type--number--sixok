# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error: 'Type 'string' is not assignable to type 'number'.

The `bug.ts` file contains code that attempts to combine a number array with a string array using a function that expects two number arrays. This results in a type error.

The `bugSolution.ts` file shows how to fix this error by either changing the function to accept string arrays or making both input arrays of type number.  This example focuses on the type safety features of TypeScript and how to resolve conflicts that are caught at compile time.