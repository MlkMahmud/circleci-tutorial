const math = require('./math');

describe('Add', () => {
  it('should return the sum of two numbers', () => {
    expect(math.add(1, 2)).toEqual(3);
    expect(math.add(3, 5)).toEqual(8);
    expect(math.add(6, 6)).toEqual(12);
  })
});


describe('Sub', () => {
  it('should return the difference between two numbers', () => {
    expect(math.sub(5, 1)).toEqual(4);
    expect(math.sub(6, 3)).toEqual(3);
    expect(math.sub(10, 4)).toEqual(6);
  })
});