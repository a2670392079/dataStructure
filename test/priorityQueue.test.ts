import  PriorityQueue from '../core/PriorityQueue'

describe("test PriorityQueue `enQueue` `deQueue` `from` and `frist`", () => {
  const priorityQueue = new PriorityQueue();
  test("`enQueue` 2 3 4 6 1,`frist` return 6", () => {
    priorityQueue.enQueue(2);
    priorityQueue.enQueue(3);
    priorityQueue.enQueue(4);
    priorityQueue.enQueue(6);
    priorityQueue.enQueue(1);
    expect(priorityQueue.frist()).toBe(6);
  });
  test("`deQueue`, return 6 4", () => {
    expect(priorityQueue.deQueue()).toBe(6);
    expect(priorityQueue.deQueue()).toBe(4);
  });
  test("`from` [1,2,3,1,5,7,1,8,90,-2,0,41], `frist` return 90", () => {
    expect(
      PriorityQueue.from([1, 2, 3, 1, 5, 7, 1, 8, 90, -2, 0, 41]).frist()
    ).toBe(90);
  });
});

