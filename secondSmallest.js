const secondSmallest = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[1]
}

