# 经常遇到的一些数据结构的实现

## usage:
```typescript
import { BinaryIndexedTree } from 'data-structure-ts';

const binaryIndexedTree = new BinaryIndexedTree([1,2,35,1]);
console.log(binaryIndexedTree.querySection(1,2))
// 37
```