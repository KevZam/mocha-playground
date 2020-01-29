const expect = require("chai").expect;
const divide = require("../index");

// describe("Divide function", () => {
//   it("should divide positive integers correctly", () => {
//     expect(divide(8, 4)).to.equal(2);
//   });

//   it("should throw an error when divide by zero", () => {
//     expect(() => {
//       divide(8, 0);
//     }).to.throw();
//   });
// });

describe("sort function", () => {
  it("should return an array in ascending order", () => {
    expect(() => {
      sort([5, 4, 3, 2, 1]);
    }).to.deep.equal([1, 2, 3, 4, 5]);
  });
  it("first number should not be greater than second", () => {
    expect(() => {
      let arr1 = [5, 4, 3, 2, 1];
      let sortedNums = sort(arr1);
    });
  });
});
