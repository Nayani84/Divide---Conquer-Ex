function findFloor(arr , x) {
  
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {

        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal === x) {
            return midVal;
        }
        else if (midVal < x && (midIdx === arr.length - 1)) {
            return midVal;
        }
        else if (midVal < x && x < arr[midIdx + 1]) {
            return midVal;
        }
        else if (midVal > x) {
            rightIdx = midIdx - 1;
        }
        else {
            leftIdx = midIdx + 1;
        }
    }
    return -1;
}

module.exports = findFloor