// class Heap {
//     constructor() {
//         this.heap = []
//     }
//
//     getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1
//     getRightChildIndex = (parentIndex) => parentIndex * 2 + 2
//     getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2)
//     peek = () => this.heap[0]
//
//     insert = (key, value) => { // 우선순위를 비교하기 위해서 key, value 로 받는다.
//         const node = {key, value} // 객체로 node 를 만들고
//         this.heap.push(node) // push 한다.
//         this.heapifyUp() // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
//     }
//
//     heapifyUp = () => {
//       let index = this.heap.length - 1 // 계속해서 변하는 index 값
//       const lastInsertedNode = this.heap[index]
//
//       while (index > 0) {
//           const parentIndex = this.getParentIndex(index)
//           if (this.heap[parentIndex].key <= lastInsertedNode.key) {
//               this.heap[index] = this.heap[parentIndex]
//               index = parentIndex
//           } else break
//       }
//
//       this.heap[index] = lastInsertedNode
//     }
//     remove = () => {
//         const count = this.heap.length
//         const rootNode = this.heap[0]
//
//         if (count <= 0) return undefined
//         if (count === 1) this.heap = []
//         else {
//           this.heap[0] = this.heap.pop()
//           this.heapifyDown()
//         }
//         return rootNode
//     }
//
//     heapifyDown = () => {
//         let index = 0
//         const count = this.heap.length
//         const rootNode = this.heap[index]
//
//         while (this.getLeftChildIndex(index) < count) {
//             const leftChildIndex = this.getLeftChildIndex(index)
//             const rightChildIndex = this.getRightChildIndex(index)
//
//             const smallerChildIndex =
//                 rightChildIndex < count && this.heap[rightChildIndex].key > this.heap[leftChildIndex].key
//                     ? rightChildIndex
//                     : leftChildIndex
//
//             if (this.heap[smallerChildIndex].key > rootNode.key) {
//                 this.heap[index] = this.heap[smallerChildIndex]
//                 index = smallerChildIndex
//             } else break
//         }
//
//         this.heap[index] = rootNode
//     }
// }
//
// class PriorityQueue extends Heap {
//   constructor() {
//     super()
//   }
//
//   enqueue = (priority, value) => this.insert(priority, value)
//   dequeue = () => this.remove()
//   isEmpty = () => this.heap.length <= 0
// }
//
// function solution(priorities, location) {
//     let answer = 1;
//
//     let pq = new PriorityQueue()
//
//     index = 0
//     for ( const prop of priorities ) {
//         pq.enqueue(prop, index)
//         index += 1
//     }
//
//     while ( !pq.isEmpty() ) {
//         current = pq.dequeue();
//         console.log(current)
//         if (current === location) {
//             break
//         }
//
//         answer += 1;
//     }
//
//     // console.log(answer);
//     return answer;
// }

// function solution(priorities, location) {
//     let answer = 1;
//
//
//     while (priorities.length > 0 ) {
//         cur = priorities.shift()
//
//     }
//
//     // console.log(answer);
//     return answer;
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}


function solution(priorities, location) {
    const queue = new Queue();

    index = 0
    for ( const prop of priorities) {
        queue.enqueue( [ prop, index ] );
        index += 1;
    }

    priorities.sort((a, b) => b - a);

    let answer = 1;

    while (!!queue.head) {
        curNode = queue.dequeue()

        if (priorities.indexOf(curNode[0]) !== 0)
        {
            queue.enqueue(curNode)
        } else {

            if (curNode[1] === location) {
                break;
            }

            priorities.shift()
            answer += 1;

        }
    }

    console.log(answer);
    return answer;
}


solution([2, 1, 3, 2], 2)	// 1
solution([1, 1, 9, 1, 1, 1], 0)	// 5