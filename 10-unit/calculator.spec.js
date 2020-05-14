const { sum, mul } = require('./calculator');

describe('calculator positive', () => {
    it('sum should return number', () => {
        // assume
        const expected = 3;
        // arrange
        const result = sum(1, 2);
        // assert
        expect(expected).toBe(result);
    });
    it('sum should join strings', () => {
        // assume
        const expected = 'ab';
        // arrange
        const result = sum('a', 'b');
        // assert
        expect(expected).toBe(result);
    });
});

describe('calculator negative', () => {
    it('multiply should not work with strings', () => {
        // arrange
        const spy = jasmine.createSpy('mul', mul)
        // arrange
        const result = spy('a', 'b');
        // assert
        expect(result).toBeUndefined();
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });
    
});
