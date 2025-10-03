const square = require("./square");

describe("Reshenie uravnen", () => {
  it("disc >0", () => {
    result = [4, -1];
    expect(square(1, -3, -4)).toEqual(result);
  });
  it("disc = 0", () => {
    expect(square(9, 6, 1)).toEqual(-27);
  });
  it("disc < 0", () => {
    expect(square(9, 6, 2)).toEqual("no korni");
  });
});

describe("Reshenie uravnen", () => {
  it.each([
    [1, -3, -4, [4, -1]],
    [9, 6, 1, -27],
    [9, 6, 2, "no korni"],
  ])("peremenn znach %p  poluchen znach %p",(a,b,c,result)=>{
    expect(square(a,b,c)).toEqual(result)
  });
});

describe("Reshenie uravnen", () => {
  it.each`
    a    | b     | c     | result
    ${1} | ${-3} | ${-4} | ${[4, -1]}
    ${9} | ${6}  | ${1}  | ${-27}
    ${9} | ${6}  | ${2}  | ${"no korni"}
  `(`peremenn znach $a, $b, $c,  poluchen znach $result`,
    ({ a, b, c, result }) => {
      expect(square(a, b, c)).toEqual(result);
    });
});
