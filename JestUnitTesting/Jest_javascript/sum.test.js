// const sum = require('./sum');
// test("add 1 + 2 = 3", ()=>{
//     expect(sum(1,2)).toBe(3) //toBe is for number, string,boolean
// });

//Matchers : toBe,toEqual,toBeFalsy

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

//toEqual

// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// toBeFalsy

// test('null is falsy', ()=>{
//     const n = null;
//     expect(n).toBeFalsy();
// });

//toBeTruthy

test("one is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});
