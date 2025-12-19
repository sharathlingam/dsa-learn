class Stack {

    constructor() {
        this.value = []
    }

    pop() {
        return this.value.pop();
    }

    push(value) {
        this.value.push(value)
        return this.value.length;
    }

    top() {
        return this.value[this.value.length - 1]
    }

}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop();
stack.pop();


console.log("Top", stack.top());
console.log(stack.value);
