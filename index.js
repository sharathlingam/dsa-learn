// Provide ListNode constructor for tests (matching LeetCode)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let size = 0;
    let curr = head;
    let sentinelNode = new ListNode();
    sentinelNode.next = head;
    while (curr) {
        size++;
        curr = curr.next;
    }

    let prev = sentinelNode;
    let removePos = size - n;

    console.log({ removePos });


    for (let i = 0; i < removePos; i++) {
        prev = prev.next;
    }

    prev.next = prev?.next?.next;

    return sentinelNode.next;

};

// ----------------------
// Test helpers and cases
// ----------------------

const assert = require('assert');

function arrayToList(arr) {
    if (!arr || arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function listToArray(head) {
    const res = [];
    let curr = head;
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    return res;
}

function runTestCase(inputArr, n, expectedArr) {
    const inputList = arrayToList(inputArr);
    let result;
    let threw = null;
    try {
        result = removeNthFromEnd(inputList, n);
    } catch (err) {
        threw = err;
    }
    const resultArr = threw ? `[throws ${threw && threw.name ? threw.name : typeof threw}]` : listToArray(result);
    const passed = !threw && deepEqualArrays(resultArr, expectedArr);
    if (passed) {
        console.log(`PASS: input=${JSON.stringify(inputArr)} n=${n} -> ${JSON.stringify(resultArr)}`);
    } else {
        console.error(`FAIL: input=${JSON.stringify(inputArr)} n=${n}\n  expected=${JSON.stringify(expectedArr)}\n  actual  =${JSON.stringify(resultArr)}${threw ? `\n  error: ${threw.stack || threw}` : ''}`);
    }
    return passed;
}

function deepEqualArrays(a, b) {
    try {
        assert.deepStrictEqual(a, b);
        return true;
    } catch (e) {
        return false;
    }
}

// Define test cases
const tests = [
    { input: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { input: [1], n: 1, expected: [] },
    { input: [1, 2], n: 1, expected: [1] },
    { input: [1, 2], n: 2, expected: [2] },
    { input: [1, 2, 3], n: 3, expected: [2, 3] },
    { input: [1, 2, 3], n: 1, expected: [1, 2] },
];

// Run tests
let passedCount = 0;
for (const t of tests) {
    const ok = runTestCase(t.input, t.n, t.expected);
    if (ok) passedCount++;
}
console.log(`\nSummary: ${passedCount}/${tests.length} tests passed.`);