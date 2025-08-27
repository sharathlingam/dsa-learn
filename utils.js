function swapElInArr(arr, idxOne, idxTwo) {
    const temp = arr[idxOne];
    arr[idxOne] = arr[idxTwo];
    arr[idxTwo] = temp;
    return arr;
}

module.exports = {
    swapElInArr
}