class Queue {

    constructor() {
        this.value = []
    }

    enqueue(value) {
        this.value.push(value);
        return this.value.length;
    }


    dequeue() {
        return this.value.shift()
    }


    peek() {
        return this.value[0]
    }

}


const queue = new Queue();


queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.value);


queue.dequeue();
queue.dequeue();

console.log(queue.peek());


console.log(queue.value);

