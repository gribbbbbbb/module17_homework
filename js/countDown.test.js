import { countDown } from "./countDown.js"

describe('tests for countDown function', () => {
    it('should return an array of numbers in reverse order', () => {
        expect(countDown(6)).toEqual([6, 5, 4, 3, 2, 1])
    });

    it('should return an empty array when given 0 as input', () => {
        expect(countDown(0)).toEqual([])
    });

    it('should return an empty array when given a negative number as input', () => {
        expect(countDown(-3)).toEqual([])
    });
});