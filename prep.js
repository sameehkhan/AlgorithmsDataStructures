function twoNumberSum(array, targetSum) {
    // Write your code here.
    // 	iterate over array, if target sum - curr num
    let sums = new Set;
    let twos = [];
    let tar = 0;

    for (let i = 0; i < array.length; i++) {
        tar = targetSum - array[i];
        if (sums.has(tar)) {
            tar > array[i] ? twos.push(array[i], tar) : twos.push(tar, array[i]);
        }
        sums.add(array[i]);
    }
    return twos;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;



function recSum(nums) {
    if (nums.length < 1) return 0;

    return nums[0] + recSum(nums.slice(1))
}

// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

function primeFactorization(num) {
    if (num === 2) return [2];

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            let factors = [i].concat(primeFactorization(num / i))
            return factors;
        }
    }
    return [num]; 
}

Array.prototype.quickSort = function (comparator) {
    if (this.length < 2) return this;

    if (!comparator) {
        comparator = (x, y) => {
            if (x < y) return -1;
            return 1;
        }
    }
    const pivot = this[0];
    let left = this.slice(1).filter((el) => comparator(el, pivot) === -1)
    let right = this.slice(1).filter((el) => comparator(el, pivot) != -1)
    left = left.quickSort(comparator)
    right = right.quickSort(comparator);
    return left.concat([pivot]).concat(right);
};

Array.prototype.bubbleSort = function (func) {
    let newArr = this.slice();
    let sorted = false;

    if (!func) {
        func = (x, y) => {
            return x <= y ? -1 : 1;
        }
    }

    while (!sorted) {
        sorted = true
        for (let i = 0; i < newArr.length - 1; i++) {
            if (func(newArr[i], newArr[i + 1]) === 1) {
                sorted = false;
                let current = newArr[i], next = newArr[i + 1]
                newArr[i] = next, newArr[i + 1] = current;
            }
        }
    }
    return newArr;
};

// ClosestValueInBst
function findClosestValueInBst(tree, target) {
    let closest = tree.value
    return bstHelper(tree, target, closest);
}

function bstHelper(tree, target, closest) {
    while (tree != null) {
        if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
            closest = tree.value;
        }
        if (target < tree.value) {
            tree = tree.left;
        } else if (target > tree.value) {
            tree = tree.right
        } else {
            return closest;
        }
   
    }
     
    return closest;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

Array.prototype.myReverse = function () {
    for (let i = 0; i < this.length; i++) {
        this.push(this.shift(0));
    }
    return this;
}

Array.prototype.myJoin = function (separator = '') {
    let str = "";
    debugger
    this.forEach((el, idx) => {
        str += `${el}`;
        if (idx < this.length - 1) str += separator;
    });
    return str;
}

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        // Write your code here.
        array.push(this.name)
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].depthFirstSearch(array)
        }
        return array;
    }
}

// Do not edit the line below.
exports.Node = Node;

// Feel free to add new properties and methods to the class.
// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.insertBefore(this.head, node)
    }

    setTail(node) {
        if (this.tail == null) {
            this.setHead(node)
        }
        this.insertAfter(this.tail, node)
    }

    insertBefore(node, nodeToInsert) {
        if (nodeToInsert == this.head && nodeToInsert == this.tail) return;
        this.remove(nodeToInsert);

        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;

        if (node.prev == null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
            node.prev = nodeToInsert;
        }


    }

    insertAfter(node, nodeToInsert) {
        if (nodeToInsert == this.head && nodeToInsert == this.tail) return;
        this.remove(nodeToInsert);

        nodeToInsert.next = node.next;
        nodeToInsert.prev = node;
        if (node.next == null) {
            this.tail = nodeToInsert;
        } else {
            node.next = nodeToInsert;
            node.next.prev = nodeToInsert;
        }

    }

    insertAtPosition(position, nodeToInsert) {
        // Start at head, iterate while keeping track of position
        // once, position is reached, grab node at that position then 
        // insertBefore( nodeAtPosition, nodeToInsert)
        let current = 1;
        let node = this.head;

        while (node != null) {
            if (current == position) {
                this.insertBefore(node, nodeToInsert)
            }
            current += 1;
            node = node.next;
        }
        this.insertAfter(this.tail, nodeToInsert)

    }

    removeNodesWithValue(value) {
        //  if (containsNodeWithValue(value)), then remove(node)
        let node = this.head;

        while (node != null) {
            const pointer = node;
            node = node.next;

            if (pointer.value == value) {
                remove(pointer)
            }
        }
    }

    remove(node) {
        // Set its prev to its next, and next.prev to its prev, then set 
        // its next and prev to null
        // Check if head or tail

        if (node === this.head) {
            this.head = this.head.next
        }
        if (node === this.tail) {
            this.tail = this.tail.prev
        }

        this.removeNode(node)

    }

    removeNode(node) {
        if (node.next != null) {
            node.next.prev = node.prev;
        }

        if (node.prev != null) {
            node.prev.next = node.next;
        }

        node.prev = null;
        node.next = null;
    }

    containsNodeWithValue(value) {
        // Write your code here.
        // Iterate over linked list, check for specific value, start
        // with head
        let node = this.head;
        while (node != null) {
            if (node.value === value) {
                return true
            } else {
                node = node.next;
            }
        }

        return false;

    }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;


// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;
