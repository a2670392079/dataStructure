export default class PriorityQueue {
  private heap: Array<number>;

  constructor() {
    this.heap = new Array();
  }

  public static from(nums: Array<number>) {
      const priorityQueue = new PriorityQueue();
      for(let i = 0; i < nums.length; i++){
          priorityQueue.enQueue(nums[i]);
          priorityQueue.up(i)
      }
      return priorityQueue
  }

  public enQueue(num: number) {
    this.heap.push(num);
    this.up(this.heap.length - 1);
  }

  public deQueue() {
    const end = this.heap.shift();
    if (this.heap.length) {
      this.heap.unshift(this.heap.pop() as number);
      this.down(0, (this.heap.length - 2) >> 1);
    }
    return end;
  }

  public frist(): number {
    return this.heap[0];
  }

  private down(index: number, last_no_leaf_root_index: number) {
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

  private up(index: number) {
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
