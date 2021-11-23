export class BinaryIndexedTree {
  private nums: Array<number>;

  private originArray:Array<number>;

  constructor(nums: Array<number>) {
    this.nums = new Array(nums.length + 1).fill(0);
    this.originArray = [...nums];
    for (let i = 0; i < this.length - 1; i++) {
      this.update(1 + i, nums[i]);
    }
  }

  private get numLength(): number {
    return this.nums.length;
  }


  /**
   *
   *返回修改后的数组
   * @return {*}  {Array<number>}
   * @memberof BinaryIndexedTree
   */
  public getOriginArray(): Array<number>{
      return [...this.originArray]
  }

  get length():number {
    return this.nums.length;
  }
  /**
   *获取二进制索引最后一位1的值
   * @private
   * @param {number} index
   * @return {*}  {number}
   * @memberof BinaryIndexedTree
   */
  private lowBit(index: number): number {
    return index & -index;
  }

  /**
   *更新数组值
   * @param {number} index
   * @param {number} num
   * @memberof BinaryIndexedTree
   */
  public update(index: number, num: number): void {
    for (
      let position = index;
      position < this.numLength;
      position += this.lowBit(position)
    ) {
      this.nums[position] += num;
    }
    this.originArray[index] += num
  }

  /**
   *查询前n个数的和
   *
   * @param {number} index
   * @return {*}  {number}
   * @memberof BinaryIndexedTree
   */
  public query(index: number): number {
    let res = 0;
    for (
      let position = index;
      position;
      position -= this.lowBit(position)
    ) {
      res += this.nums[position];
    }
    return res;
  }

  /**
   *获取闭区间和
   *
   * @param {number} left
   * @param {number} right
   * @return {*}  {number}
   * @memberof BinaryIndexedTree
   */
  public querySection(left: number, right: number): number {
    return this.query(right + 1) - this.query(left);
  }
}
