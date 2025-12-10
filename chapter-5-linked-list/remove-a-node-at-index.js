function Node(data, next = null) {
    this.data = data;
    this.next = next;
}

function removeNodeAtIndex(nodeIdx, head) {

    let sentinel = new Node();
    sentinel.next = head;

    let first = sentinel;

    for (let i = 0; i < nodeIdx; i++) {
        first = first?.next;
    }

    let slow = sentinel;

    while (!!first?.next) {
        slow = slow?.next
        first = first?.next;
    }

    return slow

}

// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for easy comparison
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

// Test Cases
console.log("=== Test Cases for removeNodeAtIndex ===\n");

// Test Case 1: List with 5 elements
const list1 = createLinkedList([1, 2, 3, 4, 5]);
const result1 = removeNodeAtIndex(2, list1);
console.log("Test 1: List [1, 2, 3, 4, 5], nodeIdx = 2");
console.log("Returned node data:", result1?.data);
console.log("Expected: slow pointer position\n");

// Test Case 2: List with 3 elements
const list2 = createLinkedList([10, 20, 30]);
const result2 = removeNodeAtIndex(1, list2);
console.log("Test 2: List [10, 20, 30], nodeIdx = 1");
console.log("Returned node data:", result2?.data);
console.log("");

// Test Case 3: List with 1 element
const list3 = createLinkedList([100]);
const result3 = removeNodeAtIndex(0, list3);
console.log("Test 3: List [100], nodeIdx = 0");
console.log("Returned node data:", result3?.data);
console.log("");

// Test Case 4: Empty list
const list4 = createLinkedList([]);
const result4 = removeNodeAtIndex(0, list4);
console.log("Test 4: Empty list, nodeIdx = 0");
console.log("Returned node data:", result4?.data);
console.log("");

// Test Case 5: List with 2 elements
const list5 = createLinkedList([1, 2]);
const result5 = removeNodeAtIndex(0, list5);
console.log("Test 5: List [1, 2], nodeIdx = 0");
console.log("Returned node data:", result5?.data);
console.log("");

// Test Case 6: Longer list
const list6 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const result6 = removeNodeAtIndex(5, list6);
console.log("Test 6: List [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], nodeIdx = 5");
console.log("Returned node data:", result6?.data);
