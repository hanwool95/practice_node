
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = []
    }
}

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


function solution(n, edge) {

    nodeArray = Array.from(new Array(n), (_, value) => new ListNode(value + 1))

    edge
        .forEach(([startPoint, EndPoint]) => {
            nodeArray[startPoint-1].next.push(nodeArray[EndPoint-1]);
            nodeArray[EndPoint-1].next.push(nodeArray[startPoint-1]);
        })

    lengthList = Array.from(new Array(n), (value) => 0)
    queue = new Queue()

    queue.enqueue([0, nodeArray[0]])

    let curMax = 0;
    let answer = 1;

    while (!!queue.head) {
        const value = queue.dequeue();
        const depth = value[0];

        if (depth > curMax) {
            curMax = depth;
            answer = 1;
        }
        else {
            answer += 1;
        }

        const node = value[1];
        const routes = node.next

        routes
            .forEach((route) => {
                index = route.value - 1
                if (index !== 0 && lengthList[index] === 0){
                    queue.enqueue([depth+1, nodeArray[index]])
                    lengthList[index] = depth + 1
                }

            })
    }


    return answer;
}


solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]) // 3



function solution(n, edge) {
    const graph = Array.from(array(n + 1), () => []);

    for (const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    const queue = [1];
    while (queue.length > 0) {
        const src = queue.shift();
        for (const dest of graph[src]) {
            if (distance[dest] === 0) {
                queue.push(dest);
                distance[dest] = distance[src] + 1
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter(item => item === max).length;

}