function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === val) {
            return midIdx;
        }
        else if (midVal < val) {
            if (arr[leftIdx] > val && arr[rightIdx] < val) {
                rightIdx = midIdx - 1;
            }
            else {
                leftIdx = midIdx + 1;
            }
        }
        else if (midVal > val) {
            if (arr[leftIdx] <= val) {
                rightIdx = midIdx - 1;
            }
            else {
                leftIdx = midIdx + 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex