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


function titleize(title) {
    const little = ['a', 'and', 'of', 'over', 'the'];
    words = title.split(" ");
    titled = [];

    words.forEach(function (el, i) {
        if (i === 0) {
            titled.push(el.slice(0, 1).toUpperCase() + el.slice(1));
        } else if (little.indexOf(el) >= 0) {
            titled.push(el.toLowerCase());
        } else {
            titled.push(el.slice(0, 1).toUpperCase() + el.slice(1));
        }
    });
    return titled.join(" ");
}

function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    str = str.split("")
    let ciphered = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            ciphered += " "
            i += 1;
        }
        let old_idx = alphabet.indexOf(str[i]);
        let new_idx = (old_idx + shift) % 26
        let letter = alphabet[new_idx]
        ciphered += letter;
    }

    return ciphered;
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


function getNthFib(n) {
    // Write your code here.
    // 0,1,1,2,3,5
    let nums = {}
    // Memoized with object to hold values everytime they come up
    // goes from O(2^n) to O(n) time, O(n) because every second call is O(1) because it is in the hash

    // O(n) space
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n === 3) return 1;

    if (n in nums) {
        return n;
    } else {
        nums[n] = getNthFib(n - 1) + getNthFib(n - 2)
        return nums[n]
    }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

function getNthFib(n) {
    // Write your code here.
    // 0,1,1,2,3,5
    if (n === 1) return 0;
    if (n === 2) return 1;
    let counter = 2;

    const reducer = (acc, val) => acc + val;
    let arr = [0, 1];
    let nextNum;

    while (counter < n) {
        nextNum = arr.reduce(reducer)
        arr.shift();
        arr.push(nextNum);
        counter += 1;
    }


    return nextNum;
}

function countDevelopers(list) {
    // your awesome code here :)
    var counter = 0;
    list.forEach(dev => {
        if (dev.continent === 'Europe' && dev.language === 'JavaScript') counter += 1;
    })
    return counter;
}

function digital_root(n) {
    while (n > 9) {
        n = rootHelper(n)
    }

    return n;
}

function rootHelper(n) {
    root = 0;

    while (n > 0) {
        root += n % 10;
        n = Math.floor(n / 10);
    }

    return root;
}

function getCount(str) {
    var vowelsCount = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for (let i = 0; i < str.length; i++) {
        if (vowels.has(str[i])) vowelsCount += 1;
    }

    return vowelsCount;
}

function GetSum(a, b) {
    let i;

    let sum = 0;

    if (a > b) {
        i = b;
        return Sum(b, a)
    } else {
        i = a;
        return Sum(a, b)
    }

}

function Sum(a, b) {
    let i = a;
    let sum = 0;

    while (i <= b) {
        sum += i;
        i += 1;
    }

    return sum;
}

