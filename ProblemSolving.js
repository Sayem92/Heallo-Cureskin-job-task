
// Problem 01
const input = { a: 1, b: 2, c: 3 };
const output = Object.entries(input).map(([key, value]) => ({ [key]: value }));

console.log(output);
// Output = [{ a: 1 }, { b: 2 }, { c: 3 }]




// problem 02
const input2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output2 = input2.reduce((acc, curr) => ({ ...acc, ...curr }), {});

console.log(output2);
// Output = { a: 1, b: 2, c: 3 }



