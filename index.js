// TypeError: Cannot convert undefined or null to object in JS

// EXAMPLE 1 - Check if the value of the variable is truthy before calling the method

const obj = undefined;

if (obj) {
  const keys = Object.keys(obj);
} else {
  // 👇️ this runs
  console.log('⛔️ Object is falsy');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the `typeof` operator if the variable might not be declared

// if (typeof obj !== 'undefined' && obj !== null) {
//   const keys = Object.keys(obj);
// } else {
//   // 👇️ this runs
//   console.log('⛔️ Object is falsy');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Solve the error using the logical OR (||) operator

// const obj = undefined;

// const keys = Object.keys(obj || {});
// console.log(keys); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 4 - Make sure you aren't trying to delete a property on `undefined` or `null`

// const obj = null;

// if (typeof obj !== 'undefined' && obj !== null) {
//   delete obj.property;
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Solve the error using the ternary operator

// const obj = undefined;

// const keys = obj ? Object.keys(obj) : [];
// console.log(keys); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 6 - Solve the error by using the nullish coalescing (??) operator

// const obj = undefined;

// const keys = Object.keys(obj ?? {});
// console.log(keys); // 👉️ []
