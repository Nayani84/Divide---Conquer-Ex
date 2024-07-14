function findRotationCount(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal < arr[midIdx - 1]) {
            return midIdx;
        }
        else if (midVal > arr[rightIdx]) {
            leftIdx = midIdx + 1;
        }
        else {
            rightIdx = midIdx - 1;
        }
    }
    return 0;
}

module.exports = findRotationCount