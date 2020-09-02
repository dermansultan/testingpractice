const capitalize = require('./capitalize');

test('First char of string to be capitalized' , () => {
    expect(capitalize('string')).toBe('String')
});