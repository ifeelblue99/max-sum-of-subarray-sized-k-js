/*
Sliding window technique
*/

const data = [5, 1, 3, 2, 11, 5, 7, 8]

function maxSize(arr) {

    let max = 0
    let first = 0
    let middle = first + 1
    let last = first + 2

    while (arr[last+1]) {
        middle = first + 1
        last = first + 2
        max = Math.max(max, arr[first] + arr[middle] + arr[last])

        first++
    }
    return max
}

// driver code
console.log(maxSize(data))
