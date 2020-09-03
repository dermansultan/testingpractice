const analyze = (arr) => {
const avg = arr.reduce((a, b) => a + b) / arr.length;
const min = Math.min(...arr);
const max = Math.max(...arr);
const length = arr.length;

return {
    average: avg,
    min: min,
    max: max,
    length: length
}
}

module.exports = analyze