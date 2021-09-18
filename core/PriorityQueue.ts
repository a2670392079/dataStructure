/*
 * @Author: your name
 * @Date: 2021-09-18 10:55:59
 * @LastEditTime: 2021-09-18 16:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dataStructure\core\PriorityQueue.ts
 */
export default class PriorityQueue {
  private heap: Array<number>;

  constructor() {
    this.heap = new Array();
  }

     
  /**
   * 从数组生成优先队列
   *
   * @static
   * @param {Array<number>} nums
   * @return {*}  {PriorityQueue}
   * @memberof PriorityQueue
   */
  public static from(nums: Array<number>): PriorityQueue {
      const priorityQueue = new PriorityQueue();
      for(let i = 0; i < nums.length; i++){
          priorityQueue.enQueue(nums[i]);
          priorityQueue.up(i)
      }
      return priorityQueue
  }

   
  /**
   * 入队,节点上浮
   *
   * @param {number} num
   * @memberof PriorityQueue
   */
  public enQueue(num: number):void {
    this.heap.push(num);
    this.up(this.heap.length - 1);
  }

    
  /**
   * 出队，节点下沉
   *
   * @return {*}  {number}
   * @memberof PriorityQueue
   */
  public deQueue():number {
    const end = this.heap.shift();
    if (this.heap.length) {
      this.heap.unshift(this.heap.pop() as number);
      this.down(0, (this.heap.length - 2) >> 1);
    }
    return end ?? 0;
  }

   
  /**
   * 返回队列头部
   *
   * @return {*}  {number}
   * @memberof PriorityQueue
   */
  public frist(): number {
    return this.heap[0];
  }

   
  /**
   * 节点下沉方法
   *
   * @private
   * @param {number} index
   * @param {number} last_no_leaf_root_index
   * @memberof PriorityQueue
   */
  private down(index: number, last_no_leaf_root_index: number):void {
    const heap = this.heap;
    if (index < last_no_leaf_root_index) {
      while (index <= last_no_leaf_root_index) {
        const left = heap[(index << 1) + 1];
        const right = heap[(index << 1) + 2] ?? left;
        const max = left >= right ? left : right;
        const maxIndex = left >= right ? (index << 1) + 1 : (index << 1) + 2;
        if (heap[index] < max) {
          [heap[index], heap[maxIndex]] = [heap[maxIndex], heap[index]];
        //   index = (index >> 1) + 1;
        index = maxIndex
        }else{
            return
        }
      }
    }
  }

  /**
   * @private
   * @param {number} index
   * @memberof PriorityQueue
   */
  private up(index: number):void {
    const heap = this.heap;
    while (index !== 0) {
      const root = (index - 1) >> 1;
      if (heap[root] < heap[index]) {
        [heap[root], heap[index]] = [heap[index], heap[root]];
        index = root;
      }else{
          return
      }
    }
  }
}
