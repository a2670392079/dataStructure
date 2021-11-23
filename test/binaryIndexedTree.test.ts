import { BinaryIndexedTree } from '../core/BinaryIndexedTree';


describe('binaryIndexedTree', () => {
    const testArr = [1,2,3.23,5.14,7,123,23,5,6,9,8]
    const binaryIndexedTree = new BinaryIndexedTree(testArr);
    test('query index 0, 1, 2, 10', () => {
        expect(binaryIndexedTree.query(0)).toBe(0);
        expect(binaryIndexedTree.query(1)).toBe(1);
        expect(binaryIndexedTree.query(2)).toBe(3);
        expect(binaryIndexedTree.query(11)).toBe(testArr.reduce((t,v) => t += v, 0));
        expect(binaryIndexedTree.querySection(1, 4)).toBe(17.37)
    })

    test('update (index 2 add 3, index 6 subtract 27.5)',() => {
        binaryIndexedTree.update(2,3);
        binaryIndexedTree.update(6,27.5);
        expect(binaryIndexedTree.query(3)).toBe(9.23);
        expect(binaryIndexedTree.query(6)).toBe(171.87);
        expect(binaryIndexedTree.querySection(6, 7)).toBe(28);
    })
})