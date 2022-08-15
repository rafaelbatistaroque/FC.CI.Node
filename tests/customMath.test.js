const sum = require("../src/customMath");

test('Garantir soma de dois números inteiros', () => {
    expect(sum(2, 2)).toBe(4);
});