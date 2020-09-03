const analyze = require('./arrayAverage')
const testArr = [1,8,3,4,2,6];

test('Return an obj that contains correct: avg, minmax, length', () => {
expect(analyze(testArr)).toStrictEqual({
  average: 4,
  min: 1,
  max: 8,
  length: 6
})
})