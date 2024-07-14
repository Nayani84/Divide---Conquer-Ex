function sortedFrequency(arr , val) {

    let firstIdx = findFirstIdx(arr ,val);
    let lastIdx = findLastIdx(arr ,val);

    if (firstIdx === -1) {
        return -1;
    }
    else {
        return (lastIdx - firstIdx + 1);
    }
}

function findFirstIdx(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let firstIdx;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === val && midIdx === 0) {
            firstIdx = midIdx;
            return firstIdx;
        }
        else if (midVal === val && (arr[midIdx - 1] != val)) {
            firstIdx = midIdx;
            return firstIdx;
        }
        else if (val <= midVal) {
            rightIdx = midIdx - 1;
        }
        else if (val > midVal) {
            leftIdx = midIdx + 1;
        }

    }
    return -1;
}

function findLastIdx(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let lastIdx;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === val && midIdx === (arr.length - 1)) {
            lastIdx = midIdx;
            return lastIdx;
        }
        else if (midVal === val && (arr[midIdx + 1] != val)) {
            lastIdx = midIdx;
            return lastIdx;
        }
        else if (val >= midVal){
            leftIdx = midIdx + 1;
        }
        else if (val < midVal) {
            rightIdx = midIdx - 1;
        }
    }

}
module.exports = sortedFrequency